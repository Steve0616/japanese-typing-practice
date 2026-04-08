/**
 * 五十音图数据 - 按学习顺序排列
 * 从简单到复杂：清音行 → 浊音 → 拗音
 */

// 清音五十音图（按行分组，便于初学者按行学习）
export const seionData = {
  name: "清音五十音图",
  groups: [
    {
      name: "あ行",
      items: [
        { romaji: "a", kana: "あ", meaning: "啊" },
        { romaji: "i", kana: "い", meaning: "一" },
        { romaji: "u", kana: "う", meaning: "乌" },
        { romaji: "e", kana: "え", meaning: "诶" },
        { romaji: "o", kana: "お", meaning: "哦" },
      ]
    },
    {
      name: "か行",
      items: [
        { romaji: "ka", kana: "か", meaning: "咖" },
        { romaji: "ki", kana: "き", meaning: "key" },
        { romaji: "ku", kana: "く", meaning: "库" },
        { romaji: "ke", kana: "け", meaning: "开" },
        { romaji: "ko", kana: "こ", meaning: "抠" },
      ]
    },
    {
      name: "さ行",
      items: [
        { romaji: "sa", kana: "さ", meaning: "撒" },
        { romaji: "shi", kana: "し", meaning: "吸" },
        { romaji: "su", kana: "す", meaning: "思" },
        { romaji: "se", kana: "せ", meaning: "塞" },
        { romaji: "so", kana: "そ", meaning: "搜" },
      ]
    },
    {
      name: "た行",
      items: [
        { romaji: "ta", kana: "た", meaning: "他" },
        { romaji: "chi", kana: "ち", meaning: "七" },
        { romaji: "tsu", kana: "つ", meaning: "次" },
        { romaji: "te", kana: "て", meaning: "忒" },
        { romaji: "to", kana: "と", meaning: "托" },
      ]
    },
    {
      name: "な行",
      items: [
        { romaji: "na", kana: "な", meaning: "那" },
        { romaji: "ni", kana: "に", meaning: "泥" },
        { romaji: "nu", kana: "ぬ", meaning: "努" },
        { romaji: "ne", kana: "ね", meaning: "内" },
        { romaji: "no", kana: "の", meaning: "诺" },
      ]
    },
    {
      name: "は行",
      items: [
        { romaji: "ha", kana: "は", meaning: "哈" },
        { romaji: "hi", kana: "ひ", meaning: "黑" },
        { romaji: "fu", kana: "ふ", meaning: "夫" },
        { romaji: "he", kana: "へ", meaning: "黑(敬)" },
        { romaji: "ho", kana: "ほ", meaning: "厚" },
      ]
    },
    {
      name: "ま行",
      items: [
        { romaji: "ma", kana: "ま", meaning: "妈" },
        { romaji: "mi", kana: "み", meaning: "米" },
        { romaji: "mu", kana: "む", meaning: "木" },
        { romaji: "me", kana: "め", meaning: "妹" },
        { romaji: "mo", kana: "も", meaning: "摸" },
      ]
    },
    {
      name: "や行",
      items: [
        { romaji: "ya", kana: "や", meaning: "呀" },
        { romaji: "yu", kana: "ゆ", meaning: "优" },
        { romaji: "yo", kana: "よ", meaning: "哟" },
      ]
    },
    {
      name: "ら行",
      items: [
        { romaji: "ra", kana: "ら", meaning: "拉" },
        { romaji: "ri", kana: "り", meaning: "丽" },
        { romaji: "ru", kana: "る", meaning: "鲁" },
        { romaji: "re", kana: "れ", meaning: "来" },
        { romaji: "ro", kana: "ろ", meaning: "咯" },
      ]
    },
    {
      name: "わ行",
      items: [
        { romaji: "wa", kana: "わ", meaning: "哇" },
        { romaji: "wo", kana: "を", meaning: "哦(宾)" },
      ]
    },
    {
      name: "拨音",
      items: [
        { romaji: "n", kana: "ん", meaning: "嗯" },
      ]
    },
  ]
};

// 浊音数据
export const dakuonData = {
  name: "浊音",
  groups: [
    {
      name: "が行",
      items: [
        { romaji: "ga", kana: "が", meaning: "嘎" },
        { romaji: "gi", kana: "ぎ", meaning: "给" },
        { romaji: "gu", kana: "ぐ", meaning: "古" },
        { romaji: "ge", kana: "げ", meaning: "给(开)" },
        { romaji: "go", kana: "ご", meaning: "狗" },
      ]
    },
    {
      name: "ざ行",
      items: [
        { romaji: "za", kana: "ざ", meaning: "杂" },
        { romaji: "ji", kana: "じ", meaning: "鸡" },
        { romaji: "zu", kana: "ず", meaning: "兹" },
        { romaji: "ze", kana: "ぜ", meaning: "贼" },
        { romaji: "zo", kana: "ぞ", meaning: "走" },
      ]
    },
    {
      name: "だ行",
      items: [
        { romaji: "da", kana: "だ", meaning: "大" },
        { romaji: "di", kana: "ぢ", meaning: "地" },
        { romaji: "du", kana: "づ", meaning: "杜" },
        { romaji: "de", kana: "で", meaning: "嘚" },
        { romaji: "do", kana: "ど", meaning: "豆" },
      ]
    },
    {
      name: "ば行",
      items: [
        { romaji: "ba", kana: "ば", meaning: "八" },
        { romaji: "bi", kana: "び", meaning: "比" },
        { romaji: "bu", kana: "ぶ", meaning: "不" },
        { romaji: "be", kana: "べ", meaning: "背" },
        { romaji: "bo", kana: "ぼ", meaning: "波" },
      ]
    },
    {
      name: "半浊音",
      items: [
        { romaji: "pa", kana: "ぱ", meaning: "趴" },
        { romaji: "pi", kana: "ぴ", meaning: "批" },
        { romaji: "pu", kana: "ぷ", meaning: "铺" },
        { romaji: "pe", kana: "ぺ", meaning: "沛" },
        { romaji: "po", kana: "ぽ", meaning: "破" },
      ]
    },
  ]
};

// 拗音数据
export const youonData = {
  name: "拗音",
  groups: [
    {
      name: "か行",
      items: [
        { romaji: "kya", kana: "きゃ", meaning: "卡呀" },
        { romaji: "kyi", kana: "きぃ", meaning: "key呀" },
        { romaji: "kyu", kana: "きゅ", meaning: "Q" },
        { romaji: "kye", kana: "きぇ", meaning: "开呀" },
        { romaji: "kyo", kana: "きょ", meaning: "扣呀" },
      ]
    },
    {
      name: "さ行",
      items: [
        { romaji: "sha", kana: "しゃ", meaning: "虾" },
        { romaji: "shu", kana: "しゅ", meaning: "书" },
        { romaji: "sho", kana: "しょ", meaning: "少" },
      ]
    },
    {
      name: "た行",
      items: [
        { romaji: "cha", kana: "ちゃ", meaning: "掐" },
        { romaji: "chu", kana: "ちゅ", meaning: "秋" },
        { romaji: "cho", kana: "ちょ", meaning: "敲" },
      ]
    },
    {
      name: "な行",
      items: [
        { romaji: "nya", kana: "にゃ", meaning: "娘" },
        { romaji: "nyu", kana: "にゅ", meaning: "扭" },
        { romaji: "nyo", kana: "にょ", meaning: "鸟" },
      ]
    },
    {
      name: "は行",
      items: [
        { romaji: "hya", kana: "ひゃ", meaning: "喝呀" },
        { romaji: "hyu", kana: "ひゅ", meaning: "休" },
        { romaji: "hyo", kana: "ひょ", meaning: "hyoo" },
      ]
    },
    {
      name: "ま行",
      items: [
        { romaja: "mya", kana: "みゃ", meaning: "咪呀" },
        { romaji: "myu", kana: "みゅ", meaning: "谬" },
        { romaji: "myo", kana: "みょ", meaning: "秒" },
      ]
    },
    {
      name: "ら行",
      items: [
        { romaji: "rya", kana: "りゃ", meaning: "利亚" },
        { romaji: "ryu", kana: "りゅ", meaning: "留" },
        { romaji: "ryo", kana: "りょ", meaning: "辽" },
      ]
    },
    {
      name: "ぎゃ",
      items: [
        { romaji: "gya", kana: "ぎゃ", meaning: "嘎呀" },
        { romaji: "gyu", kana: "ぎゅ", meaning: "久" },
        { romaji: "gyo", kana: "ぎょ", meaning: "救" },
      ]
    },
    {
      name: "じゃ",
      items: [
        { romaji: "ja", kana: "じゃ", meaning: "加" },
        { romaji: "ju", kana: "じゅ", meaning: "旧" },
        { romaji: "jo", kana: "じょ", meaning: "女" },
      ]
    },
    {
      name: "ぢゃ",
      items: [
        { romaji: "dya", kana: "ぢゃ", meaning: "地呀" },
        { romaji: "dyu", kana: "ぢゅ", meaning: "丢" },
        { romaji: "dyo", kana: "ぢょ", meaning: "雕" },
      ]
    },
    {
      name: "びゃ",
      items: [
        { romaji: "bya", kana: "びゃ", meaning: "逼呀" },
        { romaji: "byu", kana: "びゅ", meaning: "逼尤" },
        { romaji: "byo", kana: "びょ", meaning: "表" },
      ]
    },
    {
      name: "ぴゃ",
      items: [
        { romaji: "pya", kana: "ぴゃ", meaning: "批呀" },
        { romaji: "pyu", kana: "ぴゅ", meaning: "皮尤" },
        { romaji: "pyo", kana: "ぴょ", meaning: "飘" },
      ]
    },
  ]
};

// 促音数据
export const sokuonData = {
  name: "促音",
  items: [
    { romaji: "kka", kana: "っか", meaning: "咖" },
    { romaji: "kki", kana: "っき", meaning: "key" },
    { romaji: "kku", kana: "っく", meaning: "哭" },
    { romaji: "tte", kana: "って", meaning: "忒" },
    { romaji: "tto", kana: "っと", meaning: "托" },
    { romaji: "ssu", kana: "っす", meaning: "司" },
    { romaji: "ppa", kana: "っぱ", meaning: "趴" },
  ]
};

// 导出所有数据
export const allKanaData = {
  levels: [
    seionData,
    dakuonData,
    youonData,
    sokuonData
  ]
};

// 片假名数据（用于练习）
export const kataData = {
  name: "片假名",
  groups: [
    {
      name: "ア行",
      items: [
        { romaji: "a", kana: "ア", meaning: "啊" },
        { romaji: "i", kana: "イ", meaning: "一" },
        { romaji: "u", kana: "ウ", meaning: "乌" },
        { romaji: "e", kana: "エ", meaning: "诶" },
        { romaji: "o", kana: "オ", meaning: "哦" },
      ]
    },
    {
      name: "カ行",
      items: [
        { romaji: "ka", kana: "カ", meaning: "咖" },
        { romaji: "ki", kana: "キ", meaning: "key" },
        { romaji: "ku", kana: "ク", meaning: "库" },
        { romaji: "ke", kana: "ケ", meaning: "开" },
        { romaji: "ko", kana: "コ", meaning: "抠" },
      ]
    },
    {
      name: "サ行",
      items: [
        { romaji: "sa", kana: "サ", meaning: "撒" },
        { romaji: "shi", kana: "シ", meaning: "吸" },
        { romaji: "su", kana: "ス", meaning: "思" },
        { romaji: "se", kana: "セ", meaning: "塞" },
        { romaji: "so", kana: "ソ", meaning: "搜" },
      ]
    },
    {
      name: "タ行",
      items: [
        { romaji: "ta", kana: "タ", meaning: "他" },
        { romaji: "chi", kana: "チ", meaning: "七" },
        { romaji: "tsu", kana: "ツ", meaning: "次" },
        { romaji: "te", kana: "テ", meaning: "忒" },
        { romaji: "to", kana: "ト", meaning: "托" },
      ]
    },
    {
      name: "ナ行",
      items: [
        { romaji: "na", kana: "ナ", meaning: "那" },
        { romaji: "ni", kana: "ニ", meaning: "泥" },
        { romaji: "nu", kana: "ヌ", meaning: "努" },
        { romaji: "ne", kana: "ネ", meaning: "内" },
        { romaji: "no", kana: "ノ", meaning: "诺" },
      ]
    },
    {
      name: "ハ行",
      items: [
        { romaji: "ha", kana: "ハ", meaning: "哈" },
        { romaji: "hi", kana: "ヒ", meaning: "黑" },
        { romaji: "fu", kana: "フ", meaning: "夫" },
        { romaji: "he", kana: "ヘ", meaning: "黑(敬)" },
        { romaji: "ho", kana: "ホ", meaning: "厚" },
      ]
    },
    {
      name: "マ行",
      items: [
        { romaji: "ma", kana: "マ", meaning: "妈" },
        { romaji: "mi", kana: "ミ", meaning: "米" },
        { romaji: "mu", kana: "ム", meaning: "木" },
        { romaji: "me", kana: "メ", meaning: "妹" },
        { romaji: "mo", kana: "モ", meaning: "摸" },
      ]
    },
    {
      name: "ヤ行",
      items: [
        { romaji: "ya", kana: "ヤ", meaning: "呀" },
        { romaji: "yu", kana: "ユ", meaning: "优" },
        { romaji: "yo", kana: "ヨ", meaning: "哟" },
      ]
    },
    {
      name: "ラ行",
      items: [
        { romaji: "ra", kana: "ラ", meaning: "拉" },
        { romaji: "ri", kana: "リ", meaning: "丽" },
        { romaji: "ru", kana: "ル", meaning: "鲁" },
        { romaji: "re", kana: "レ", meaning: "来" },
        { romaji: "ro", kana: "ロ", meaning: "咯" },
      ]
    },
    {
      name: "ワ行",
      items: [
        { romaji: "wa", kana: "ワ", meaning: "哇" },
        { romaji: "wo", kana: "ヲ", meaning: "哦(宾)" },
      ]
    },
    {
      name: "拨音",
      items: [
        { romaji: "n", kana: "ン", meaning: "嗯" },
      ]
    },
  ]
};

// 浊音片假名
export const dakuonKataData = {
  name: "浊音片假名",
  groups: [
    {
      name: "ガ行",
      items: [
        { romaji: "ga", kana: "ガ", meaning: "嘎" },
        { romaji: "gi", kana: "ギ", meaning: "给" },
        { romaji: "gu", kana: "グ", meaning: "古" },
        { romaji: "ge", kana: "ゲ", meaning: "给(开)" },
        { romaji: "go", kana: "ゴ", meaning: "狗" },
      ]
    },
    {
      name: "ザ行",
      items: [
        { romaji: "za", kana: "ザ", meaning: "杂" },
        { romaji: "ji", kana: "ジ", meaning: "鸡" },
        { romaji: "zu", kana: "ズ", meaning: "兹" },
        { romaji: "ze", kana: "ゼ", meaning: "贼" },
        { romaji: "zo", kana: "ゾ", meaning: "走" },
      ]
    },
    {
      name: "ダ行",
      items: [
        { romaji: "da", kana: "ダ", meaning: "大" },
        { romaji: "di", kana: "ヂ", meaning: "地" },
        { romaji: "du", kana: "ヅ", meaning: "杜" },
        { romaji: "de", kana: "デ", meaning: "嘚" },
        { romaji: "do", kana: "ド", meaning: "豆" },
      ]
    },
    {
      name: "バ行",
      items: [
        { romaji: "ba", kana: "バ", meaning: "八" },
        { romaji: "bi", kana: "ビ", meaning: "比" },
        { romaji: "bu", kana: "ブ", meaning: "不" },
        { romaji: "be", kana: "ベ", meaning: "背" },
        { romaji: "bo", kana: "ボ", meaning: "波" },
      ]
    },
    {
      name: "半浊音",
      items: [
        { romaji: "pa", kana: "パ", meaning: "趴" },
        { romaji: "pi", kana: "ピ", meaning: "批" },
        { romaji: "pu", kana: "プ", meaning: "铺" },
        { romaji: "pe", kana: "ペ", meaning: "沛" },
        { romaji: "po", kana: "ポ", meaning: "破" },
      ]
    },
  ]
};

// 拗音片假名
export const youonKataData = {
  name: "拗音片假名",
  groups: [
    { name: "キャ", items: [{ romaji: "kya", kana: "キャ", meaning: "卡呀" }, { romaji: "kyu", kana: "キュ", meaning: "Q" }, { romaji: "kyo", kana: "キョ", meaning: "扣呀" }] },
    { name: "シャ", items: [{ romaji: "sha", kana: "シャ", meaning: "虾" }, { romaji: "shu", kana: "シュ", meaning: "书" }, { romaji: "sho", kana: "ショ", meaning: "少" }] },
    { name: "チャ", items: [{ romaji: "cha", kana: "チャ", meaning: "掐" }, { romaji: "chu", kana: "チュ", meaning: "秋" }, { romaji: "cho", kana: "チョ", meaning: "敲" }] },
    { name: "ニャ", items: [{ romaji: "nya", kana: "ニャ", meaning: "娘" }, { romaji: "nyu", kana: "ニュ", meaning: "扭" }, { romaji: "nyo", kana: "ニョ", meaning: "鸟" }] },
    { name: "ヒャ", items: [{ romaji: "hya", kana: "ヒャ", meaning: "喝呀" }, { romaji: "hyu", kana: "ヒュ", meaning: "休" }, { romaji: "hyo", kana: "ヒョ", meaning: "hyoo" }] },
    { name: "ミャ", items: [{ romaji: "mya", kana: "ミャ", meaning: "咪呀" }, { romaji: "myu", kana: "ミュ", meaning: "谬" }, { romaji: "myo", kana: "ミョ", meaning: "秒" }] },
    { name: "リャ", items: [{ romaja: "rya", kana: "リャ", meaning: "利亚" }, { romaji: "ryu", kana: "リュ", meaning: "留" }, { romaji: "ryo", kana: "リョ", meaning: "辽" }] },
    { name: "ギャ", items: [{ romaji: "gya", kana: "ギャ", meaning: "嘎呀" }, { romaji: "gyu", kana: "ギュ", meaning: "久" }, { romaji: "gyo", kana: "ギョ", meaning: "救" }] },
    { name: "ジャ", items: [{ romaji: "ja", kana: "ジャ", meaning: "加" }, { romaji: "ju", kana: "ジュ", meaning: "旧" }, { romaji: "jo", kana: "ジョ", meaning: "女" }] },
    { name: "ビャ", items: [{ romaji: "bya", kana: "ビャ", meaning: "逼呀" }, { romaji: "byu", kana: "ビュ", meaning: "逼尤" }, { romaji: "byo", kana: "ビョ", meaning: "表" }] },
    { name: "ピャ", items: [{ romaji: "pya", kana: "ピャ", meaning: "批呀" }, { romaji: "pyu", kana: "ピュ", meaning: "皮尤" }, { romaji: "pyo", kana: "ピョ", meaning: "飘" }] },
  ]
};

// 平假名到片假名的映射（用于后续扩展）
export const hiraToKata = {
  "あ": "ア", "い": "イ", "う": "ウ", "え": "エ", "お": "オ",
  "か": "カ", "き": "キ", "く": "ク", "け": "ケ", "こ": "コ",
  "さ": "サ", "し": "シ", "す": "ス", "せ": "セ", "そ": "ソ",
  "た": "タ", "ち": "チ", "つ": "ツ", "て": "テ", "と": "ト",
  "な": "ナ", "に": "ニ", "ぬ": "ヌ", "ね": "ネ", "の": "ノ",
  "は": "ハ", "ひ": "ヒ", "ふ": "フ", "へ": "ヘ", "ほ": "ホ",
  "ま": "マ", "み": "ミ", "む": "ム", "め": "メ", "も": "モ",
  "や": "ヤ", "ゆ": "ユ", "よ": "ヨ",
  "ら": "ラ", "り": "リ", "る": "ル", "れ": "レ", "ろ": "ロ",
  "わ": "ワ", "を": "ヲ", "ん": "ン",
  "が": "ガ", "ぎ": "ギ", "ぐ": "グ", "げ": "ゲ", "ご": "ゴ",
  "ざ": "ザ", "じ": "ジ", "ず": "ズ", "ぜ": "ゼ", "ぞ": "ゾ",
  "だ": "ダ", "ぢ": "ヂ", "づ": "ヅ", "で": "デ", "ど": "ド",
  "ば": "バ", "び": "ビ", "ぶ": "ブ", "べ": "ベ", "ぼ": "ボ",
  "ぱ": "パ", "ぴ": "ピ", "ぷ": "プ", "ぺ": "ペ", "ぽ": "ポ",
};