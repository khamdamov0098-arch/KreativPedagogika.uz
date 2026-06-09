# KreativPedagogika.uz — Loyiha Konteksti

## Loyiha haqida
Uzbek ta'lim platformasi. Sayt Netlify da joylashgan.
URL: kreativpedagogika.uz

---

## Texnik ma'lumotlar

- **Telegram bot token:** `8868132773:AAHTHaqNYeIwPBKSNV9O2O-T6RBa6qY3CZI`
- **Telegram guruh ID:** `-1003970151424`
- **Google Apps Script URL:** `https://script.google.com/macros/s/AKfycbxk4yDLmR2jPx6vF54o1fZ0CQkeDknJpd4X_7tiP5Hr3dQGMNbcx_ywdpSWj1YLS7LMrw/exec`
- **Rang palitasi:** Navy `#1B2B6B`, Teal `#2ABFAB`, Yellow `#F5A623`, Purple `#8B5CF6`
- **Shriftlar:** Nunito (sarlavha) + Outfit (matn), baza: 17px
- **Fayl joylashuvi:** `/home/claude/kreativpedagogika/` (yoki Netlify deploy papkasi)

---

## Google Sheet tuzilmasi
Sheet nomi: **Kreativ Pedagogika DB**

| Sheet | Ustunlar |
|-------|---------|
| `Testlar` | A:Savol, B:A-var, C:B-var, D:C-var, E:D-var, F:To'g'ri javob (A/B/S/D) |
| `Natijalar` | A:Vaqt, B:Ism familya, C:Natija(25/30), D:Foizda(83%), E:Telefon, F:Sarflangan vaqt, G:Topshiriq turi (Test/Rasmli test/Krossvord) |
| `Rasmli test` | A:Savol matni, B:A rasm URL, C:B rasm URL, D:C rasm URL, E:D rasm URL, F:To'g'ri javob |
| `Foydalanuvchilar` | A:Telefon, B:Ism familya, C:Ro'yxatdan o'tgan vaqt |

---

## Sayt fayllari (hammasi mavjud)

```
index.html, register.html, login.html
maruzalar.html, amaliy.html, adabiyotlar.html, taqdimotlar.html
fan-dasturi.html, sillabusi.html
test.html, innovatsion-test.html, krossvord.html
mustaqil-ish.html, topshiriqlar.html, videodarslar.html, muallif.html
shared.css, nav.js, icons.js, apps_script.js
```

---

## Navbar tuzilmasi

- Dropdown trigger: `<button class="dd-btn" onclick="toggleDropdown(this,event)">`
- `toggleDropdown` — `nav.js` da global funksiya
- CSS hover dropdown ham qo'shilgan (`.dropdown:hover > .dropdown-menu`)

---

## Ishlaydigan funksiyalar ✅

- Ro'yxatdan o'tish / Kirish (Sheet + localStorage)
- Test (30 ta tasodifiy savol, variantlar aralashtirilgan, Telegram + Sheet)
- Innovatsion rasmli test (Google Drive rasmlari, 7 ta savol)
- 14 ta interaktiv krossvord (klaviatura bilan to'ldirish, Telegram + Sheet)
- Leaderboard (Test+Rasmli test+Krossvord o'rtachasi)
- Bosh sahifa slider (4 ta rasm: Boshsahifa.png, Boshsahifa2-4.png)
- Navbar dropdown (hover + click)
- Barcha sahifalar shriftlari kattalashtirilgan

---

## PDF fayl nomlari

```
pdfs/fan-dasturi.pdf
pdfs/sillabusi.pdf
pdfs/maruzalar/maruza1.pdf ... maruza14.pdf
pdfs/amaliy/amaliy1.pdf ... amaliy15.pdf   (amaliy.html da pdfs/amaliy${n}.pdf)
pdfs/adabiyotlar/kitob-1.pdf ... kitob-6.pdf
pdfs/taqdimotlar/taqdimot-1.pdf ... taqdimot-7.pdf
```

---

## Muallif ma'lumotlari

- **Ism:** Sariboyev Nurali Abdunazarovich
- **Muassasa:** Guliston DPI, Pedagogika va psixologiya kafedrasi
- **Tel:** +998946258484
- **Email:** nuralisariboyev@gmail.com
- **Telegram:** t.me/SNA_84

---

## Krossvord engine — `krossvord.html`

### Asosiy funksiyalar

| Funksiya | Vazifasi |
|----------|---------|
| `getCWdir(cwId, r, c)` | Aktiv savoldan yo'nalishni aniqlaydi (H/V) |
| `wordContains(w, r, c)` | So'z berilgan katakni o'z ichiga olishini tekshiradi |
| `focusCell(cwId, r, c)` | Berilgan katakka focus beradi |
| `onInp(inp, cwId, r, c)` | Input kiritilganda keyingi katakka o'tadi |
| `onKey(e, cwId, r, c)` | Klaviatura tugmalarini boshqaradi (o'qlar, Backspace, Tab) |
| `onFoc(cwId, r, c)` | Focus kelganda tegishli so'zni ajratib ko'rsatadi |
| `hiW(cwId, num, dir)` | So'zni highlight qiladi va savolni faollashtiradi |
| `chkCW(cwId)` | Javoblarni tekshiradi, natija chiqaradi, Telegram/Sheet ga yuboradi |
| `clrCW(cwId)` | Barcha kataklar tozalanadi |
| `hintCW(cwId)` | Bitta bo'sh katakka to'g'ri harfni yozib beradi |
| `autoSave(cwId)` | localStorage ga saqlaydi |
| `loadSaved(cwId)` | localStorage dan yuklaydi |
| `sendResult(cwId, ok, tot)` | Telegram va Sheet ga natija yuboradi |
| `buildGrid(words)` | So'zlardan grid matritsasi yaratadi |
| `renderCW(cw, containerId)` | HTML grid va savollarni render qiladi |

### So'z tuzilmasi (CWS massivi)
```js
{
  n: 1,          // raqam
  w: 'SOZDAGI',  // so'z (katta harf, o'zbek lotin)
  r: 0,          // row (0 dan)
  c: 3,          // col (0 dan)
  d: 'H',        // 'H' = gorizontal, 'V' = vertikal
  q: "Savol matni"
}
```

### ⚠️ MUHIM MUAMMO: Krossvordlar noto'g'ri tuzilgan

**Asosiy muammo:** 14 ta krossvordning aksariyatida gorizontal (H) va vertikal (V) so'zlar
kesishish nuqtalarida harflar **mos kelmaydi**. Bu klassik krossvord qoidasiga zid.

**Muammo sababi:** So'zlar koordinatalari qo'lda kiritilgan, lekin kesishish nuqtalarida
har ikkala so'zdagi harf bir xil bo'lishi tekshirilmagan.

**Tekshirish natijasi (2-krossvord misoli):**
- ✅ H1(TASHXISLASH)[6]=S  ↔  V17(SINTEZ)[0]=S  → TO'G'RI
- ❌ H1(TASHXISLASH)[0]=T  ↔  V11(INTERAKTIVLIK)[0]=I  → XATO

**Yechim:** Har bir krossvord uchun so'zlarni qayta joylashtirish kerak:
1. Gorizontal so'zlarni asosga olish
2. Vertikal so'zlarni gorizontal so'zlardagi harflardan boshlanuvchi qilib joylashtirish
3. Kesishish nuqtasida ikkala so'zdagi harf bir xil bo'lishi shart

### Kesishishni tekshirish algoritmi
```js
// H so'z: qator=h.r, ustunlar=h.c dan h.c+h.w.length-1 gacha
// V so'z: ustun=v.c, qatorlar=v.r dan v.r+v.w.length-1 gacha
// Kesishish: v.c ustun h.c..h.c+len-1 oralig'ida VA h.r qator v.r..v.r+len-1 oralig'ida

H_so'z_indeks = v.c - h.c        // H so'zdagi kesishish harfi
V_so'z_indeks = h.r - v.r        // V so'zdagi kesishish harfi

// Shart: h.w[H_so'z_indeks] === v.w[V_so'z_indeks]
```

### Krossvordlar soni va mavzulari

| # | Title | Sub |
|---|-------|-----|
| 1 | Kreativ Yondashuv — 1 | Ijod – bilimni amaliyotga aylantiruvchi kuch! |
| 2 | Ta'lim Jarayoni | Bilim – tafakkurda, ijod – yondashuvda! |
| 3 | Pedagogik Muloqot | Muloqot – muvaffaqiyat kaliti! |
| 4 | Kreativ Yondashuv — Olimlar | Ijod – bilimning harakati... |
| 5 | Kreativ Kompetensiya | Bilim, ijod, mahorat – muvaffaqiyat kaliti! |
| 6 | Pedagogik Texnologiyalar | Ijodkor o'qituvchi – zamonaviy ta'lim poydevori! |
| 7 | Kreativ Pedagogika — Kalit So'z | Kalit so'z: KREATIVPEDAGOGIKA |
| 8 | Didaktik Ta'minot | Ijod – bilimni amaliyotga aylantiruvchi kuch! |
| 9 | Kreativ Ta'lim Muhiti | Kreativ ta'lim – kelajak poydevori! |
| 10 | Pedagogik Qobiliyat | Kreativ yondashuv – zamonaviy ta'limning yuragi! |
| 11 | Kreativ Fikrlash Turlari | Kreativ fikrla, izlan, yarat! |
| 12 | Kreativ Kompetensiya Tuzilishi | Kreativ fikr – yangi kelajakning boshlanishidir! |
| 13 | Ma'naviy Kompetensiyalar | Ma'naviy kompetensiyalarni rivojlantirish yo'lida |
| 14 | Kreativ Yondashuv — Yakuniy | Ijodkor fikrla – yangi yechim yarat! |

---

## Navbatdagi vazifalar

1. **🔴 USTUVOR:** `krossvord.html` — 14 ta krossvordni qayta tuzish:
   - Har bir krossvord uchun H va V so'zlarning kesishish nuqtalarini to'g'rilash
   - So'z koordinatalarini (r, c) qayta hisoblash
   - Savollar o'zgarmasin, faqat koordinatalar o'zgarsin

2. **PDF sahifalari:** `maruzalar.html`, `amaliy.html`, `adabiyotlar.html`, `taqdimotlar.html` —
   PDF fayllarni `pdfs/` papkasidan yuklash

3. **Rasmli test:** `innovatsion-test.html` — Google Drive rasmlari URL lari Sheet da,
   sahifada to'g'ri ko'rsatilishi tekshirilsin

---

## CSS o'zgaruvchilari (shared.css dan)

```css
--navy: #1B2B6B
--teal: #2ABFAB
--teal-dark: (teal ning to'q varianti)
--yellow: #F5A623
--purple: #8B5CF6
--shadow: (karta soyasi)
--border2: (chegara rangi)
--gray: (kulrang matn)
--text-2: (ikkilamchi matn)
```

---

## localStorage kalitlari

- `kp_user` — `{name, telefon}` — kirgan foydalanuvchi
- `kross_{cwId}` — krossvord saqlangan holati `{cellId: harf}`
