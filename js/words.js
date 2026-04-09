/**
 * 词汇练习模块
 * 包含音效系统、蒙版系统、词汇练习核心逻辑
 */

(function() {
  'use strict';

  // ============ 音效系统 ============
  var AudioCtx = window.AudioContext || window.webkitAudioContext;
  var audioCtx = null;
  var soundEnabled = true;

  function initAudio() {
    if (!audioCtx) audioCtx = new AudioCtx();
  }

  function playSound(type) {
    if (!soundEnabled) return;
    initAudio();
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    if (type === 'correct') {
      osc.frequency.setValueAtTime(523, audioCtx.currentTime);
      osc.frequency.setValueAtTime(659, audioCtx.currentTime + 0.1);
      osc.frequency.setValueAtTime(784, audioCtx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'wrong') {
      osc.frequency.setValueAtTime(200, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(150, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'combo') {
      [523, 659, 784, 1047].forEach(function(f, i) {
        var o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.connect(g);
        g.connect(audioCtx.destination);
        o.frequency.value = f;
        g.gain.setValueAtTime(0.2, audioCtx.currentTime + i * 0.08);
        g.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + i * 0.08 + 0.15);
        o.start(audioCtx.currentTime + i * 0.08);
        o.stop(audioCtx.currentTime + i * 0.08 + 0.15);
      });
    } else if (type === 'complete') {
      [523, 659, 784, 659, 784, 1047].forEach(function(f, i) {
        var o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.connect(g);
        g.connect(audioCtx.destination);
        o.frequency.value = f;
        o.type = 'sine';
        g.gain.setValueAtTime(0.25, audioCtx.currentTime + i * 0.12);
        g.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + i * 0.12 + 0.25);
        o.start(audioCtx.currentTime + i * 0.12);
        o.stop(audioCtx.currentTime + i * 0.12 + 0.3);
      });
    } else if (type === 'skip') {
      osc.frequency.value = 400;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.1);
    }
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    var t = document.getElementById('soundToggle'), i = document.getElementById('soundIcon');
    if (soundEnabled) {
      t.classList.add('active');
      i.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>';
    } else {
      t.classList.remove('active');
      i.innerHTML = '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
    }
    try { localStorage.setItem('jtp_sound', soundEnabled); } catch (e) {}
  }

  // ============ 蒙版系统 ============
  var blurMaskEnabled = false;

  // ============ 假名提示系统 ============
  var kanaHintEnabled = false;

  function toggleKanaHint() {
    kanaHintEnabled = !kanaHintEnabled;
    var t = document.getElementById('kanaHintToggle'), tt = document.getElementById('kanaHintText');
    if (kanaHintEnabled) {
      t.classList.add('active');
      tt.textContent = '假名提示开';
    } else {
      t.classList.remove('active');
      tt.textContent = '假名提示';
    }
    try { localStorage.setItem('jtp_kana_hint', kanaHintEnabled); } catch (e) {}
    updateDisplay();
  }

  // ============ 练习数量系统 ============
  var currentCount = 'all';

  function setCount(count) {
    currentCount = count;
    try { localStorage.setItem('jtp_words_count', count); } catch (e) {}
    restartPractice();
  }

  function toggleBlurMask() {
    blurMaskEnabled = !blurMaskEnabled;
    var t = document.getElementById('blurToggle'), tt = document.getElementById('blurToggleText');
    if (blurMaskEnabled) {
      if (t) t.classList.add('active');
      if (tt) tt.textContent = '开';
    } else {
      if (t) t.classList.remove('active');
      if (tt) tt.textContent = '关';
      meaningDisplay.classList.remove('blur-mask', 'revealed');
    }
    try { localStorage.setItem('jtp_blur', blurMaskEnabled); } catch (e) {}
  }

  function toggleSettings() {
    var p = document.getElementById('settingsPanel'), o = document.getElementById('settingsOverlay');
    if (p.classList.contains('show')) {
      p.classList.remove('show');
      o.classList.remove('show');
    } else {
      p.classList.add('show');
      o.classList.add('show');
    }
  }

  function toggleKanaHintFromSettings() {
    toggleKanaHint();
    var tt = document.getElementById('kanaHintText');
    if (tt) tt.textContent = kanaHintEnabled ? '开' : '关';
  }

  function revealBlurMask() {
    if (meaningDisplay.classList.contains('blur-mask') && !meaningDisplay.classList.contains('revealed')) {
      meaningDisplay.classList.add('revealed');
      return true;
    }
    return false;
  }

  // ============ 词汇练习核心逻辑 ============
  var currentLevel = 'n5';
  var currentMode = 'challenge';
  var itemStates = {};
  var itemsList = [];
  var currentItem = null;
  var totalAttempts = 0;
  var maxStreak = 0;
  var currentStreak = 0;
  var startTime = null;
  var isComplete = false;
  var answerShown = false;
  var health = 3;
  var MAX_HEALTH = 3;

  // DOM元素（由外部初始化后传入）
  var kanaDisplay, meaningDisplay, hintText, typingInput, progressGrid, comboOverlay, correctPopup;

  function getStorageKey() {
    return 'jtp_words_' + currentLevel;
  }

  function loadItemStates() {
    try {
      var r = localStorage.getItem(getStorageKey());
      return r ? JSON.parse(r) : {};
    } catch (e) {
      return {};
    }
  }

  function saveItemStates() {
    try { localStorage.setItem(getStorageKey(), JSON.stringify(itemStates)); } catch (e) {}
  }

  function getCurrentWords() {
    var all = [];
    if (currentLevel === 'all') all = getAllWords();
    else if (currentLevel === 'n5') all = getN5Words();
    else if (currentLevel === 'n4') all = getN4Words();
    
    // 随机选择指定数量
    if (currentCount !== 'all' && all.length > currentCount) {
      all = shuffleArray([...all]).slice(0, parseInt(currentCount));
    }
    return all;
  }
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function initItemStates() {
    itemsList = getCurrentWords();
    var saved = loadItemStates();
    itemStates = {};
    itemsList.forEach(function(it) {
      itemStates[it.word] = saved[it.word] || { correct: 0, wrong: 0 };
    });
    renderProgressGrid();
    updateStats();
  }

  function renderProgressGrid() {
    progressGrid.innerHTML = '';
    itemsList.forEach(function(it) {
      var dot = document.createElement('div');
      dot.className = 'progress-dot';
      var s = itemStates[it.word];
      if (s.correct >= 3) dot.classList.add('mastered');
      else if (s.wrong > 0) dot.classList.add('wrong');
      else if (s.correct > 0) dot.classList.add('learning');
      progressGrid.appendChild(dot);
    });
  }

  function updateStats() {
    var m = 0, l = 0;
    itemsList.forEach(function(it) {
      var s = itemStates[it.word];
      if (s.correct >= 3) m++;
      else if (s.correct > 0 || s.wrong > 0) l++;
    });
    document.getElementById('masteredCount').textContent = m;
    document.getElementById('learningCount').textContent = l;
    document.getElementById('totalItems').textContent = itemsList.length;
    document.getElementById('streakCount').textContent = currentStreak;
    var pct = itemsList.length > 0 ? Math.round((m / itemsList.length) * 100) : 0;
    document.getElementById('progressPercent').textContent = pct + '%';
    document.getElementById('progressFill').style.width = pct + '%';
  }

  function getNextItem() {
    var un = itemsList.filter(function(it) { return itemStates[it.word].correct < 3; });
    if (!un.length) return null;
    var wts = un.map(function(it) {
      var s = itemStates[it.word];
      var wt = 1 + s.wrong * 2;
      wt = Math.max(1, wt - s.correct * 0.5);
      return { item: it, weight: wt };
    });
    var tot = wts.reduce(function(s, w) { return s + w.weight; }, 0);
    var r = Math.random() * tot;
    for (var i = 0; i < wts.length; i++) {
      r -= wts[i].weight;
      if (r <= 0) return wts[i].item;
    }
    return wts[0].item;
  }

  function updateDisplay() {
    currentItem = getNextItem();
    answerShown = false;
    if (!currentItem) {
      showComplete();
      return;
    }
    kanaDisplay.classList.remove('pop');
    void kanaDisplay.offsetWidth;
    kanaDisplay.classList.add('pop');
    kanaDisplay.textContent = currentItem.word;
    
    // 显示假名提示
    var kanaHintDisplay = document.getElementById('kanaHintDisplay');
    if (kanaHintEnabled && currentItem.kana) {
      kanaHintDisplay.style.display = 'block';
      kanaHintDisplay.textContent = currentItem.kana;
    } else {
      kanaHintDisplay.style.display = 'none';
    }
    
    if (currentMode === 'learn') {
      meaningDisplay.textContent = currentItem.meaning;
      if (blurMaskEnabled) {
        meaningDisplay.classList.remove('revealed');
        meaningDisplay.classList.add('show', 'blur-mask');
      } else {
        meaningDisplay.classList.remove('blur-mask', 'revealed');
        meaningDisplay.classList.add('show');
      }
    } else {
      meaningDisplay.textContent = '';
      meaningDisplay.classList.remove('show', 'blur-mask', 'revealed');
    }
    hintText.textContent = '输入罗马字（空格确认 / 手机自动判定）';
    hintText.classList.remove('correct', 'wrong');
    typingInput.value = '';
    typingInput.focus();
  }

  function showAnswer() {
    if (!currentItem || answerShown) return;
    answerShown = true;
    meaningDisplay.textContent = currentItem.meaning;
    meaningDisplay.classList.add('show');
    hintText.textContent = '答案: ' + currentItem.romaji;
    hintText.classList.add('wrong');
  }

  function showCombo(c) {
    comboOverlay.textContent = c + ' COMBO!';
    comboOverlay.classList.remove('show');
    void comboOverlay.offsetWidth;
    comboOverlay.classList.add('show');
    playSound('combo');
  }

  function showCorrectPopup() {
    correctPopup.classList.remove('show');
    void correctPopup.offsetWidth;
    correctPopup.classList.add('show');
  }

  function checkAnswer(input, item) {
    return input.toLowerCase().trim() === item.romaji.toLowerCase().trim();
  }

  function setLevel(l) {
    currentLevel = l;
    document.getElementById('btnN5').classList.toggle('active', l === 'n5');
    document.getElementById('btnN4').classList.toggle('active', l === 'n4');
    document.getElementById('btnAll').classList.toggle('active', l === 'all');
    totalAttempts = 0;
    maxStreak = 0;
    currentStreak = 0;
    isComplete = false;
    startTime = Date.now();
    initItemStates();
    document.getElementById('practiceArea').style.display = 'block';
    document.getElementById('completeScreen').classList.remove('show');
    updateDisplay();
  }

  function setMode(m) {
    currentMode = m;
    document.getElementById('modeChallenge').classList.toggle('active', m === 'challenge');
    document.getElementById('modeLearn').classList.toggle('active', m === 'learn');
    document.getElementById('learnModeHint').style.display = m === 'learn' ? 'block' : 'none';
    document.getElementById('challengeHint').style.display = m === 'challenge' ? 'flex' : 'none';
    document.getElementById('healthBar').style.display = m === 'challenge' ? 'flex' : 'none';
    document.getElementById('tipText').innerHTML = m === 'learn'
      ? '<kbd>回车</kbd> 确认 &nbsp;|&nbsp; <kbd>Tab</kbd> 显示答案 &nbsp;|&nbsp; <kbd>空格</kbd> 输入'
      : '<kbd>回车</kbd> 确认 &nbsp;|&nbsp; <kbd>Tab</kbd> 显示答案 &nbsp;|&nbsp; <kbd>空格</kbd> 输入';
    health = MAX_HEALTH;
    updateHealthDisplay();
    totalAttempts = 0;
    maxStreak = 0;
    currentStreak = 0;
    startTime = Date.now();
  }

  function updateHealthDisplay() {
    var hearts = document.querySelectorAll('.heart');
    hearts.forEach(function(h, i) {
      if (i < health) {
        h.classList.add('full');
        h.classList.remove('empty');
        h.textContent = '❤️';
      } else {
        h.classList.remove('full');
        h.classList.add('empty');
        h.textContent = '🖤';
      }
    });
  }

  function loseHealth() {
    if (health > 0) {
      var hearts = document.querySelectorAll('.heart');
      var lh = hearts[health - 1];
      lh.classList.add('losing');
      setTimeout(function() { lh.classList.remove('losing'); }, 500);
      health--;
      updateHealthDisplay();
    }
    if (health <= 0) showFailOverlay();
  }

  function showFailOverlay() {
    isComplete = true;
    document.getElementById('failAttempts').textContent = totalAttempts;
    document.getElementById('failStreak').textContent = maxStreak;
    document.getElementById('failOverlay').classList.add('show');
    playSound('wrong');
  }

  function switchToLearnMode() {
    document.getElementById('failOverlay').classList.remove('show');
    setMode('learn');
    restartPractice();
  }

  function restartChallenge() {
    document.getElementById('failOverlay').classList.remove('show');
    setMode('challenge');
    restartPractice();
  }

  function restartPractice() {
    totalAttempts = 0;
    maxStreak = 0;
    currentStreak = 0;
    isComplete = false;
    startTime = Date.now();
    initItemStates();
    document.getElementById('practiceArea').style.display = 'block';
    document.getElementById('completeScreen').classList.remove('show');
    health = MAX_HEALTH;
    updateHealthDisplay();
    updateDisplay();
  }

  function submitAnswer() {
    var input = typingInput.value.trim();
    if (!input || !currentItem) return;
    totalAttempts++;
    var state = itemStates[currentItem.word];
    var correct = checkAnswer(input, currentItem);
    if (correct) {
      state.correct++;
      currentStreak++;
      if (currentStreak > maxStreak) maxStreak = currentStreak;
      typingInput.classList.add('correct');
      hintText.textContent = '✓ 正确！';
      hintText.classList.add('correct');
      meaningDisplay.textContent = currentItem.meaning;
      meaningDisplay.classList.add('show');
      playSound('correct');
      showCorrectPopup();
      if (currentStreak >= 3) showCombo(currentStreak);
      saveItemStates();
      setTimeout(function() {
        typingInput.classList.remove('correct');
        updateDisplay();
        renderProgressGrid();
        updateStats();
      }, 500);
    } else {
      state.wrong++;
      currentStreak = 0;
      typingInput.classList.add('wrong');
      playSound('wrong');
      saveItemStates();
      if (currentMode === 'learn') {
        meaningDisplay.textContent = currentItem.meaning;
        meaningDisplay.classList.add('show');
        hintText.textContent = '✗ 正确答案是: ' + currentItem.romaji;
        hintText.classList.add('wrong');
        setTimeout(function() {
          typingInput.classList.remove('wrong');
          typingInput.value = '';
          typingInput.focus();
        }, 600);
      } else {
        hintText.textContent = '✗ 正确答案是: ' + currentItem.romaji;
        hintText.classList.add('wrong');
        meaningDisplay.textContent = currentItem.meaning;
        meaningDisplay.classList.add('show');
        loseHealth();
        setTimeout(function() {
          if (health > 0) {
            typingInput.classList.remove('wrong');
            updateDisplay();
          }
        }, 1000);
      }
    }
  }

  function showComplete() {
    isComplete = true;
    document.getElementById('practiceArea').style.display = 'none';
    document.getElementById('completeScreen').classList.add('show');
    var t = Math.round((Date.now() - startTime) / 1000);
    document.getElementById('finalStreak').textContent = maxStreak;
    document.getElementById('finalAttempts').textContent = totalAttempts;
    document.getElementById('finalTime').textContent = t + 's';
    playSound('complete');
  }

  // ============ 初始化 ============
  function init(domElements) {
    // 接收DOM元素
    kanaDisplay = domElements.kanaDisplay;
    meaningDisplay = domElements.meaningDisplay;
    hintText = domElements.hintText;
    typingInput = domElements.typingInput;
    progressGrid = domElements.progressGrid;
    comboOverlay = domElements.comboOverlay;
    correctPopup = domElements.correctPopup;

    try {
      soundEnabled = localStorage.getItem('jtp_sound') !== 'false';
      if (!soundEnabled) {
        document.getElementById('soundToggle').classList.remove('active');
        document.getElementById('soundIcon').innerHTML = '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
      }
    } catch (e) {}

    try {
      blurMaskEnabled = localStorage.getItem('jtp_blur') === 'true';
      if (blurMaskEnabled) {
        document.getElementById('blurToggle').classList.add('active');
        document.getElementById('blurToggleText').textContent = '蒙版开';
      }
    } catch (e) {}

    try {
      kanaHintEnabled = localStorage.getItem('jtp_kana_hint') === 'true';
      if (kanaHintEnabled) {
        document.getElementById('kanaHintToggle').classList.add('active');
        document.getElementById('kanaHintText').textContent = '假名提示开';
      }
    } catch (e) {}

    try {
      var savedCount = localStorage.getItem('jtp_words_count');
      if (savedCount) {
        currentCount = savedCount;
        document.getElementById('countSelect').value = savedCount;
      }
    } catch (e) {}

    // 事件绑定
    typingInput.addEventListener('keydown', function(e) {
      if (isComplete) return;
      if (e.key === ' ') {
        // 空格输入，不拦截
      }
      if (e.key === 'Tab') {
        e.preventDefault();
        if (currentMode === 'learn') {
          if (!revealBlurMask()) showAnswer();
        } else {
          loseHealth();
          if (health > 0) updateDisplay();
        }
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        submitAnswer();
      }
    });

    var isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    typingInput.addEventListener('input', function() {
      if (isComplete || !currentItem || !isTouchDevice) return;
      var v = typingInput.value.trim();
      if (v.length >= currentItem.romaji.length) setTimeout(function() { submitAnswer(); }, 100);
    });

    typingInput.addEventListener('click', function() { this.focus(); });
    meaningDisplay.addEventListener('click', function() { if (currentMode === 'learn') revealBlurMask(); });
    document.getElementById('practiceArea').addEventListener('click', function() { if (!isComplete) typingInput.focus(); });

    // 初始化练习
    initItemStates();
    setMode('challenge');
    updateDisplay();
    startTime = Date.now();
  }

  // 暴露到全局
  window.WordsPractice = {
    init: init,
    setLevel: setLevel,
    setMode: setMode,
    setCount: setCount,
    toggleSound: toggleSound,
    toggleBlurMask: toggleBlurMask,
    toggleKanaHint: toggleKanaHint,
    toggleKanaHintFromSettings: toggleKanaHintFromSettings,
    toggleSettings: toggleSettings,
    switchToLearnMode: switchToLearnMode,
    restartChallenge: restartChallenge,
    restartPractice: restartPractice,
    playSound: playSound
  };
})();
