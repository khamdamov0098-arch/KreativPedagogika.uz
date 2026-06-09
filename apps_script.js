// ============================================================
// KreativPedagogika.uz — Google Apps Script (to'liq)
// Script URL ni olish: Deploy → New deployment → Web app
// Execute as: Me | Who has access: Anyone
// ============================================================

const SS = SpreadsheetApp.getActiveSpreadsheet();

// Sheet nomlari — Sizning sheetlaringizga mos
const SH = {
  testlar:   'Testlar',        // A:Test savollari, B:A-variant, C:B-variant, D:C-variant, E:D-variant, F:To'g'ri javob
  natijalar: 'Natijalar',      // A:Vaqt, B:Ism familya, C:Natija, D:Foizda, E:Telefon raqam, F:Sarflangan vaqt, G:Topshiriq turi
  rasmliTest:'Rasmli test',    // A:Savol matni, B:A rasm URL, C:B rasm URL, D:C rasm URL, E:D rasm URL, F:To'g'ri javob
  foydalanuvchilar:'Foydalanuvchilar', // A:Telefon, B:Ism familya, C:Ro'yxatdan o'tgan vaqt
};

// ============================================================
// ASOSIY HANDLER
// ============================================================
function doGet(e) {
  const p = e.parameter;
  let result;
  try {
    switch(p.action) {
      case 'checkPhone':      result = checkPhone(p.phone); break;
      case 'register':        result = register(p.name, p.phone); break;
      case 'login':           result = login(p.phone); break;
      case 'getQuestions':    result = getQuestions(); break;
      case 'getInnovTests':   result = getInnovTests(); break;
      case 'saveResult':      result = saveResult(p); break;
      case 'getLeaderboard':  result = getLeaderboard(); break;
      default: result = {error: 'Unknown action: ' + (p.action||'none')};
    }
  } catch(err) {
    result = {error: err.toString()};
  }
  // JSONP callback qo'llab-quvvatlash (CORS uchun)
  const callback = p.callback;
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + JSON.stringify(result) + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================================
// FOYDALANUVCHILAR
// ============================================================
// "+" belgisini olib tashlash (sheet va input formatlari mos kelsin)
function stripPlus(phone) {
  return String(phone || '').trim().replace(/^\+/, '');
}

function checkPhone(phone) {
  if (!phone) return {exists: false};
  const sh = SS.getSheetByName(SH.foydalanuvchilar);
  if (!sh) return {exists: false};
  const data = sh.getDataRange().getValues();
  const p = stripPlus(phone);
  for (let i = 1; i < data.length; i++) {
    if (stripPlus(data[i][0]) === p) return {exists: true};
  }
  return {exists: false};
}

function register(name, phone) {
  if (!name || !phone) return {success: false, message: 'Ism va telefon kerak'};
  if (checkPhone(phone).exists) return {success: false, message: "Bu telefon allaqachon ro'yxatdan o'tgan"};
  const sh = SS.getSheetByName(SH.foydalanuvchilar);
  if (!sh) return {success: false, message: 'Sheet topilmadi'};
  const date = Utilities.formatDate(new Date(), 'Asia/Tashkent', 'dd.MM.yyyy HH:mm');
  // "+" bilan saqlash (birxil format)
  const cleanPhone = '+' + stripPlus(phone);
  sh.appendRow([cleanPhone, name, date]);
  return {success: true};
}

function login(phone) {
  if (!phone) return {success: false};
  const sh = SS.getSheetByName(SH.foydalanuvchilar);
  if (!sh) return {success: false};
  const data = sh.getDataRange().getValues();
  const p = stripPlus(phone);
  for (let i = 1; i < data.length; i++) {
    if (stripPlus(data[i][0]) === p) {
      return {success: true, user: {name: String(data[i][1]), telefon: String(data[i][0])}};
    }
  }
  return {success: false, message: 'Telefon topilmadi'};
}

// ============================================================
// TEST SAVOLLARI
// Sizning sheetingiz: A=Savol, B=A-variant, C=B-variant, D=C-variant, E=D-variant, F=To'g'ri javob (A/B/C/D)
// ============================================================
function getQuestions() {
  const sh = SS.getSheetByName(SH.testlar);
  if (!sh) return {questions: []};
  const data = sh.getDataRange().getValues();
  const questions = [];
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (!row[0] || !String(row[0]).trim()) continue;
    questions.push({
      question: String(row[0]).trim(),
      a:        String(row[1] || '').trim(),
      b:        String(row[2] || '').trim(),
      c:        String(row[3] || '').trim(),
      d:        String(row[4] || '').trim(),
      correct:  letterToIndex(String(row[5] || 'A').trim()),
      image:    ''
    });
  }
  return {questions};
}

// ============================================================
// RASMLI TEST (Innovatsion test)
// Sizning sheetingiz: A=Savol matni, B=A rasm URL, C=B rasm URL, D=C rasm URL, E=D rasm URL, F=To'g'ri javob
// ============================================================
function getInnovTests() {
  const sh = SS.getSheetByName(SH.rasmliTest);
  if (!sh) return {tests: []};
  const data = sh.getDataRange().getValues();
  const tests = [];
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (!row[0] || !String(row[0]).trim()) continue;
    tests.push({
      num:     i,
      question: String(row[0]).trim(),
      imgA:    String(row[1] || '').trim(),
      imgB:    String(row[2] || '').trim(),
      imgC:    String(row[3] || '').trim(),
      imgD:    String(row[4] || '').trim(),
      correct: letterToIndex(String(row[5] || 'A').trim()),
    });
  }
  return {tests};
}

// ============================================================
// NATIJALARNI SAQLASH
// Sizning sheetingiz: A:Vaqt, B:Ism familya, C:Natija, D:Foizda, E:Telefon raqam, F:Sarflangan vaqt, G:Topshiriq turi
// ============================================================
function saveResult(p) {
  const sh = SS.getSheetByName(SH.natijalar);
  if (!sh) return {success: false, message: 'Natijalar sheet topilmadi'};

  const date    = Utilities.formatDate(new Date(), 'Asia/Tashkent', 'dd.MM.yyyy HH:mm');
  const total   = parseInt(p.total)   || 30;
  const correct = parseInt(p.correct) || 0;
  const ball    = Math.round(correct / total * 100);
  const tur     = p.tur || 'Test'; // Test | Rasmli test | Krossvord

  // Sizning sarlavhalaringizga mos: Vaqt | Ism familya | Natija | Foizda | Telefon | Sarflangan vaqt | Topshiriq turi
  sh.appendRow([
    date,
    p.name  || '',
    correct + '/' + total,
    ball + '%',
    p.phone || '',
    p.time  || '—',
    tur
  ]);

  // Telegram guruhiga xabar yuborish (server tarafdan)
  try {
    const emoji = ball >= 90 ? '🏆' : ball >= 70 ? '✅' : ball >= 50 ? '📊' : '📉';
    const msg = emoji + ' *' + tur + ' natijasi*\n\n'
      + '👤 *Talaba:* ' + (p.name || '—') + '\n'
      + '📱 *Telefon:* ' + (p.phone || '—') + '\n\n'
      + '✅ To\'g\'ri: ' + correct + '/' + total + '\n'
      + '🏆 *Ball: ' + ball + '/100*\n'
      + '⏱ Vaqt: ' + (p.time || '—') + '\n'
      + '📅 Sana: ' + date;
    sendTelegram(msg);
  } catch(e) {}

  return {success: true, ball};
}

// ============================================================
// TELEGRAM XABAR YUBORISH (server tarafdan)
// ============================================================
function sendTelegram(msg) {
  const token  = '8868132773:AAHTHaqNYeIwPBKSNV9O2O-T6RBa6qY3CZI';
  const chatId = '-1003970151424';
  const url    = 'https://api.telegram.org/bot' + token + '/sendMessage';
  UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({chat_id: chatId, text: msg, parse_mode: 'Markdown'}),
    muteHttpExceptions: true
  });
}

// ============================================================
// LEADERBOARD — Natijalar sheetidan hisoblash
// Har foydalanuvchi uchun: Test, Rasmli test, Krossvord bo'yicha eng yuqori ball o'rtachasi
// ============================================================
function getLeaderboard() {
  const sh = SS.getSheetByName(SH.natijalar);
  if (!sh || sh.getLastRow() < 2) return {results: []};

  const data = sh.getDataRange().getValues();
  const userMap = {};

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (!row[4]) continue;

    const phone  = String(row[4]).trim();
    const name   = String(row[1]).trim();
    const raw    = String(row[2]).trim(); // "25/30"
    const tur    = String(row[6] || 'Test').trim();

    // Ball ni raw scordan hisoblash (Sheets % ni decimal sifatida saqlashi mumkin)
    let ball = 0;
    const parts = raw.split('/');
    if (parts.length === 2) {
      const correct = parseInt(parts[0]) || 0;
      const total   = parseInt(parts[1]) || 30;
      ball = total > 0 ? Math.round(correct / total * 100) : 0;
    } else {
      const pctStr = String(row[3]).replace('%','').trim();
      const parsed = parseFloat(pctStr) || 0;
      ball = parsed <= 1 ? Math.round(parsed * 100) : Math.round(parsed);
    }

    // Sanani to'g'ri formatlash (Date object yoki string bo'lishi mumkin)
    const rawDate = row[0];
    const date = rawDate instanceof Date
      ? Utilities.formatDate(rawDate, 'Asia/Tashkent', 'dd.MM.yyyy')
      : String(rawDate).trim().replace(/\s.*$/, '');

    if (!userMap[phone]) {
      userMap[phone] = {name, phone, testBest: null, lastDate: date};
    }
    userMap[phone].name = name;
    userMap[phone].lastDate = date;

    if (tur === 'Test') {
      if (!userMap[phone].testBest || ball > userMap[phone].testBest.ball) {
        userMap[phone].testBest = {ball, raw};
      }
    }
  }

  const results = Object.values(userMap)
    .filter(u => u.testBest !== null)
    .map(u => ({
      name:    u.name,
      phone:   u.phone,
      test:    u.testBest.ball,
      testRaw: u.testBest.raw,
      date:    u.lastDate
    }));

  results.sort((a, b) => b.test - a.test);
  return {results: results.slice(0, 10)};
}

// ============================================================
// YORDAMCHI
// ============================================================
function letterToIndex(letter) {
  const map = {'A':0,'B':1,'C':2,'D':3,'S':2};
  return map[letter.toUpperCase()] ?? 0;
}
