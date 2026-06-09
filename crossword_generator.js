// crossword_generator.js
// Avtomatik krossvord joylashtiruvchi
// node crossword_generator.js > cws_output.js

const MAVZULAR = [
  {
    id:1, title:"Kreativ pedagogika fan sifatida",
    sub:"Ijod – bilimni amaliyotga aylantiruvchi kuch!",
    h:[
      {n:1,w:'KREATIVLIK',q:"Yangi va original g'oyalarni yaratish qobiliyati."},
      {n:2,w:'PEDAGOGIKA',q:"Ta'lim va tarbiya haqidagi fan."},
      {n:3,w:'TADQIQOT',q:"Ilmiy izlanish olib borish jarayoni."},
      {n:4,w:'SALOHIYAT',q:"Shaxsning ichki imkoniyatlari majmui."},
      {n:5,w:'INNOVATSIYA',q:"Yangilik yaratish va joriy etish jarayoni."},
      {n:6,w:'METOD',q:"Muayyan faoliyatni bajarish usuli."},
      {n:7,w:'TAFAKKUR',q:"Fikr yuritish jarayoni."},
      {n:8,w:'KASBIYLIK',q:"Kasbga oid faoliyat."},
      {n:9,w:'NAZARIYA',q:"Nazariy qarashlar tizimi."},
      {n:10,w:'KOMPETENSIYA',q:"Bilimlarni amalda qo'llash qobiliyati."},
    ],
    v:[
      {n:11,w:'IJODKORLIK',q:"Kreativ pedagogika o'rganadigan asosiy sifat."},
      {n:12,w:'METODOLOGIYA',q:"Ilmiy izlanish usullarini o'rganuvchi soha."},
      {n:13,w:'GLOBALLASHUV',q:"Dunyo miqyosidagi integratsiya jarayoni."},
      {n:14,w:'YETUKLIK',q:"Mutaxassisning kasbiy rivojlanish bosqichi."},
      {n:15,w:'MAHORAT',q:"O'qituvchining kasbiy faoliyati natijasi."},
      {n:16,w:'TALIM',q:"Bilimlarni egallash jarayoni."},
      {n:17,w:'MUTAXASSISLIK',q:"Kasb egasining faoliyat sohasi."},
      {n:18,w:'KREATIVTAFAKKUR',q:"Yangilik yaratishga yo'naltirilgan fikrlash turi."},
      {n:19,w:'PEDAGOG',q:"O'quvchi faoliyatini boshqaruvchi shaxs."},
      {n:20,w:'POTENSIAL',q:"Shaxsning rivojlanish imkoniyati."},
    ]
  },
  {
    id:2, title:"Kreativ ta'lim muhiti",
    sub:"Bilim – tafakkurda, ijod – yondashuvda!",
    h:[
      {n:1,w:'MUHIT',q:"Insonni o'rab turgan sharoitlar majmui."},
      {n:2,w:'TALIM',q:"Bilim berish jarayoni."},
      {n:3,w:'KREATIVMUHIT',q:"Ijodiy faoliyatga undovchi muhit turi."},
      {n:4,w:'TABAQALANISH',q:"Guruhlarga ajratish jarayoni."},
      {n:5,w:'DAVRIYLIK',q:"Muayyan davrlar bo'yicha rivojlanish."},
      {n:6,w:'BILIM',q:"O'quvchi faoliyatining asosiy natijasi."},
      {n:7,w:'IJODKORLIK',q:"Yangi g'oya yaratish qobiliyati."},
      {n:8,w:'EVRISTIKA',q:"Muammoni hal qilishning samarali usuli."},
      {n:9,w:'SHAROIT',q:"O'quv jarayonini tashkil etuvchi omil."},
      {n:10,w:'KLASTER',q:"Fikrlar xaritasi usuli."},
    ],
    v:[
      {n:11,w:'XORAZMIY',q:"Algebra fanining asoschilaridan biri."},
      {n:12,w:'FARGONIY',q:"Buyuk astronom olim."},
      {n:13,w:'BERUNIY',q:"Qomusiy olim."},
      {n:14,w:'IBNSINO',q:"Tib qonunlari asari muallifi."},
      {n:15,w:'TRANSFORMATSIYA',q:"Bilimlarni yangi vaziyatda qo'llash darajasi."},
      {n:16,w:'IZLANISH',q:"Yangilik izlashga asoslangan usul."},
      {n:17,w:'KASHFIYOT',q:"Yangi bilim yaratish faoliyati."},
      {n:18,w:'MOTIVATSIYA',q:"O'quvchining ichki qiziqishi."},
      {n:19,w:'MUSTAQILLIK',q:"Mustaqil fikr yuritish qobiliyati."},
      {n:20,w:'FAOLLIK',q:"O'quv faoliyatini rag'batlantirish vositasi."},
    ]
  },
  {
    id:3, title:"Didaktik ta'minotni yaratishga kreativ yondashuv",
    sub:"Kreativ yondashuv – ta'limning yuragi!",
    h:[
      {n:1,w:'DIDAKTIKA',q:"Ta'lim nazariyasi va amaliyoti fani."},
      {n:2,w:'DASTUR',q:"O'quv jarayonini tartibga soluvchi hujjat."},
      {n:3,w:'DTS',q:"Davlat ta'lim standartining qisqartmasi."},
      {n:4,w:'DARSLIK',q:"Asosiy o'quv manbasi."},
      {n:5,w:'QOLLANMA',q:"O'quvchiga yordam beruvchi adabiyot."},
      {n:6,w:'SARALASH',q:"O'quv materiallarini tanlash jarayoni."},
      {n:7,w:'FAN',q:"O'quv rejasining tarkibiy qismi."},
      {n:8,w:'TOPLASH',q:"Axborotlarni yig'ish jarayoni."},
      {n:9,w:'MUALLIFLIKDASTURI',q:"Pedagogning ijodiy mahsuli."},
      {n:10,w:'RESURS',q:"O'quv faoliyatini tashkil etuvchi vosita."},
    ],
    v:[
      {n:11,w:'OQUVREJA',q:"O'quv jarayonini rejalashtirish hujjati."},
      {n:12,w:'AXBOROT',q:"Ma'lumotlar majmui."},
      {n:13,w:'YONDASHUV',q:"Yangi usul bilan ishlash jarayoni."},
      {n:14,w:'MAVZU',q:"O'quv materialining mazmuniy qismi."},
      {n:15,w:'NAZORAT',q:"Bilimlarni baholash vositasi."},
      {n:16,w:'TOPSHIRIQ',q:"O'quvchiga beriladigan vazifa."},
      {n:17,w:'SAMARADORLIK',q:"O'qituvchi faoliyatining natijasi."},
      {n:18,w:'STANDART',q:"O'quv maqsadini belgilovchi hujjat."},
      {n:19,w:'MASHGULOT',q:"O'quv faoliyatining shakli."},
      {n:20,w:'INNOVATSIYA',q:"Pedagogik yangilik."},
    ]
  },
  {
    id:4, title:"Bo'lajak o'qituvchilarda kreativ tasavvur va ilmiy ijodkorlik",
    sub:"Ijodkor o'qituvchi – zamonaviy ta'lim poydevori!",
    h:[
      {n:1,w:'TASAVVUR',q:"Ongda yangi obrazlar yaratish qobiliyati."},
      {n:2,w:'ILMIYIJOD',q:"Yangi ilmiy g'oyalar yaratish faoliyati."},
      {n:3,w:'IXTIRO',q:"Yangi qurilma yoki usul yaratish jarayoni."},
      {n:4,w:'KREATIVLIK',q:"Yangilik yaratishga oid sifat."},
      {n:5,w:'YECHIM',q:"Muammoni hal qilishning yakuniy natijasi."},
      {n:6,w:'TADQIQOTCHI',q:"Ilmiy izlanish olib boruvchi shaxs."},
      {n:7,w:'MUTAXASSIS',q:"Kasbiy tayyorgarlikka ega shaxs."},
      {n:8,w:'INNOVATSIYA',q:"Yangilik joriy qilish faoliyati."},
      {n:9,w:'KOMPETENTLIK',q:"Bilimlarni amalda qo'llash qobiliyati."},
      {n:10,w:'GOYA',q:"Ijodiy fikr mahsuli."},
    ],
    v:[
      {n:11,w:'TADQIQOT',q:"Muammoni hal qilishga qaratilgan faoliyat."},
      {n:12,w:'TEXNOLOGIYA',q:"O'qitishning zamonaviy vositasi."},
      {n:13,w:'KASHFIYOT',q:"Yangi bilim yaratish jarayoni."},
      {n:14,w:'TAFAKKUR',q:"Fikr yuritish qobiliyati."},
      {n:15,w:'FANTAZIYA',q:"Tasavvurga asoslangan fikrlash turi."},
      {n:16,w:'ORIGINALLIK',q:"O'ziga xos yondashuv."},
      {n:17,w:'SALOHIYAT',q:"Bilim va tajriba majmui."},
      {n:18,w:'METOD',q:"Muammo yechishga qaratilgan usul."},
      {n:19,w:'BILIM',q:"O'quvchi faoliyatining natijasi."},
      {n:20,w:'MAQOLA',q:"Ilmiy faoliyat mahsuli."},
    ]
  },
  {
    id:5, title:"Kreativ kompetensiya modelining shakllanishi",
    sub:"Bilim, ijod, mahorat – muvaffaqiyat kaliti!",
    h:[
      {n:1,w:'KOMPETENSIYA',q:"Bilim va ko'nikmalar majmui."},
      {n:2,w:'MODEL',q:"Namuna yoki andoza."},
      {n:3,w:'MADANIYAT',q:"Jamiyat taraqqiyotini ifodalovchi qadriyatlar tizimi."},
      {n:4,w:'IJODKORLIK',q:"Yangi g'oyalar yaratish qobiliyati."},
      {n:5,w:'KOMMUNIKATIVLIK',q:"Muloqotga kirishish qobiliyati."},
      {n:6,w:'MALAKA',q:"Kasbiy tayyorgarlik darajasi."},
      {n:7,w:'PROFESSIOGRAMMA',q:"O'qituvchi faoliyatiga qo'yilgan talablar tavsifi."},
      {n:8,w:'GNOSTIK',q:"Bilish faoliyatiga oid qobiliyat."},
      {n:9,w:'FAOLIYAT',q:"Maqsadli harakatlar tizimi."},
      {n:10,w:'INSONPARVARLIK',q:"Inson manfaatlarini ustun qo'yuvchi yondashuv."},
    ],
    v:[
      {n:11,w:'MAHORAT',q:"Pedagogning kasbiy ustaligi."},
      {n:12,w:'OQITUVCHI',q:"O'quv jarayonini tashkil etuvchi shaxs."},
      {n:13,w:'FAOLLIK',q:"Ijodiy tashabbus ko'rsatish holati."},
      {n:14,w:'TAYYORGARLIK',q:"Kasbiy bilimlar yig'indisi."},
      {n:15,w:'ETIKA',q:"Pedagogik madaniyatning tarkibiy qismi."},
      {n:16,w:'MULOQOT',q:"O'quvchilar bilan aloqa o'rnatish qobiliyati."},
      {n:17,w:'YETUKLIK',q:"Kasbiy rivojlanish bosqichi."},
      {n:18,w:'INDIVIDUALLIK',q:"Shaxsning individual uslubi."},
      {n:19,w:'TALIM',q:"Bilimlarni egallash jarayoni."},
      {n:20,w:'OZRIVOJLANTIRISH',q:"O'z ustida ishlash faoliyati."},
    ]
  },
  {
    id:6, title:"O'qituvchining ta'lim jarayoniga kreativ yondashuvi",
    sub:"Ijodkor o'qituvchi – zamonaviy ta'lim poydevori!",
    h:[
      {n:1,w:'INNOVATSIYA',q:"Yangilik joriy qilish jarayoni."},
      {n:2,w:'INTERAKTIVLIK',q:"Faol muloqotga asoslangan ta'lim."},
      {n:3,w:'MOTIVATSIYA',q:"Faoliyatga undovchi ichki omil."},
      {n:4,w:'TADQIQOT',q:"Ilmiy izlanish faoliyati."},
      {n:5,w:'KOOPERATSIYA',q:"Hamkorlikda ishlash jarayoni."},
      {n:6,w:'MAHORAT',q:"Pedagogning kasbiy ustaligi."},
      {n:7,w:'SEMINAR',q:"Muhokamaga asoslangan mashg'ulot turi."},
      {n:8,w:'LABORATORIYA',q:"Tajriba asosida o'qitish shakli."},
      {n:9,w:'TEXNOLOGIYA',q:"Darsni tashkil etish usullari majmui."},
      {n:10,w:'DARS',q:"Ta'limning asosiy shakli."},
    ],
    v:[
      {n:11,w:'NATIJA',q:"Pedagog faoliyatining samaradorligi."},
      {n:12,w:'OQITISH',q:"Bilim berish jarayoni."},
      {n:13,w:'FAOLLASHTIRISH',q:"O'quvchini faoliyatga jalb qilish."},
      {n:14,w:'RAQAMLASHTIRISH',q:"Axborot texnologiyalaridan foydalanish."},
      {n:15,w:'TASHKILOT',q:"O'quv faoliyatini boshqarish."},
      {n:16,w:'MALAKAOSHIRISH',q:"Kasbiy mahoratni rivojlantirish."},
      {n:17,w:'REJALASHTIRISH',q:"O'quv maqsadini aniqlash."},
      {n:18,w:'RAGBATLANTIRISH',q:"Mustaqil fikrlashga undash."},
      {n:19,w:'PLATFORMA',q:"Zamonaviy pedagogik vosita."},
      {n:20,w:'SAMARADORLIK',q:"Ta'lim sifati ko'rsatkichi."},
    ]
  },
  {
    id:7, title:"Kreativ topshiriqlar tizimi",
    sub:"Kalit so'z: KREATIVPEDAGOGIKA",
    h:[
      {n:1,w:'MOTIVLASHTIRISH',q:"O'quvchini faoliyatga undash jarayoni."},
      {n:2,w:'SURPRIZ',q:"Kutilmagan qiziqarli holat."},
      {n:3,w:'ANALIZ',q:"Tahlil qilish jarayoni."},
      {n:4,w:'KOLABORATSIYA',q:"Jamoaviy hamkorlik faoliyati."},
      {n:5,w:'DIZAYN',q:"Tasviriy loyihalash san'ati."},
      {n:6,w:'REFLEKSIYA',q:"O'z faoliyatini baholash."},
      {n:7,w:'FANTAZIYA',q:"Tasavvur mahsuli."},
      {n:8,w:'DIAGNOSTIKA',q:"Muammoni aniqlash jarayoni."},
      {n:9,w:'INDIVIDUALLIK',q:"O'quvchining o'ziga xosligi."},
      {n:10,w:'YECHIM',q:"Masalani hal qilish jarayoni."},
    ],
    v:[
      {n:11,w:'TOPSHIRIQ',q:"Kreativ darsning asosiy elementi."},
      {n:12,w:'MOTIVATOR',q:"O'quvchini hayratga soluvchi usul."},
      {n:13,w:'IZLANISH',q:"Muammoli vaziyatni hal qilish."},
      {n:14,w:'IJODKORLIK',q:"Yangi g'oyalarni yaratish faoliyati."},
      {n:15,w:'MUHOKAMA',q:"Fikrlar almashinuvi jarayoni."},
      {n:16,w:'KOMPETENSIYA',q:"Darsning maqsadli natijasi."},
      {n:17,w:'MONITORING',q:"O'quvchi faoliyatini baholash."},
      {n:18,w:'KEYS',q:"Muammoni yechishga qaratilgan topshiriq."},
      {n:19,w:'LOYIHA',q:"O'quv faoliyatining turi."},
      {n:20,w:'TAKRORLASH',q:"Bilimlarni mustahkamlash bosqichi."},
    ]
  },
  {
    id:8, title:"Pedagogik qobiliyatni shakllantirishda kreativ yondashuv",
    sub:"Ijod – bilimni amaliyotga aylantiruvchi kuch!",
    h:[
      {n:1,w:'QOBILIYAT',q:"Faoliyatni muvaffaqiyatli bajarish imkoniyati."},
      {n:2,w:'IJODKORLIK',q:"Yangi g'oyalar yaratish sifati."},
      {n:3,w:'RIVOJLANTIRISH',q:"Takomillashtirish jarayoni."},
      {n:4,w:'INNOVATSIYA',q:"Yangilik yaratish faoliyati."},
      {n:5,w:'PEDAGOG',q:"Ta'lim beruvchi mutaxassis."},
      {n:6,w:'MOTIVATSIYA',q:"O'quvchini ruhlantirish jarayoni."},
      {n:7,w:'INTERAKTIVLIK',q:"O'qitishning zamonaviy usuli."},
      {n:8,w:'MALAKA',q:"Bilimlarni amalda qo'llash qobiliyati."},
      {n:9,w:'METODIKA',q:"Kasbiy faoliyatni tashkil etish usuli."},
      {n:10,w:'MAHORAT',q:"O'qituvchining kasbiy ustaligi."},
    ],
    v:[
      {n:11,w:'TRENING',q:"Malaka oshirish mashg'uloti."},
      {n:12,w:'SEMINAR',q:"Muhokamaga asoslangan dars turi."},
      {n:13,w:'LOYIHA',q:"Mustaqil amaliy ish shakli."},
      {n:14,w:'HAMKORLIK',q:"Birgalikda faoliyat yuritish."},
      {n:15,w:'TEXNOLOGIYA',q:"Zamonaviy o'qitish usullari tizimi."},
      {n:16,w:'OZUSTIDAISLASH',q:"Pedagogning shaxsiy rivojlanishi."},
      {n:17,w:'OQITISH',q:"Bilim berish faoliyati."},
      {n:18,w:'FAOLLASHTIRISH',q:"O'quvchini rag'batlantirish usuli."},
      {n:19,w:'KREATIVFIKRLASH',q:"Yangi g'oyalarni ishlab chiqish jarayoni."},
      {n:20,w:'SAMARADORLIK',q:"Pedagogik faoliyat natijasi."},
    ]
  },
  {
    id:9, title:"Kasbiy kompetensiyalarni shakllantirishda kreativ yondashuv",
    sub:"Kreativ ta'lim – kelajak poydevori!",
    h:[
      {n:1,w:'KOMPETENTLIK',q:"Bilim va tajribani amalda qo'llash qobiliyati."},
      {n:2,w:'MALAKA',q:"Kasbiy tayyorgarlik darajasi."},
      {n:3,w:'TAJRIBA',q:"Faoliyat davomida orttirilgan bilimlar."},
      {n:4,w:'BILIM',q:"O'zlashtirilgan ma'lumotlar majmui."},
      {n:5,w:'SIFAT',q:"Shaxsga xos ijobiy xususiyat."},
      {n:6,w:'KASBIYLIK',q:"Kasbga oid bilimlar majmui."},
      {n:7,w:'ETIKA',q:"Pedagogning huquqiy va axloqiy madaniyati."},
      {n:8,w:'RIVOJLANISH',q:"O'z ustida ishlash jarayoni."},
      {n:9,w:'LAYOQAT',q:"Kasbiy vazifalarni bajarish qobiliyati."},
      {n:10,w:'HAMKORLIK',q:"Jamoa bilan ishlash qobiliyati."},
    ],
    v:[
      {n:11,w:'SAVODXONLIK',q:"Bilimlilik darajasi."},
      {n:12,w:'MASULIYAT',q:"Javobgarlik hissi."},
      {n:13,w:'RAHBARLIK',q:"Boshqaruv qobiliyati."},
      {n:14,w:'ETIKA',q:"Kasbiy odob normalari."},
      {n:15,w:'NATIJA',q:"Faoliyat samaradorligini belgilovchi omil."},
      {n:16,w:'MOSLASHUVCHANLIK',q:"O'zgaruvchan sharoitga moslashish qobiliyati."},
      {n:17,w:'MALAKAOSHIRISH',q:"Kasbiy bilimlarni boyitish jarayoni."},
      {n:18,w:'MUSTAQILLIK',q:"Qaror qabul qilish qobiliyati."},
      {n:19,w:'PEDAGOG',q:"O'quv faoliyatini tashkil etuvchi shaxs."},
      {n:20,w:'MONITORING',q:"Bilimlarni baholash mezoni."},
    ]
  },
  {
    id:10, title:"Kreativ kompetensiyaning mazmuni va tuzilishi",
    sub:"Kreativ yondashuv – zamonaviy ta'limning yuragi!",
    h:[
      {n:1,w:'ERUDITSIYA',q:"Keng bilim va dunyoqarashga ega bo'lish."},
      {n:2,w:'SALOHIYAT',q:"Ichki imkoniyatlar majmui."},
      {n:3,w:'KOGNITIV',q:"Bilish jarayonlariga oid tushuncha."},
      {n:4,w:'JARAYON',q:"Muayyan faoliyatning davom etishi."},
      {n:5,w:'MEZON',q:"Baholash mezoni."},
      {n:6,w:'ANALITIKA',q:"Bilimlar orasidagi bog'liqlikni topish qobiliyati."},
      {n:7,w:'ORIGINALLIK',q:"Muammoga noodatiy yondashish."},
      {n:8,w:'IJODKORLIK',q:"Yangi g'oyalarni yaratish faoliyati."},
      {n:9,w:'KOMPETENSIYA',q:"O'quv faoliyatining natijasi."},
      {n:10,w:'TAFAKKUR',q:"Muammoni tahlil qilish usuli."},
    ],
    v:[
      {n:11,w:'TAFAKKUR',q:"Fikr yuritish qobiliyati."},
      {n:12,w:'ANALOGIYA',q:"O'xshashlik asosida fikrlash usuli."},
      {n:13,w:'MULOQOT',q:"O'zaro fikr almashish."},
      {n:14,w:'TANQIDIYFIKRLASH',q:"Tanqidiy baholash qobiliyati."},
      {n:15,w:'INTERAKTIV',q:"Faol ishtirokka asoslangan ta'lim."},
      {n:16,w:'AMALIYOT',q:"Bilimlarni qo'llash qobiliyati."},
      {n:17,w:'YECHIM',q:"Muammolarni hal etish usuli."},
      {n:18,w:'GOYA',q:"Kreativ faoliyat mahsuli."},
      {n:19,w:'KREATIVLIK',q:"Innovatsion fikrlash jarayoni."},
      {n:20,w:'TUSHUNCHA',q:"Bilimlarni chuqur o'zlashtirish darajasi."},
    ]
  },
  {
    id:11, title:"Ma'naviy kompetensiyalarni shakllantirishda kreativ yondashuv",
    sub:"Ma'naviy kompetensiyalarni rivojlantirish yo'lida",
    h:[
      {n:1,w:'MANAVIYAT',q:"Ruhiy va axloqiy qadriyatlar majmui."},
      {n:2,w:'KREATIVLIK',q:"Yangilik yaratish qobiliyati."},
      {n:3,w:'EMOTSIONAL',q:"Hissiyotlarga oid tushuncha."},
      {n:4,w:'INTELLEKT',q:"Aqliy salohiyat darajasi."},
      {n:5,w:'QADRIYAT',q:"Jamiyat e'tirof etgan qadriyat."},
      {n:6,w:'OZINIIFODAETISH',q:"O'z fikrini erkin bayon qilish qobiliyati."},
      {n:7,w:'MUSTAQILLIK',q:"Mustaqil qaror qabul qilish qobiliyati."},
      {n:8,w:'MOTIVATSIYA',q:"O'quvchini faollikka undash usuli."},
      {n:9,w:'MUAMMOYECHISH',q:"Muammolarni hal qilish qobiliyati."},
      {n:10,w:'OZLIKNIANGLASH',q:"O'zini anglash jarayoni."},
    ],
    v:[
      {n:11,w:'EMPATIYA',q:"Boshqalarning his-tuyg'ularini tushunish."},
      {n:12,w:'FAOLLIK',q:"Faollik ko'rsatish holati."},
      {n:13,w:'MUSTAQILLIK',q:"O'z kuchiga tayangan holda ish yuritish."},
      {n:14,w:'TANQIDIYFIKRLASH',q:"Tahliliy fikrlash turi."},
      {n:15,w:'MUAMMO',q:"Yechim talab qiluvchi vaziyat."},
      {n:16,w:'MANAVIYAT',q:"Shaxsning ichki dunyosi bilan bog'liq tushuncha."},
      {n:17,w:'MULOQOT',q:"O'quvchi va o'qituvchi o'rtasidagi aloqa."},
      {n:18,w:'TARBIYALASH',q:"Ijobiy his-tuyg'ularni rivojlantirish jarayoni."},
      {n:19,w:'ODOB',q:"Axloqiy me'yorlarga amal qilish holati."},
      {n:20,w:'QADRIYATLAR',q:"Shaxs rivojlanishining muhim omili."},
    ]
  },
  {
    id:12, title:"O'qituvchining kreativ salohiyatini rivojlantirish usullari",
    sub:"Kreativ fikr – yangi kelajakning boshlanishidir!",
    h:[
      {n:1,w:'SALOHIYAT',q:"Shaxsning ichki imkoniyatlari majmui."},
      {n:2,w:'STARTAP',q:"Innovatsion biznes g'oyasi asosidagi loyiha."},
      {n:3,w:'TEXNOPARK',q:"Innovatsion faoliyat markazi."},
      {n:4,w:'INNOVATSIYA',q:"Yangilik yaratish va joriy etish jarayoni."},
      {n:5,w:'MODELLASHTIRISH',q:"Model yaratish jarayoni."},
      {n:6,w:'KREATIVLIK',q:"Yangi usullarni qo'llashga intilish."},
      {n:7,w:'TADQIQOT',q:"Ilmiy izlanish olib borish faoliyati."},
      {n:8,w:'MAHORAT',q:"Pedagogning kasbiy rivojlanish darajasi."},
      {n:9,w:'KOMPETENSIYA',q:"Bilimlarni amalda qo'llash qobiliyati."},
      {n:10,w:'TAFAKKUR',q:"Yangicha fikr yuritish qobiliyati."},
    ],
    v:[
      {n:11,w:'METODIKA',q:"Ta'lim berish usullari tizimi."},
      {n:12,w:'RIVOJLANISH',q:"Taraqqiyot va o'sish jarayoni."},
      {n:13,w:'IJODKORLIK',q:"Yangi g'oyalarni yaratish faoliyati."},
      {n:14,w:'OZINIRIVOJLANTIRISH',q:"O'z ustida ishlash jarayoni."},
      {n:15,w:'MALAKAOSHIRISH',q:"Kasbiy bilimlarni boyitish jarayoni."},
      {n:16,w:'TEXNOLOGIYA',q:"O'quv jarayonini tashkil etuvchi vositalar majmui."},
      {n:17,w:'ANALIZ',q:"Muammoni o'rganish usuli."},
      {n:18,w:'ILMIYIJOD',q:"Bilimlarni yaratish va qo'llash faoliyati."},
      {n:19,w:'YANGILIK',q:"O'qituvchining innovatsion faoliyati natijasi."},
      {n:20,w:'TAJRIBA',q:"Kasbiy muvaffaqiyat omili."},
    ]
  },
  {
    id:13, title:"Pedagogik muloqot – o'qituvchining ijodiy faoliyati sifatida",
    sub:"Ijodkor fikrla – yangi yechim yarat!",
    h:[
      {n:1,w:'MULOQOT',q:"O'zaro fikr almashish jarayoni."},
      {n:2,w:'KOMMUNIKATIV',q:"Aloqa o'rnatishga oid tushuncha."},
      {n:3,w:'INTERAKTIV',q:"O'zaro ta'sirga asoslangan muloqot turi."},
      {n:4,w:'PERSEPTIV',q:"Suhbatdoshni tushunishga qaratilgan muloqot turi."},
      {n:5,w:'DEMOKRATIK',q:"Tenglikka asoslangan boshqaruv usuli."},
      {n:6,w:'MUNOSABAT',q:"O'qituvchi va o'quvchi o'rtasidagi aloqa."},
      {n:7,w:'KOMMUNIKATSIYA',q:"Muloqot orqali ta'sir ko'rsatish jarayoni."},
      {n:8,w:'ISHONCH',q:"Suhbat davomida ishonch hosil qilish holati."},
      {n:9,w:'MOTIVATSIYA',q:"O'quvchini faollashtirish vositasi."},
      {n:10,w:'ALOQA',q:"Axborot uzatish jarayoni."},
    ],
    v:[
      {n:11,w:'AVTORITAR',q:"Qattiq nazoratga asoslangan boshqaruv usuli."},
      {n:12,w:'LIBERAL',q:"Erkinlikka asoslangan boshqaruv usuli."},
      {n:13,w:'PEDAGOGIKTASIR',q:"O'quvchilarga ta'sir ko'rsatish qobiliyati."},
      {n:14,w:'TAVOZE',q:"Muloqot odobining muhim elementi."},
      {n:15,w:'NUTQ',q:"Axborot almashish vositasi."},
      {n:16,w:'HAMKORLIK',q:"Pedagogik muloqotning asosiy maqsadi."},
      {n:17,w:'TINGLASH',q:"O'quvchining fikrini eshitish jarayoni."},
      {n:18,w:'MODELLASHTIRISH',q:"Muloqotni rejalashtirish bosqichi."},
      {n:19,w:'MADANIYAT',q:"Muloqot samaradorligini belgilovchi omil."},
      {n:20,w:'RUHIYIQLIM',q:"O'quvchi bilan psixologik yaqinlik holati."},
    ]
  },
  {
    id:14, title:"Bo'lajak o'qituvchilar ijodkorligini rivojlantirishda pedagogik texnologiyalarning o'rni",
    sub:"Ijodkor fikrla – yangi yechim yarat!",
    h:[
      {n:1,w:'INERSIYA',q:"Eski qarashlarga bog'lanib qolish holati."},
      {n:2,w:'TEXNOLOGIYA',q:"Faoliyatni tashkil etish usullari tizimi."},
      {n:3,w:'IJODKORLIK',q:"Yangi g'oyalar yaratish qobiliyati."},
      {n:4,w:'KLASTER',q:"Fikrlarni tarmoqlash usuli."},
      {n:5,w:'LOYIHA',q:"Maqsadli amaliy faoliyat."},
      {n:6,w:'MUAMMOLIOQITISH',q:"Muammolarni hal qilishga qaratilgan ta'lim turi."},
      {n:7,w:'INTERAKTIVLIK',q:"O'quvchilarni faol ishtirokga jalb etuvchi usul."},
      {n:8,w:'BRAINSTORMING',q:"Yangi g'oyalarni ishlab chiqish usuli."},
      {n:9,w:'KOMPETENSIYA',q:"O'quv faoliyatining natijasi."},
      {n:10,w:'INNOVATSIYA',q:"Ta'lim jarayonidagi yangilik."},
    ],
    v:[
      {n:11,w:'INTERAKTIV',q:"Faol muloqotga asoslangan ta'lim turi."},
      {n:12,w:'MUAMMOLI',q:"Muammo yechishga asoslangan ta'lim."},
      {n:13,w:'BALIQSKELETI',q:"Sabab va oqibatlarni aniqlash usuli."},
      {n:14,w:'INNOVATSION',q:"Yangilikka asoslangan faoliyat."},
      {n:15,w:'MUSTAQIL',q:"O'z kuchi bilan bajariladigan faoliyat."},
      {n:16,w:'KLASTERLASH',q:"Fikrlarni guruhlash usuli."},
      {n:17,w:'TADQIQOT',q:"Talabalarni izlanishga undovchi faoliyat."},
      {n:18,w:'MOTIVATSIYA',q:"O'quvchining ijodiy salohiyatini rivojlantiruvchi omil."},
      {n:19,w:'NATIJA',q:"Pedagogik faoliyat samaradorligi ko'rsatkichi."},
      {n:20,w:'KREATIVLIK',q:"Zamonaviy ta'limning muhim talabi."},
    ]
  },
];

// ============================================================
// AUTO-PLACEMENT ALGORITHM
// ============================================================

function autoPlace(hWords, vWords) {
  const placed = [];
  const grid = {};

  function cellKey(r, c) { return r + ',' + c; }

  function placeWord(word, r, c, dir, n, q) {
    for (let i = 0; i < word.length; i++) {
      const [cr, cc] = dir === 'H' ? [r, c + i] : [r + i, c];
      grid[cellKey(cr, cc)] = word[i];
    }
    placed.push({ n, w: word, r, c, d: dir, q });
  }

  function canPlace(word, r, c, dir) {
    const len = word.length;
    // Check cell before/after word (no extension)
    if (dir === 'H') {
      if (grid[cellKey(r, c - 1)]) return false;
      if (grid[cellKey(r, c + len)]) return false;
    } else {
      if (grid[cellKey(r - 1, c)]) return false;
      if (grid[cellKey(r + len, c)]) return false;
    }

    let hasIntersection = false;
    for (let i = 0; i < len; i++) {
      const [cr, cc] = dir === 'H' ? [r, c + i] : [r + i, c];
      const key = cellKey(cr, cc);
      if (grid[key]) {
        if (grid[key] !== word[i]) return false; // letter conflict
        hasIntersection = true;
      } else {
        // Check that we're not running parallel to an existing word in adjacent cell
        if (dir === 'H') {
          // Avoid creating adjacency issues: if cell above or below is occupied,
          // that's fine only if there's already an intersection at this column
          // (simplified: just check no SAME-direction adjacent word)
        }
      }
    }
    return true;
  }

  function countIntersections(word, r, c, dir) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      const [cr, cc] = dir === 'H' ? [r, c + i] : [r + i, c];
      if (grid[cellKey(cr, cc)]) count++;
    }
    return count;
  }

  // Place first H word at (0, 0)
  placeWord(hWords[0].w, 0, 0, 'H', hWords[0].n, hWords[0].q);

  const remH = hWords.slice(1).map(w => ({ ...w }));
  const remV = vWords.map(w => ({ ...w }));

  let pass = 0;
  while ((remH.length > 0 || remV.length > 0) && pass < 100) {
    pass++;
    let changed = false;

    // Try to place V words connected to placed H words
    for (let vi = remV.length - 1; vi >= 0; vi--) {
      const vw = remV[vi];
      let best = { r: null, c: null, score: -1 };

      for (const ph of placed.filter(p => p.d === 'H')) {
        for (let hi = 0; hi < ph.w.length; hi++) {
          for (let vIdx = 0; vIdx < vw.w.length; vIdx++) {
            if (ph.w[hi] === vw.w[vIdx]) {
              const r = ph.r - vIdx;
              const c = ph.c + hi;
              if (canPlace(vw.w, r, c, 'V')) {
                const score = countIntersections(vw.w, r, c, 'V');
                // Prefer more intersections, then smaller r offset
                if (score > best.score || (score === best.score && best.r !== null && Math.abs(r) < Math.abs(best.r))) {
                  best = { r, c, score };
                }
              }
            }
          }
        }
      }

      if (best.r !== null) {
        placeWord(vw.w, best.r, best.c, 'V', vw.n, vw.q);
        remV.splice(vi, 1);
        changed = true;
      }
    }

    // Try to place H words connected to placed V words
    for (let hi = remH.length - 1; hi >= 0; hi--) {
      const hw = remH[hi];
      let best = { r: null, c: null, score: -1 };

      for (const pv of placed.filter(p => p.d === 'V')) {
        for (let hIdx = 0; hIdx < hw.w.length; hIdx++) {
          for (let vIdx = 0; vIdx < pv.w.length; vIdx++) {
            if (hw.w[hIdx] === pv.w[vIdx]) {
              const r = pv.r + vIdx;
              const c = pv.c - hIdx;
              if (canPlace(hw.w, r, c, 'H')) {
                const score = countIntersections(hw.w, r, c, 'H');
                if (score > best.score) {
                  best = { r, c, score };
                }
              }
            }
          }
        }
      }

      if (best.r !== null) {
        placeWord(hw.w, best.r, best.c, 'H', hw.n, hw.q);
        remH.splice(hi, 1);
        changed = true;
      }
    }

    if (!changed) {
      // Force-place: append at a free location
      const allR = placed.map(p => p.d === 'H' ? p.r : p.r + p.w.length - 1);
      const allC = placed.map(p => p.d === 'H' ? p.c + p.w.length - 1 : p.c);
      const maxR = Math.max(...allR) + 2;
      const maxC = Math.max(...allC) + 2;

      if (remH.length > 0) {
        placeWord(remH[0].w, maxR, 0, 'H', remH[0].n, remH[0].q);
        remH.splice(0, 1);
        changed = true;
      } else if (remV.length > 0) {
        placeWord(remV[0].w, 0, maxC, 'V', remV[0].n, remV[0].q);
        remV.splice(0, 1);
        changed = true;
      }
      if (!changed) break;
    }
  }

  // Normalize: shift so min r=0, min c=0
  const minR = Math.min(...placed.map(p => p.r));
  const minC = Math.min(...placed.map(p => p.c));
  placed.forEach(p => { p.r -= minR; p.c -= minC; });

  return placed;
}

// ============================================================
// VALIDATION
// ============================================================
function validate(placed, cwId) {
  const grid = {};
  const errors = [];
  for (const p of placed) {
    for (let i = 0; i < p.w.length; i++) {
      const r = p.d === 'H' ? p.r : p.r + i;
      const c = p.d === 'H' ? p.c + i : p.c;
      const key = r + ',' + c;
      if (grid[key] && grid[key] !== p.w[i]) {
        errors.push(`CW${cwId}: Conflict at (${r},${c}): word ${p.w}[${i}]='${p.w[i]}' conflicts with existing '${grid[key]}'`);
      }
      grid[key] = p.w[i];
    }
  }
  return errors;
}

// ============================================================
// GENERATE OUTPUT
// ============================================================
let allErrors = [];
const results = [];

for (const cw of MAVZULAR) {
  const placed = autoPlace(cw.h, cw.v);
  const errors = validate(placed, cw.id);
  allErrors = allErrors.concat(errors);

  // Count connected words (at least 1 intersection)
  const grid = {};
  for (const p of placed) {
    for (let i = 0; i < p.w.length; i++) {
      const r = p.d === 'H' ? p.r : p.r + i;
      const c = p.d === 'H' ? p.c + i : p.c;
      grid[r + ',' + c] = (grid[r + ',' + c] || 0) + 1;
    }
  }
  const connected = placed.filter(p => {
    for (let i = 0; i < p.w.length; i++) {
      const r = p.d === 'H' ? p.r : p.r + i;
      const c = p.d === 'H' ? p.c + i : p.c;
      if ((grid[r + ',' + c] || 0) > 1) return true;
    }
    return false;
  });

  process.stderr.write(`CW${cw.id}: ${placed.length} words placed, ${connected.length} connected` +
    (errors.length ? ` ❌ ${errors.length} ERRORS` : ' ✅') + '\n');

  results.push({ id: cw.id, title: cw.title, sub: cw.sub, placed });
}

if (allErrors.length) {
  process.stderr.write('\nERRORS:\n' + allErrors.join('\n') + '\n');
}

// Output JS array in krossvord.html format
console.log('const CWS = [');
for (let i = 0; i < results.length; i++) {
  const r = results[i];
  const words = r.placed.map(p => ({ n: p.n, w: p.w, r: p.r, c: p.c, d: p.d, q: p.q }));
  const wordsJson = words.map(w =>
    `      {n:${w.n}, w:'${w.w}', r:${w.r}, c:${w.c}, d:'${w.d}', q:${JSON.stringify(w.q)}}`
  ).join(',\n');
  const titleEsc = r.title.replace(/"/g, '\\"');
  const subEsc = r.sub.replace(/"/g, '\\"');
  console.log(`  { id:${r.id}, title:"${titleEsc}", sub:"${subEsc}",`);
  console.log(`    words:[\n${wordsJson}\n    ]}${i < results.length - 1 ? ',' : ''}`);
  console.log('');
}
console.log('];');
