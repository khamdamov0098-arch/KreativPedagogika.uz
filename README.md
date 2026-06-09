# KreativPedagogika.uz — Sayt fayllari

## Papka tuzilmasi

```
kreativpedagogika/
├── index.html              ← Bosh sahifa
├── register.html           ← Ro'yxatdan o'tish
├── login.html              ← Kirish
├── fan-dasturi.html        ← Fan dasturi (1 PDF)
├── sillabusi.html          ← Fan sillabusi (1 PDF)
├── maruzalar.html          ← Ma'ruza matnlari (14 PDF)
├── amaliy.html             ← Amaliy mashg'ulotlar (15 PDF)
├── adabiyotlar.html        ← Adabiyotlar (6 kitob PDF)
├── taqdimotlar.html        ← Taqdimotlar (7 PDF)
├── innovatsion-test.html   ← Innovatsion test (rasmlar)
├── test.html               ← Test topshiriqlari (30 savol, 45 min)
├── mustaqil-ish.html       ← Mustaqil ish mavzulari (60 ta)
├── topshiriqlar.html       ← Topshiriqlar
├── krossvord.html          ← Krossvordlar
├── videodarslar.html       ← Videodarslar (6 YouTube)
├── muallif.html            ← Muallif haqida
├── shared.css              ← Umumiy stillar
├── nav.js                  ← Navigatsiya va auth
├── icons.js                ← SVG ikonalar
├── logo.png                ← Logo
│
├── pdfs/                   ← PDF fayllar papkasi (YARATING)
│   ├── fan-dasturi.pdf
│   ├── sillabusi.pdf
│   ├── maruzalar/
│   │   ├── maruza-1.pdf  ... maruza-14.pdf
│   ├── amaliy/
│   │   ├── amaliy-1.pdf  ... amaliy-15.pdf
│   ├── adabiyotlar/
│   │   ├── kitob-1.pdf   ... kitob-6.pdf
│   └── taqdimotlar/
│       ├── taqdimot-1.pdf ... taqdimot-7.pdf
│
└── images/                 ← Rasmlar papkasi (YARATING)
    ├── innovatsion/
    │   ├── test-1.jpg  ... test-N.jpg
    └── krossvord/
        ├── kross-1.jpg ... kross-N.jpg
```

## To'ldirish kerak bo'lgan joylar

### 1. Google Apps Script URL
`nav.js` va `test.html` va `register.html` va `login.html` fayllarida:
```
YOUR_APPS_SCRIPT_URL → sizning Apps Script URL ingiz
```

### 2. Telegram Bot
`test.html` faylida:
```
YOUR_BOT_TOKEN      → @BotFather dan olingan token
YOUR_GROUP_CHAT_ID  → guruh chat ID
```

### 3. YouTube Video ID lar
`videodarslar.html` faylida VIDEOS array:
```js
{ youtubeId: 'YOUR_VIDEO_ID_1' }
// https://youtube.com/watch?v=VIDEO_ID ← shu VIDEO_ID ni oling
```

### 4. Mustaqil ish mavzulari
`mustaqil-ish.html` faylida MAVZULAR array (60 ta)

### 5. Topshiriqlar matni
`topshiriqlar.html` faylida TOPSHIRIQLAR array

### 6. Kitob nomlari
`adabiyotlar.html` faylida KITOBLAR array (6 ta nom)

### 7. Taqdimot mavzulari
`taqdimotlar.html` faylida TAQDIMOTLAR array (7 ta nom)

### 8. Muallif ma'lumotlari
`muallif.html` faylida HTML elementlar:
- `muallifIsmi` — To'liq ism
- `muallifLavozim` — Lavozim
- `muallifBio` — Bio matni
- `stat1`, `stat2`, `stat3` — Statistika
- `muallif-rasm.jpg` — Muallif rasmi (papkaga joylashtiring)

### 9. Innovatsion test rasmlari
`innovatsion-test.html` faylida INNOV_TESTS array ni to'ldiring

### 10. Krossvord ma'lumotlari
`krossvord.html` faylida:
- KROSS_IMGS — rasm krossvordlar
- CW_GRID, CW_ACROSS, CW_DOWN — interaktiv krossvord

## Netlify ga joylashtirish
1. Bu papkani ZIP qiling
2. netlify.com ga boring → "Add new site" → "Deploy manually"
3. ZIP faylni tortib tashlang
4. Sayt tayyor!

## Google Apps Script kerakli action-lar
- `?action=checkPhone&phone=` → `{exists: true/false}`
- `?action=register&name=&phone=` → `{success: true}`
- `?action=login&phone=` → `{success: true, user: {name}}`
- `?action=getQuestions` → `{questions: [{question,a,b,c,d,correct,image}]}`
- `?action=saveResult&name=&phone=&score=&correct=&time=` → `{success: true}`
