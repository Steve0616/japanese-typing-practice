/**
 * localStorage 进度存储模块
 * 用于保存用户在各模块的学习进度
 */

const STORAGE_KEYS = {
  // 五十音各阶段进度
  KANA_SEION: 'jtp_kana_seion',
  KANA_DAKUON: 'jtp_kana_dakuon',
  KANA_YOUON: 'jtp_kana_youon',
  KANA_SOKUON: 'jtp_kana_sokuon',
  KANA_ALL: 'jtp_kana_all',

  // 全局设置
  GLOBAL_MODE: 'jtp_global_mode',    // 'beginner' | 'advanced'
  SOUND_ENABLED: 'jtp_sound',
  BLUR_ENABLED: 'jtp_blur',

  // 各模块总体进度（主页展示用）
  PROGRESS_KANA: 'jtp_progress_kana',
  PROGRESS_WORDS: 'jtp_progress_words',
  PROGRESS_SENTENCES: 'jtp_progress_sentences',
};

// ===== 工具函数 =====

function getItem(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('localStorage 写入失败:', e);
  }
}

// ===== 五十音进度 =====

/**
 * 读取某阶段的掌握状态
 * @param {string} stage - 'seion' | 'dakuon' | 'youon' | 'sokuon' | 'all'
 * @returns {Object} { romaji: { correct, wrong } }
 */
function getKanaProgress(stage) {
  const key = STORAGE_KEYS[`KANA_${stage.toUpperCase()}`];
  return getItem(key) || {};
}

/**
 * 保存某阶段的单个假名状态
 * @param {string} stage
 * @param {string} romaji
 * @param {number} correct
 * @param {number} wrong
 */
function saveKanaItem(stage, romaji, correct, wrong) {
  const key = STORAGE_KEYS[`KANA_${stage.toUpperCase()}`];
  const progress = getKanaProgress(stage);
  progress[romaji] = { correct, wrong };
  setItem(key, progress);
}

/**
 * 清除某阶段进度
 */
function clearKanaProgress(stage) {
  const key = STORAGE_KEYS[`KANA_${stage.toUpperCase()}`];
  localStorage.removeItem(key);
}

/**
 * 计算某阶段掌握百分比
 * @param {string} stage
 * @param {number} totalCount - 该阶段总词条数
 */
function getKanaStagePercent(stage, totalCount) {
  const progress = getKanaProgress(stage);
  const mastered = Object.values(progress).filter(s => s.correct >= 3).length;
  return totalCount > 0 ? Math.round((mastered / totalCount) * 100) : 0;
}

// ===== 全局进度（主页展示） =====

/**
 * 获取/更新五十音模块总体进度
 * @param {Object} data - { seion, dakuon, youon, sokuon } 各阶段进度对象
 */
function updateGlobalKanaProgress(data) {
  const { seion, dakuon, youon, sokuon } = data;
  const total = 46 + 25 + 36 + 7; // 清音46+浊音25+拗音36+促音7 ≈ 114，但实际会按data计算
  const mastered =
    Object.values(seion || {}).filter(s => s.correct >= 3).length +
    Object.values(dakuon || {}).filter(s => s.correct >= 3).length +
    Object.values(youon || {}).filter(s => s.correct >= 3).length +
    Object.values(sokuon || {}).filter(s => s.correct >= 3).length;
  setItem(STORAGE_KEYS.PROGRESS_KANA, { mastered, updatedAt: Date.now() });
  return mastered;
}

function getGlobalKanaProgress() {
  return getItem(STORAGE_KEYS.PROGRESS_KANA) || { mastered: 0 };
}

// ===== 全局设置 =====

function getGlobalMode() {
  return localStorage.getItem(STORAGE_KEYS.GLOBAL_MODE) || 'beginner';
}

function setGlobalMode(mode) {
  localStorage.setItem(STORAGE_KEYS.GLOBAL_MODE, mode);
}

function getSoundEnabled() {
  return localStorage.getItem(STORAGE_KEYS.SOUND_ENABLED) !== 'false';
}

function setSoundEnabled(enabled) {
  localStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, String(enabled));
}

function getBlurEnabled() {
  return localStorage.getItem(STORAGE_KEYS.BLUR_ENABLED) === 'true';
}

function setBlurEnabled(enabled) {
  localStorage.setItem(STORAGE_KEYS.BLUR_ENABLED, String(enabled));
}
