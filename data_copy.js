//   // MA'LUMOTLAR BAZASI
//   const quizDatabase = {
//     topic1: {
//       title: "1-Mavzu: Davlat va huquq nazariyasi faniga kirish",
//       questions: randomizeQuestions([
//         {
//           q: "Fan tushunchasiga berilgan eng to'g'ri ta'rifni ko'rsating:",
//           options: [
//             "Insonning dunyoqarashini shakllantiruvchi badiiy va estetik tahlil usuli.",
//             "Davlat tomonidan belgilangan va majburiy kuchga ega bo'lgan qonun-qoidalar majmuasi.",
//             "Insonning atrof-muhitni anglashga qaratilgan bilish faoliyati bo'lib, obyektiv haqiqatni topish, tushuntirish va tizimlashtirish maqsadiga ega.",
//             "Jamiyatdagi barcha diniy va axloqiy qarashlarning yig'indisi.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Quyidagilardan qaysi biri aniq fanlar sirasiga kiradi?",
//           options: [
//             "Matematika va kibernetika.",
//             "Falsafa va mantiq.",
//             "Tarix va sotsiologiya.",
//             "Siyosatshunoslik va huquq.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Nazariy huquqiy fanlarning asosiy maqsadi nima?",
//           options: [
//             "Jinoyatchilikka qarshi kurashning texnik vositalarini ishlab chiqish.",
//             "Huquq va davlatning mohiyati, kelib chiqishi va umumiy qonuniyatlarini o'rganish.",
//             "Muayyan bir davlatning amaldagi qonunlarini modma-mod sharhlash.",
//             "Sud tizimidagi ish yuritish qoidalarini belgilash.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Quyidagi fanlardan qaysi biri amaliy huquqiy fanlar guruhiga kiradi?",
//           options: [
//             "Rim huquqi.",
//             "Davlat va huquq nazariyasi.",
//             "Huquqiy ta'limotlar tarixi.",
//             "Kriminalistika.",
//           ],
//           correct: 3,
//         },
//         {
//           q: "Davlat va huquq nazariyasining predmetini aniqlang:",
//           options: [
//             "Davlat va huquqning ijtimoiy mohiyati, rivojlanish qonuniyatlari, funksiyalari.",
//             "Faqatgina davlat boshqaruvi shakllarining tarixiy evolyutsiyasi.",
//             "Siyosiy partiyalarning ichki nizomlari va ularning tuzilishi.",
//             "Xalqaro shartnomalarni tuzish va bekor qilish tartiblari.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Metodologiya tushunchasi nimani anglatadi?",
//           options: [
//             "Fanning mazmuni, yo'nalishi va tadqiqot xarakterini belgilaydigan prinsiplar, nazariy asoslar, metodlar va ilmiy qadriyatlar tizimi.",
//             "Davlat organlarining o'zaro hamkorlik qilish tartib-tamoyillari.",
//             "Faqatgina ma'lumotlarni yig'ishda qo'llaniladigan texnik vositalar.",
//             "Ilmiy tadqiqot ishlarini rasmiylashtirish bo'yicha davlat standartlari.",
//           ],
//           correct: 3,
//         },
//         {
//           q: "Dialektik metodning mohiyati nimadan iborat?",
//           options: [
//             "Qarama-qarshiliklar, inqirozlar va rivojlanish jarayonida tahlil qilish.",
//             "Faqat raqamlar va statistik ma'lumotlar bilan ishlash.",
//             "Tarixiy hujjatlarni so'zma-so'z sharhlash va tarjima qilish.",
//             "Hodisalarni statik (o'zgarmas) holatda o'rganish.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Aksiologik metod nimani tadqiq etadi?",
//           options: [
//             "Qonun hujjatlarining iqtisodiy samaradorligini.",
//             "Davlat apparatining son tarkibi va strukturaviy bo'linishini.",
//             "Davlat va huquqni qadriyatlar tizimi (adolat, erkinlik, tenglik) sifatida tahlil qilish.",
//             "Normativ hujjatlardagi grammatik va mantiqiy xatolarni.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Quyidagilardan qaysi biri umumiy metodlar sirasiga kiradi?",
//           options: [
//             "So'rovnoma va intervyu.",
//             "Kriminalistik ekspertiza.",
//             "Analiz va sintez.",
//             "Matematik modellashtirish.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Sotsiologik metod qaysi vositalarni qo'llash orqali amalga oshiriladi?",
//           options: [
//             "So'rovnoma, intervyu, kuzatish, eksperiment.",
//             "Faqatgina qonun matnlarini mantiqiy tahlil qilish.",
//             "Tarixiy solishtirish va qiyoslash.",
//             "Matematik hisob-kitoblar va formulalar.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Formal-yuridik metod qanday vazifani bajaradi?",
//           options: [
//             "Aholi o'rtasida ijtimoiy so'rovnomalar o'tkazadi.",
//             "Yangi ilmiy kashfiyotlar va qonuniyatlarni ochadi.",
//             "Huquqiy normalarni mantiqiy, grammatik va strukturaviy tahlil qiladi.",
//             "Jinoyatchilarning psixologik holatini tahlil qiladi.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Qiyosiy-huquqiy metodning maqsadi qaysi javobda to'g'ri ko'rsatilgan?",
//           options: [
//             "O'tmishdagi huquqiy yodgorliklarni o'rganish.",
//             "Huquqbuzarliklarning statistik hisobini yuritish.",
//             "Turli davlatlar huquqiy tizimlarini solishtirish.",
//             "Qonunlarni mantiqiy qismlarga bo'lib tahlil qilish.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Davlat va huquq nazariyasi qaysi fanlar bilan chambarchas bog'liq?",
//           options: [
//             "Faqatgina fizika, biologiya va kimyo bilan.",
//             "Faqat lingvistika va filologiya bilan.",
//             "Faqatgina texnik va amaliy yuridik fanlar bilan.",
//             "Falsafa , siyosatshunoslik, iqtisodiyot, sotsiologiya, tarix kabi gumanitar fanlar bilan.",
//           ],
//           correct: 3,
//         },
//         {
//           q: "Davlat va huquq nazariyasining yuridik fanlar tizimidagi o'rni qanday?",
//           options: [
//             "Kirish, umumlashtiruvchi, metodologik, fundamental, atamashunoslik va abstrakt fan.",
//             "Tor ixtisoslikdagi amaliy va yordamchi fan.",
//             "Faqatgina xalqaro huquq normalarini o'rganuvchi fan.",
//             "Huquqiy hujjatlarni arxivlash va saqlash usullarini o'rgatuvchi fan.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Ontologik funksiya nimani anglatadi?",
//           options: [
//             "Kelajakka oid huquqiy bashoratlar qilishni.",
//             "Davlat va huquqning mohiyati, kelib chiqishi, rivojlanishi haqidagi savollarni o'rganish.",
//             "Barcha yuridik fanlar uchun metodlarni ishlab chiqishni.",
//             "Jamiyatda huquqiy ongni shakllantirishni.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Prognostik funksiyaning vazifasi nimadan iborat?",
//           options: [
//             "Tarixiy voqealarni tahlil qilish.",
//             "Amaldagi qonunlarni kodifikatsiya qilish.",
//             "Talabalarning bilimini baholash.",
//             "Davlat va huquqning kelajagiga oid ilmiy taxminlar ilgari surish.",
//           ],
//           correct: 3,
//         },
//         {
//           q: "Evristik funksiya nimani amalga oshiradi?",
//           options: [
//             "Qonunlardagi imlo xatolarini tuzatadi.",
//             "Yangi qonuniyatlarni ochish, ilmiy kashfiyotlar qilish.",
//             "Huquqiy terminlarning lug'aviy ma'nosini tushuntiradi.",
//             "Aholi o'rtasida huquqiy targ'ibot olib boradi.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Metodologik funksiyaning mohiyati nima?",
//           options: [
//             "Barcha yuridik fanlar uchun metodlar, kategoriyalar va prinsiplarni ishlab chiqish.",
//             "Davlat budjetini nazorat qilish usullarini yaratish.",
//             "Faqatgina jinoyat qonunchiligini takomillashtirish.",
//             "Sud jarayonlarini tashkil etish qoidalarini belgilash.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Induksiya metodi qanday mantiqiy yo'nalishda ishlaydi?",
//           options: [
//             "Umumiy qoidalardan xususiy xulosalarga o'tish orqali.",
//             "Obyektni bir xil holatda uzoq vaqt kuzatish orqali.",
//             "Ikki xil voqelikni faqat farqli tomonlarini topish orqali.",
//             "Xususiy holatlardan umumiy nazariyaga xulosa chiqarish orqali.",
//           ],
//           correct: 3,
//         },
//         {
//           q: "Davlat va huquqning o'zaro bog'liqligi nimada ko'rinadi?",
//           options: [
//             "Davlat va huquq bir-biridan butunlay mustaqil hodisalardir.",
//             "Faqat davlat huquqdan ustun turadi va unga bo'ysunmaydi.",
//             "Davlat organlari huquqiy normalar asosida faoliyat yuritadi, huquq esa vakolatlarni belgilaydi.",
//             "Huquq faqat sudlar faoliyatini tartibga soladi, davlatga daxli yo'q.",
//           ],
//           correct: 2,
//         },
//       ]),
//     },
//     topic2: {
//       title:
//         "2-Mavzu: Davlatning vujudga kelishi: yo'llari va nazariyalari",
//       questions: randomizeQuestions([
//         {
//           q: "Davlatning shakllanishiga ta'sir ko'rsatuvchi universal omillar qatoriga qaysi biri KIRMAYDI?",
//           options: [
//             "Aholi tarkibining murakkablashishi va ijtimoiy tabaqalanish.",
//             "Iqtisodiy munosabatlarning rivojlanishi va ishlab chiqaruvchi iqtisodiyotga o'tish.",
//             "Faqatgina harbiy tahdidlar va bosqinchilik harakatlarining mavjudligi.",
//             "Boshqaruvning maxsus apparatiga bo'lgan ijtimoiy ehtiyojning ortishi.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Sharqona (Osiyocha) davlat qurish yo'li asosan qaysi hududlar uchun xos bo'lgan?",
//           options: [
//             "G'arbiy Yevropa va Skandinaviya davlatlari.",
//             "Shimoliy Amerika va Avstraliya qit'asi.",
//             "Qadimgi Sharq, Afrika va Amerikaning ayrim hududlari.",
//             "Faqatgina O'rta dengiz havzasi va Bolqon yarim oroli.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Sharqona davlatchilik shakllanishining hal qiluvchi belgisi sifatida nima e'tirof etiladi?",
//           options: [
//             "Xususiy mulkning davlat mulkidan mutlaq ustunligi.",
//             "Yirik irrigatsiya (sug'orish) ishlarini tashkil etish zaruriyati.",
//             "Siyosiy partiyalarning ko'pligi va demokratik saylovlar.",
//             "Urug'-qabilalar o'rtasidagi doimiy harbiy to'qnashuvlar.",
//           ],
//           correct: 1,
//         },
//         {
//           q: '"Hokimiyat-mulk" hodisasining tub mazmuni nimadan iborat?',
//           options: [
//             "Har bir fuqaroning teng miqdorda yerga egalik qilishi.",
//             "Mulkning faqat xalqaro tashkilotlar nazoratida bo'lishi.",
//             "Urug'-qabila zodagonlari qo'lida jamoat boyliklarining to'planishi va lavozimlarning meros bo'lishi.",
//             "Davlat hokimiyatining xususiy tadbirkorlar tomonidan sotib olinishi.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "G'arbcha (Yevropacha) davlat shakllanish yo'lining asosiy omili qaysi javobda ko'rsatilgan?",
//           options: [
//             "Xususiy mulkning paydo bo'lishi va jamiyatning sinfiy tabaqalanishi.",
//             "Tabiiy ofatlarga qarshi birgalikda kurashish ehtiyoji.",
//             "Diniy aqidalarning jamiyat hayotiga mutlaq ta'siri.",
//             "Aholining barcha qatlamlari o'rtasida moddiy tenglikning o'rnatilishi.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Qadimgi Afinada davlat qanday shakllangan?",
//           options: [
//             "Tashqi dushmanlarning hujumi natijasida majburiy birlashuv orqali.",
//             "Urug'chilik ichida sinfiy antagonizm (ziddiyat) kuchayishi va dastlabki demokratiya orqali.",
//             "Diniy rahnamolarning xohish-irodasi va ilohiy vahiylar asosida.",
//             "Hukmdorning barcha yerlarni xususiy mulk qilib sotib olishi natijasida.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Teologik nazariyaning markaziy g'oyasi nima deb hisoblanadi?",
//           options: [
//             "Davlat ijtimoiy kelishuv asosida shakllangan.",
//             "Davlat va qonunlar Xudo tomonidan o'rnatilgan ilohiy tartibdir.",
//             "Hokimiyat kuchli qabilalarning kuchsizlar ustidan g'alabasi natijasidir.",
//             "Davlat inson psixologiyasining tabiiy ehtiyoji mahsulidir.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Quyidagi mutafakkirlardan qaysilari teologik nazariya vakillari hisoblanadi?",
//           options: [
//             "Tomas Gobbs va Jan Jak Russo.",
//             "Karl Marks va Fridrix Engels.",
//             "Aristotel va Platon.",
//             "Foma Akvinskiy, Avgustin Avreliy va Al-Movardiy.",
//           ],
//           correct: 3,
//         },
//         {
//           q: "Patriarxal nazariyaning asoschisi kim?",
//           options: [
//             "Lyudvig Gumplovich.",
//             "Gugo Grotsiy.",
//             "Aristotel.",
//             "Zigmund Freyd.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Ijtimoiy shartnoma nazariyasiga ko'ra davlat qanday yuzaga keladi?",
//           options: [
//             "Odamlar o'z huquqlarining bir qismini xavfsizlik va tartib uchun davlatga topshirishi orqali.",
//             "Bir qabilaning ikkinchi qabilani qurolli yo'l bilan bo'ysundirishi natijasida.",
//             "Inson miyasidagi psixologik o'zgarishlar va bo'ysunish instinkti orqali.",
//             "Iqtisodiy tengsizlik natijasida boylarning kambag'allar ustidan nazorati sifatida.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Ijtimoiy shartnoma nazariyasining asosiy namoyandalari qatorini aniqlang:",
//           options: [
//             "Marks, Engels, Lenin.",
//             "Lombrozo, Petrazhitskiy, Tard.",
//             "Akvinskiy, Movardiy, Avgustin.",
//             "Grotsiy (Getsiy), Gobbs, Lokk, Russo.",
//           ],
//           correct: 3,
//         },
//         {
//           q: 'Tomas Gobbsning "tabiiy holat" tushunchasi nimani anglatadi?',
//           options: [
//             "Odamlar o'rtasidagi mutlaq totuvlik va o'zaro yordam davri.",
//             '"Hammaning hammaga qarshi urushi" – xavfsizlikning mutlaq yo\'qligi.',
//             "Iqtisodiy farovonlik va xususiy mulkning gullab-yashnashi.",
//             "Insonlarning tabiat bilan uyg'unlikda, qonunlarsiz yashashi.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Zo'ravonlik nazariyasini ilgari surgan olimlarni ko'rsating:",
//           options: [
//             "Lyudvig Gumplovich, Karl Kautskiy, Evgeniy Dyuring.",
//             "Karl Marks, Fridrix Engels, Vladimir Lenin.",
//             "Aristotel, Konfutsiy, Mixaylovskiy.",
//             "Zigmund Freyd, Gabriel Tard, Lev Petrazhitskiy.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Marksistik nazariya talqinida davlatga qanday ta'rif beriladi?",
//           options: [
//             "Jamiyatdagi barcha tabaqalarni birlashtiruvchi muvozanat markazi.",
//             "Insoniyat rivojlanishining oliy ma'naviy bosqichi.",
//             "Bir sinfning boshqa sinf ustidan hukmronligini saqlab turish uchun xizmat qiladigan mashina.",
//             "Xalqning umumiy xohish-irodasi bilan tuzilgan ixtiyoriy uyushma.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Marksistik nazariyaning shakllanishiga kimlar hissa qo'shgan?",
//           options: [
//             "G. Spenser va E. Dyurkxeym.",
//             "K. Marks, F. Engels, V. Lenin.",
//             "K. Vittfogel va J. Styuard.",
//             "L. Morgan va E. Taylor.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Irrigatsiya (gidravlik) nazariyasining asoschisi kim?",
//           options: [
//             "L. Gumplovich.",
//             "F. Akvinskiy.",
//             "K. Vittfogel.",
//             "T. Gobbs.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Organik nazariya tarafdorlari davlatni nimaga qiyoslaydilar?",
//           options: [
//             "Murakkab mexanik qurilmaga.",
//             "Tirik organizmga.",
//             "Geometrik shakllar majmuasiga.",
//             "Cheksiz samoviy fazoga.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Psixologik nazariyaning yirik vakillari kimlar?",
//           options: [
//             "K. Marks va F. Engels.",
//             "L. Petrazhitskiy, G. Tard, Z. Freyd.",
//             "F. Akvinskiy va Al-Movardiy.",
//             "G. Grotsiy va J. Lokk.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Patrimonial nazariya bo'yicha davlatning kelib chiqishi nimaga bog'liq?",
//           options: [
//             "Jamiyat a'zolarining psixologik qo'rquviga.",
//             "Hukmdorning yerga bo'lgan egalik huquqi va davlat uning xususiy mulki ekanligiga.",
//             "Odamlar o'rtasidagi ijtimoiy ahdnomaga.",
//             "Ishlab chiqarish kuchlarining o'sishiga.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Qaysi nazariya butunlay obro'sizlangan va insoniyatga qarshi deb e'lon qilingan?",
//           options: [
//             "Patriarxal nazariya.",
//             "Marksistik nazariya.",
//             "Irqiy nazariya.",
//             "Psixologik nazariya.",
//           ],
//           correct: 2,
//         },
//       ]),
//     },
//     topic3: {
//       title: "3-Mavzu: DAVLAT VA HUQUQ TUSHUNCHASI BO'YICHA TEST SAVOLLARI",
//       questions: randomizeQuestions([
//         {
//           q: "Davlatning umumiy ta'rifini ko'rsatuvchi eng to'g'ri hukmni aniqlang:",
//           options: [
//             "Faqatgina ma'lum bir hududda istiqomat qiluvchi aholi guruhi.",
//             "Jamiyatning eng yuqori darajada tashkil topgan va universal boshqaruvchi instituti.",
//             "Ijtimoiy munosabatlarni tartibga soluvchi norasmiy qoidalar tizimi.",
//             "Siyosiy partiyalarning manfaatlarini himoya qiluvchi nodavlat tashkilot.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Qaysi qadimgi mutafakkir davlatni \"adolatni ta'minlovchi ideal tuzum\" sifatida ta'riflagan?",
//           options: ["Aristotel.", "Sokrat.", "Platon.", "Konfutsiy."],
//           correct: 2,
//         },
//         {
//           q: 'Tomas Gobbsning davlat haqidagi "Leviafan" kontseptsiyasi qanday mohiyatga ega?',
//           options: [
//             "Davlat — barcha fuqarolarning xavfsizligi uchun tuzilgan sun'iy maxluqdir.",
//             "Davlat — xususiy mulkdorlarning manfaatlarini himoya qiluvchi vositadir.",
//             "Davlat — jamiyatning ma'naviy kamoloti uchun xizmat qiluvchi muqaddas institutdir.",
//             "Davlat — faqatgina tashqi bosqinlardan himoyalanish uchun tuzilgan harbiy ittifoqdir.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Karl Marks ta'rifiga ko'ra davlatning asosiy vazifasi nimadan iborat?",
//           options: [
//             "Barcha ijtimoiy qatlamlar o'rtasida tenglikni ta'minlash.",
//             "Sinfliy zo'ravonlik vositasi bo'lish va hukmron sinf manfaatlarini himoya qilish.",
//             "Xalqaro maydonda tinchlik va totuvlikni saqlash.",
//             "Jamiyat a'zolarini diniy va axloqiy jihatdan tarbiyalash.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Davlatning hududiylik belgisi tarkibiga quyidagilarning qaysi biri kirmaydi?",
//           options: [
//             "Quruqlik va yer osti boyliklari.",
//             "Havo fazosi va suv hududlari.",
//             "Xorijiy davlatlarning elchixonalari joylashgan yer maydonlari.",
//             "Davlat chegarasi doirasidagi barcha tabiiy resurslar.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Suverenitetning ikki asosiy yo'nalishini ko'rsating:",
//           options: [
//             "Ichki va tashqi suverenitet.",
//             "Iqtisodiy va madaniy suverenitet.",
//             "Huquqiy va axloqiy suverenitet.",
//             "Hududiy va ma'muriy suverenitet.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Davlatning majburlash apparati tarkibiga qaysi organlar kiradi?",
//           options: [
//             "Ta'lim va sog'liqni saqlash muassasalari.",
//             "Madaniyat markazlari va sport jamiyatlari.",
//             "Politsiya, prokuratura, sudlar, milliy gvardiya va harbiy kuchlar.",
//             "Siyosiy partiyalar va jamoat birlashmalari.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Hokimiyatning legitimligi deganda nima tushuniladi?",
//           options: [
//             "Hokimiyatning faqatgina qurol kuchi bilan o'rnatilishi.",
//             "Hokimiyatning qonuniyligi va xalq roziligiga asoslanishi.",
//             "Hokimiyatning xalqaro tashkilotlar tomonidan tan olinishi.",
//             "Hokimiyatning bir guruh shaxslar qo'lida cheksiz to'planishi.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Davlatning iqtisodiy asosi qanday tarkibiy qismlardan iborat?",
//           options: [
//             "Faqatgina aholidan olinadigan xayriya mablag'lari.",
//             "Davlat apparatini moliyaviy ta'minlash, mustaqil byudjet va soliq tizimi.",
//             "Xorijiy davlatlardan olinadigan begaraz yordamlar.",
//             "Faqatgina oltin-valyuta zaxiralari.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Davlat mohiyatining sinfliy (tarixiy) qirrasi qanday tavsiflanadi?",
//           options: [
//             "Davlat — barcha fuqarolarning umumiy manfaati uchun xizmat qiladi.",
//             "Davlat — sinfliy zo'ravonlik mashinasi va hukmron sinf manfaatlarini himoya qilish vositasidir.",
//             "Davlat — jamiyatni faqatgina iqtisodiy inqirozlardan saqlash mexanizmidir.",
//             "Davlat — diniy qadriyatlarni asrash uchun tashkil etilgan tuzilmadir.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Davlatning umumsosial (zamonaviy) qirrasi qaysi vazifani ustuvor deb biladi?",
//           options: [
//             "Butun jamiyatning umumiy manfaatlariga xizmat qilish va inson huquqlarini himoya qilish.",
//             "Faqatgina ma'lum bir siyosiy guruhning obro'sini oshirish.",
//             "Aholi o'rtasida qat'iy tabaqalanishni saqlab qolish.",
//             "Barcha xususiy mulk shakllarini davlat tasarrufiga o'tkazish.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Davlatning institutsional qirrasi tarkibiga nimalar kiradi?",
//           options: [
//             "Diniy tashkilotlar va oila institutlari.",
//             "Qonun chiqaruvchi, ijro va sud hokimiyatlari hamda huquqni muhofaza qiluvchi organlar.",
//             "Faqatgina xalqaro hamjamiyat tomonidan tuzilgan hay'atlar.",
//             "Sanoat korxonalari va qishloq xo'jaligi birlashmalari.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Elita nazariyasining asosiy vakillari kimlar?",
//           options: [
//             "K. Marks va F. Engels.",
//             "V. Pareto va G. Moska.",
//             "T. Gobbs va J. Lokk.",
//             "Platon va Aristotel.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Etatistik-totalitar kontseptsiyaga ko'ra, davlat va huquq nisbati qanday?",
//           options: [
//             "Huquq davlatdan ustun turadi.",
//             "Davlat huquqdan ustun va u huquqni o'z irodasi bilan yaratadi.",
//             "Davlat va huquq bir-biriga mutlaqo daxlsizdir.",
//             "Huquq faqatgina xalqaro shartnomalar asosida amal qiladi.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Liberal kontseptsiyaga ko'ra, davlat va huquq nisbati qanday tushuniladi?",
//           options: [
//             "Davlat huquqdan yuqori turuvchi kuchdir.",
//             "Huquq davlatdan ustun turadi (tabiiy huquq nazariyasi asosida).",
//             "Huquq faqatgina davlat apparatini saqlash uchun kerak.",
//             "Davlat va huquq bir xil tushunchalar hisoblanadi.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Davlatning huquqqa ko'rsatadigan ta'siri nimada namoyon bo'ladi?",
//           options: [
//             "Huquqni yaratish, rasmiylashtirish va unga umumiy majburiylik xususiyatini berishda.",
//             "Huquqiy normalarni mutlaqo inkor etishda.",
//             "Faqatgina xalqaro normalarni tarjima qilishda.",
//             "Huquqni faqatgina sudlar uchun cheklab qo'yishda.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Huquq davlatga qanday ta'sir ko'rsatadi?",
//           options: [
//             "Davlatni iqtisodiy resurslar bilan ta'minlaydi.",
//             "Davlat faoliyatini tartibga soladi, unga legitimlik bag'ishlaydi va organlar shakllanishini belgilaydi.",
//             "Davlatni harbiy jihatdan kuchaytiradi.",
//             "Davlatning tashqi siyosatdagi barcha vakolatlarini cheklaydi.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Zamonaviy davlatning eng maqbul iqtisodiy asosi sifatida nima tan olinadi?",
//           options: [
//             "Faqatgina davlat mulkiga asoslangan rejali iqtisodiyot.",
//             "Turli mulkchilik shakllariga asoslangan ijtimoiy yo'naltirilgan bozor iqtisodiyoti.",
//             "An'anaviy qishloq xo'jaligi va hunarmandchilik.",
//             "Faqatgina xorijiy investitsiyalarga tayangan iqtisodiyot.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Davlatning ijtimoiy asosi deganda nima tushuniladi?",
//           options: [
//             "Davlatni qo'llab-quvvatlovchi jamiyat qatlamlari va xalqning ishonchi.",
//             "Davlatdagi barcha ijtimoiy yordam muassasalari.",
//             "Aholining faqatgina kam ta'minlangan qismi.",
//             "Davlat tomonidan beriladigan barcha turdagi imtiyozlar.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Davlatning ilmiy asosi nima uchun zarur?",
//           options: [
//             "Faqatgina ta'lim tizimini rivojlantirish uchun.",
//             "Davlat faoliyati ishonchli poydevorga ega bo'lishi va ilmiy asoslangan qarorlar qabul qilinishi uchun.",
//             "Olimlarning jamiyatdagi mavqeini oshirish uchun.",
//             "Yangi texnologiyalarni xorijdan sotib olish jarayonini osonlashtirish uchun.",
//           ],
//           correct: 1,
//         },
//       ]),
//     },
//     topic4: {
//       title: "4-Mavzu: DAVLAT TIPOLOGIYASI BO'YICHA TEST SAVOLLARI",
//       questions: randomizeQuestions([
//         {
//           q: "Davlat tipologiyasi tushunchasiga berilgan eng to'g'ri ta'rifni aniqlang:",
//           options: [
//             "Davlatlarning geografik joylashuvi va aholi soniga qarab guruhlanishi.",
//             "Davlatlarning mohiyati, rivojlanish qonuniyatlari va o'ziga xos xususiyatlarini ilmiy mezonlar asosida guruhlash.",
//             "Faqatgina davlat boshqaruv shakllarini demokratik va nodemokratik turlarga ajratish.",
//             "Davlatlarning xalqaro tashkilotlardagi nufuzi va iqtisodiy qudratini baholash.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Formatsion yondashuvning asosiy nazariyotchilari kimlar hisoblanadi?",
//           options: [
//             "Arnold Toynbi va Maks Veber.",
//             "Viltredo Pareto va Gaetano Moska.",
//             "K. Marks, F. Engels, V.I. Lenin.",
//             "L. Gumplovich va Georg Gegel.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Formatsion yondashuvga ko'ra, davlatlar necha tarixiy tipga bo'linadi?",
//           options: ["3 ta.", "5 ta.", "20-26 ta.", "Cheksiz miqdorda."],
//           correct: 1,
//         },
//         {
//           q: "Formatsion yondashuvdagi davlat tiplarining to'g'ri ketma-ketligini ko'rsating:",
//           options: [
//             "Feodal, quldorlik, burjua, sotsialistik.",
//             "Quldorlik, feodal, sotsialistik, burjua.",
//             "Quldorlik, feodal, burjua, sotsialistik.",
//             "Teokratik, liberal, totalitar, demokratik.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Quldorlik davlatining eng rivojlangan shakllari qaysi hududlarda kuzatilgan?",
//           options: [
//             "Qadimgi Misr va Bobilda.",
//             "O'rta asrlardagi Fransiya va Angliyada.",
//             "Qadimgi Rim va Yunonistonda.",
//             "Sanoat inqilobi davridagi Germaniyada.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Feodal davlatning iqtisodiy asosi nimadan iborat edi?",
//           options: [
//             "Qullarning tekin mehnatidan foydalanish.",
//             "Ishlab chiqarish vositalarining umumxalq mulki ekanligi.",
//             "Feodal mulkchilik, ya'ni yerga bo'lgan xususiy mulk.",
//             "Erkin savdo va bozor iqtisodiyoti munosabatlari.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Burjua davlatining asosiy shiori qanday bo'lgan?",
//           options: [
//             '"Barcha hokimiyat xalqqa".',
//             '"Erkinlik, tenglik, birodarlik".',
//             '"Yagona davlat, yagona millat".',
//             '"Adolat — davlatning poydevori".',
//           ],
//           correct: 1,
//         },
//         {
//           q: "Sotsialistik davlatning iqtisodiy asosi qaysi javobda to'g'ri ko'rsatilgan?",
//           options: [
//             "Ishlab chiqarish vositalarining xususiy mulkdorlar qo'lida to'planishi.",
//             "Yerga bo'lgan tabaqaviy-vakillik mulkchiligi.",
//             "Ishlab chiqarish vositalarining umumxalq mulki ekanligi.",
//             "Xalqaro korporatsiyalarning iqtisodiy hukmronligi.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Formatsion yondashuvning asosiy kamchiligi sifatida nima e'tirof etiladi?",
//           options: [
//             "Iqtisodiy omillarga haddan tashqari ko'p urg'u berish.",
//             "Sxematizm, madaniy omillarni e'tiborsiz qoldirish va Yevropa markazchilik.",
//             "Davlatlarni guruhlashda ilmiy mezonlarning yo'qligi.",
//             "Faqatgina diniy omillarni tahlil qilish bilan cheklanish.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Tsivilizatsion yondashuv davlatlarni qaysi mezonlar asosida tasniflaydi?",
//           options: [
//             "Ishlab chiqarish usuli va sinfiy kurash darajasi.",
//             "Madaniy, ma'naviy, diniy, milliy va psixologik omillar.",
//             "Davlat hududining kattaligi va tabiiy resurslar boyligi.",
//             "Armiyaning qudrati va harbiy texnologiyalar darajasi.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Tsivilizatsion yondashuv nazariyasining asoschisi kim?",
//           options: [
//             "Karl Marks.",
//             "Gaetano Moska.",
//             "Arnold Toynbi.",
//             "Vladimir Lenin.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Tsivilizatsion yondashuvga ko'ra, har bir tsivilizatsiya qaysi bosqichlardan o'tadi?",
//           options: [
//             "Tinchlik, urush, inqiroz, tiklanish.",
//             "Ibtidoiy, o'rta asrlar, yangi davr.",
//             "Tug'ilish, o'sish, tanazzul, yo'qolish.",
//             "Quldorlik, feodalizm, kapitalizm.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Teokratik davlatlarga quyidagilarning qaysi biri misol bo'la oladi?",
//           options: [
//             "AQSH, Fransiya, Germaniya.",
//             "Vatikan, Eron, Saudiya Arabistoni.",
//             "Xitoy, Shimoliy Koreya, Kuba.",
//             "Hindiston, Yaponiya, Turkiya.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Georg Gegel davlatlar tipologiyasini qaysi mezon asosida tuzgan?",
//           options: [
//             "Iqtisodiy farovonlik.",
//             "Erkinlik darajasi.",
//             "Diniy e'tiqod.",
//             "Hududiy bo'linish.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Siyosiy rejim bo'yicha davlatlar necha turga bo'linadi?",
//           options: ["2 ta.", "3 ta.", "5 ta.", "10 ta."],
//           correct: 1,
//         },
//         {
//           q: "Zamonaviy ilmiy pozitsiyaga ko'ra, davlatni qanday yondashuv asosida o'rganish kerak?",
//           options: [
//             "Faqatgina iqtisodiy-formatsion yondashuv.",
//             "Faqatgina madaniy-tsivilizatsion yondashuv.",
//             "Kompleks yondashuv — ham iqtisodiy, ham madaniy jihatdan.",
//             "Faqatgina siyosiy-huquqiy normalar tahlili orqali.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Nazariy huquqiy fanlarning asosiy tadqiqot maqsadi nima?",
//           options: [
//             "Jinoyatchilikning oldini olish usullarini ishlab chiqish.",
//             "Huquq va davlatning mohiyati, kelib chiqishi va umumiy qonuniyatlarini o'rganish.",
//             "Muayyan bir davlatning amaldagi qonunlarini sharhlash.",
//             "Sud jarayonlarida ishtirok etuvchi shaxslarning huquqlarini belgilash.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Metodologik funksiya yuridik fanda nimani ta'minlaydi?",
//           options: [
//             "Aholi o'rtasida huquqiy ongni shakllantirishni.",
//             "Barcha yuridik fanlar uchun metodlar, kategoriyalar va prinsiplarni ishlab chiqishni.",
//             "Kelajakdagi huquqiy o'zgarishlarni bashorat qilishni.",
//             "Mavjud huquqiy normalarni amaliyotga tatbiq etishni.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Induksiya metodi tahlilni qanday yo'nalishda amalga oshiradi?",
//           options: [
//             "Umumiy qoidalardan xususiy holatlarga qarab.",
//             "Xususiy holatlardan umumiy nazariyaga xulosa chiqarish orqali.",
//             "Ob'ektni butunlikdan bo'laklarga ajratish orqali.",
//             "Faqatgina ikki xil ob'ektning o'xshashliklarini topish orqali.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Davlat va huquqning o'zaro bog'liqligi nimada namoyon bo'ladi?",
//           options: [
//             "Davlat va huquq bir-biridan butunlay mustaqil faoliyat yuritadi.",
//             "Davlat organlari huquqiy normalar asosida faoliyat yuritadi, huquq esa vakolatlarni belgilaydi.",
//             "Huquq faqatgina xalqaro darajada davlatning obro'sini belgilaydi.",
//             "Davlat huquqdan ustun turadi va unga bo'ysunmaydi.",
//           ],
//           correct: 1,
//         },
//       ]),
//     },
//     topic5: {
//       title: "5-Mavzu: DAVLAT SHAKLI BO'YICHA TEST SAVOLLARI",
//       questions: randomizeQuestions([
//         {
//           q: "Davlat shakli tushunchasi nechta o'zaro bog'liq tarkibiy qismdan iborat?",
//           options: ["2 ta.", "3 ta.", "4 ta.", "5 ta."],
//           correct: 1,
//         },
//         {
//           q: "Davlat shaklining tarkibiy elementlari to'g'ri ko'rsatilgan javobni aniqlang:",
//           options: [
//             "Boshqaruv shakli, davlat tuzilishi va siyosiy rejim.",
//             "Davlat suvereniteti, hudud va aholi tarkibi.",
//             "Soliq tizimi, milliy valyuta va davlat byudjeti.",
//             "Qonun chiqaruvchi, ijro etuvchi va sud hokimiyati.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Monarxiya so'zining lug'aviy ma'nosi nima?",
//           options: [
//             "Xalq hokimiyati.",
//             "Umumiy ish.",
//             "Yakka hokimiyat.",
//             "Tanlanganlar boshqaruvi.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Monarxiyaning asosiy belgilariga quyidagilarning qaysi biri kiradi?",
//           options: [
//             "Merosiylik, umrbodlik va siyosiy javobgarlikning yo'qligi.",
//             "Hokimiyatning ma'lum muddatga saylanishi.",
//             "Davlat boshlig'ining parlament oldida hisobdorligi.",
//             "Hokimiyatning xalq tomonidan bevosita nazorat qilinishi.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Monarxiya boshqaruv shaklining necha xil turi mavjud?",
//           options: ["2 ta.", "3 ta.", "4 ta.", "5 ta."],
//           correct: 2,
//         },
//         {
//           q: "Mutlaq (absolyut) monarxiya amal qiladigan davlatlarni ko'rsating:",
//           options: [
//             "Buyuk Britaniya va Yaponiya.",
//             "Saudiya Arabistoni va Omon.",
//             "Ispaniya va Belgiya.",
//             "Marokash va Iordaniya.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Konstitutsiyaviy (parlamentar) monarxiyada monarxning roli qanday tavsiflanadi?",
//           options: [
//             "Monarx cheksiz hokimiyatga ega va qonunlarni yakka o'zi qabul qiladi.",
//             "Monarx hukumatni shakllantiradi va uning faoliyatini bevosita boshqaradi.",
//             '"Monarx hukmronlik qiladi, lekin boshqarmaydi" — u ramziy davlat boshlig\'idir.',
//             "Monarx faqatgina harbiy harakatlar paytida oliy qo'mondonlikni amalga oshiradi.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Respublika so'zining lug'aviy ma'nosi qaysi javobda to'g'ri berilgan?",
//           options: [
//             "Ilohiy hukm.",
//             "Umumiy ish.",
//             "Yagona birlik.",
//             "Kollektiv boshqaruv.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Respublika boshqaruv shakliga xos bo'lmagan (KIRMAYDIGAN) belgini aniqlang:",
//           options: [
//             "Hokimiyat organlarining saylab qo'yilishi.",
//             "Davlat organlarining ma'lum bir muddatga saylanishi.",
//             "Hokimiyatning meros bo'lib o'tishi va umrbodlik.",
//             "Mansabdor shaxslarning xalq oldidagi javobgarligi.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Respublika boshqaruv shaklining necha asosiy turi mavjud?",
//           options: ["2 ta.", "3 ta.", "4 ta.", "6 ta."],
//           correct: 1,
//         },
//         {
//           q: "Parlamentar respublikada hukumat kimning oldida siyosiy javobgar hisoblanadi?",
//           options: [
//             "Prezident oldida.",
//             "Parlament oldida.",
//             "Konstitutsiyaviy sud oldida.",
//             "Saylovchilarning umumiy yig'ilishi oldida.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Prezidentlik respublikasining asosiy xususiyati nimadan iborat?",
//           options: [
//             "Prezident ramziy vakolatlarga ega bo'lib, qarorlarni parlament tasdiqlaydi.",
//             "Hokimiyatlarning qat'iy ajratilishi va prezidentning to'g'ridan-to'g'ri (yoki maxsus kollegiya orqali) saylanishi.",
//             "Hukumat boshlig'i lavozimi mavjud emas, barcha ishlarni parlament qo'mitasi bajaradi.",
//             "Prezident parlament tomonidan saylanadi va unga hisobdor bo'ladi.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "O'zbekiston Respublikasining boshqaruv shakli qaysi javobda to'g'ri ko'rsatilgan?",
//           options: [
//             "Parlamentar respublika.",
//             "Prezidentlik respublikasi.",
//             "Aralash respublika.",
//             "Teokratik respublika.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Unitar davlat so'zining lug'aviy ma'nosi nima?",
//           options: ["Ittifoq.", "Birlik.", "Tenglik.", "Erkinlik."],
//           correct: 1,
//         },
//         {
//           q: "Unitar davlatning asosiy belgilariga quyidagilarning qaysi biri kiradi?",
//           options: [
//             "Har bir hududning o'z mustaqil Konstitutsiyasi va fuqaroligi bo'lishi.",
//             "Yagona Konstitutsiya, yagona fuqarilik va yagona boshqaruv tizimi.",
//             "Markaziy hukumatga bo'ysunmaydigan sub'ektlarning mavjudligi.",
//             "Davlat hududida bir nechta mustaqil pul tizimining amal qilishi.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "O'zbekiston Respublikasi tarkibida qaysi hudud avtonom respublika maqomiga ega?",
//           options: [
//             "Farg'ona viloyati.",
//             "Surxondaryo viloyati.",
//             "Qoraqalpog'iston Respublikasi.",
//             "Toshkent shahri.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Federatsiya so'zi qanday ma'noni anglatadi?",
//           options: [
//             "Bo'linmaslik.",
//             "Ittifoq.",
//             "Cheklangan hokimiyat.",
//             "Mustaqillik.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Federativ davlatning eng xarakterli belgisi qaysi?",
//           options: [
//             "Davlatning ma'muriy hududlarga bo'linmasligi.",
//             "Ikki darajali hokimiyat va qonunchilik tizimining (federal va sub'ekt) mavjudligi.",
//             "Sub'ektlarning davlat tarkibidan xohlagan vaqtda chiqib ketish huquqi.",
//             "Yagona markazlashgan ijro etuvchi organ.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Konfederatsiyaning federatsiyadan asosiy farqi nimada?",
//           options: [
//             "Konfederatsiyada umumiy byudjet majburiy hisoblanadi.",
//             "Konfederatsiyada sub'ektlar o'z suverenitetini saqlab qoladi va undan chiqish huquqiga ega bo'ladi.",
//             "Konfederatsiya faqatgina harbiy maqsadda tuziladigan vaqtinchalik ittifoqdir.",
//             "Konfederatsiyada yagona fuqarolik joriy etiladi.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "O'zbekiston Respublikasining davlat tuzilishi shakli qanday?",
//           options: [
//             "Simmetrik federatsiya.",
//             "Konfederativ uyushma.",
//             "Markazlashmagan murakkab davlat.",
//             "Markazlashgan unitar davlat.",
//           ],
//           correct: 3,
//         },
//       ]),
//     },
//     topic6: {
//       title: "6-Mavzu: SIYOSIY REJIMLAR BO'YICHA TEST SAVOLLARI",
//       questions: randomizeQuestions([
//         {
//           q: "Siyosiy rejim tushunchasining mohiyati qaysi javobda to'g'ri ko'rsatilgan?",
//           options: [
//             "Davlat organlarining faqatgina tashqi siyosiy aloqalarni o'rnatish tartibi. [cite: 116]",
//             "Siyosiy hokimiyatni amalga oshirish usullari, metodlari va vositalarining yig'indisi. [cite: 116]",
//             "Aholi o'rtasida o'tkaziladigan ijtimoiy so'rovnomalar va statistik tahlillar majmuasi. [cite: 116]",
//             "Davlatning ma'muriy-hududiy birliklarga bo'linish prinsipi. [cite: 116]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Siyosiy rejimning asosiy belgilariga quyidagilarning qaysi biri kiradi?",
//           options: [
//             "Faqatgina davlat byudjetining taqsimlanish xususiyatlari. [cite: 117]",
//             "Milliy valyutaning barqarorligi va iqtisodiy o'sish sur'atlari. [cite: 117]",
//             "Xalqning hokimiyatni shakllantirishdagi ishtiroki, inson huquqlari holati va siyosiy pluralizm. [cite: 117]",
//             "Davlat chegaralarining daxlsizligi va harbiy qudrat darajasi. [cite: 117]",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Demokratiya tushunchasining asosiy ma'nosi nimani anglatadi?",
//           options: [
//             "Xalqning hokimiyatning asosiy manbai sifatida tan olinishi. [cite: 118]",
//             "Hokimiyatning meros bo'lib o'tishi va cheksizligi. [cite: 118]",
//             "Yagona mafkuraning majburiy xarakterga ega bo'lishi. [cite: 118]",
//             "Boshqaruvning faqatgina elita guruhlari tomonidan amalga oshirilishi. [cite: 118]",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Demokratik rejimga xos bo'lgan asosiy belgilar qaysi javobda ko'rsatilgan?",
//           options: [
//             "Hokimiyatning bir qo'lda to'planishi va muxolifatning taqiqlanishi. [cite: 119]",
//             "Erkin va muqobil saylovlar, siyosiy pluralizm hamda hokimiyatlar bo'linishi. [cite: 119]",
//             "Ommaviy axborot vositalari ustidan qat'iy davlat tsenzurasi. [cite: 119]",
//             "Huquqni muhofaza qiluvchi organlarning jamiyat ustidan cheksiz nazorati. [cite: 119]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Liberal-demokratiyaning sotsial-demokratiyadan asosiy farqi nimada?",
//           options: [
//             "Liberal-demokratiya individual erkinlikni, sotsial-demokratiya esa ijtimoiy adolatni ustuvor qo'yadi. [cite: 120]",
//             "Liberal-demokratiya faqat monarxiya sharoitida amal qiladi. [cite: 120]",
//             "Sotsial-demokratiyada saylovlar o'tkazilmaydi. [cite: 120]",
//             "Liberal-demokratiya davlatning iqtisodiyotga to'liq aralashuvini yoqlaydi. [cite: 120]",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Liberal-demokratiya rejimiga misol bo'la oladigan davlatlar juftligini toping:",
//           options: [
//             "Xitoy va Shimoliy Koreya. [cite: 121]",
//             "Eron va Saudiya Arabistoni. [cite: 121]",
//             "AQSH va Buyuk Britaniya. [cite: 121]",
//             "Kuba va Vetnam. [cite: 121]",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Avtoritar rejimning eng xarakterli xususiyati qaysi?",
//           options: [
//             "Inson huquqlarining mutlaq ustuvorligi. [cite: 122]",
//             "Hokimiyatning konsentratsiyasi (to'planishi) va siyosiy pluralizmning cheklanishi. [cite: 122]",
//             "Jamiyat hayotining barcha jabhalari ustidan to'liq nazorat. [cite: 122]",
//             "Ko'p partiyaviylik asosida shakllangan parlamentar boshqaruv. [cite: 122]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Avtoritar rejim o'zining namoyon bo'lish shakliga ko'ra necha turga bo'linadi?",
//           options: [
//             "3 ta. [cite: 123]",
//             "2 ta. [cite: 123]",
//             "5 ta. [cite: 123]",
//             "4 ta. [cite: 123]",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Texnokratik avtoritarizm rejimiga misol sifatida qaysi davlat ko'rsatiladi?",
//           options: [
//             "Fransiya. [cite: 124]",
//             "Xitoy. [cite: 124]",
//             "Shvetsiya. [cite: 124]",
//             "Kanada. [cite: 124]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Harbiy rejim odatda qanday yo'l bilan hokimiyatga keladi?",
//           options: [
//             "Umumxalq referendumi natijasida. [cite: 125]",
//             "Davlat to'ntarishi orqali hokimiyatni qo'lga kiritish bilan. [cite: 125]",
//             "Konstitutsiyaviy islohotlar o'tkazish orqali. [cite: 125]",
//             "Xalqaro hamjamiyatning qarori bilan. [cite: 125]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Teokratik avtoritarizmga misol bo'la oladigan rejimni aniqlang:",
//           options: [
//             "SSSRdagi kommunistik boshqaruv. [cite: 126]",
//             'Eron va "Tolibon" rejimi. [cite: 126]',
//             "Mussolini boshchiligidagi Italiya. [cite: 126]",
//             "Shveytsariya kantonlaridagi boshqaruv. [cite: 126]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Totalitar rejimning tub mohiyati nimadan iborat?",
//           options: [
//             "Jamiyat hayotining barcha sohalarini davlat tomonidan to'liq nazorat qilinishi. [cite: 127]",
//             "Davlatning iqtisodiy jarayonlardan butunlay voz kechishi. [cite: 127]",
//             "Faqatgina tashqi xavfsizlikni ta'minlash bilan cheklanish. [cite: 127]",
//             "Hokimiyatning turli siyosiy kuchlar o'rtasida teng taqsimlanishi. [cite: 127]",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Totalitar rejimning asosiy belgilarini ko'rsating:",
//           options: [
//             "Siyosiy erkinlik va fikrlar xilma-xilligi. [cite: 128]",
//             "Yagona va majburiy mafkura, bir partiyali tizim hamda ommaviy terror. [cite: 128]",
//             "Hokimiyat organlarining muntazam yangilanib turishi. [cite: 128]",
//             "Xalqaro huquq normalarining ichki qonunchilikdan ustunligi. [cite: 128]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Kommunistik totalitarizm tajribasi qaysi davlatlar misolida ko'rilgan?",
//           options: [
//             "AQSH va Kanada. [cite: 129]",
//             "SSSR va Shimoliy Koreya. [cite: 129]",
//             "Hindiston va Pokiston. [cite: 129]",
//             "Braziliya va Argentina. [cite: 129]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Fashistik rejim hukmronlik qilgan davlatlarni aniqlang:",
//           options: [
//             "Avstriya va Vengriya. [cite: 130]",
//             "Gitler Germaniyasi va Mussolini Italiyasi. [cite: 130]",
//             "Yaponiya va Tailand. [cite: 130]",
//             "Ispaniya va Portugaliya. [cite: 130]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Gibrid rejim tushunchasiga berilgan to'g'ri tavsifni toping:",
//           options: [
//             "Faqatgina diniy va harbiy qoidalarga asoslangan boshqaruv. [cite: 131]",
//             "Demokratik va avtoritar elementlarning o'zaro aralashmasi. [cite: 131]",
//             "Davlat boshqaruvining butunlay yo'qolishi (anarxiya). [cite: 131]",
//             "Hokimiyatning faqatgina bir necha boy oilalar qo'lida bo'lishi. [cite: 131]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Gibrid rejimning o'ziga xos xususiyati nimada?",
//           options: [
//             "Rasmiy demokratik institutlar mavjud, ammo ular manipulyatsiya qilinadi. [cite: 132]",
//             "Hech qanday saylovlar va konstitutsiya mavjud emasligi. [cite: 132]",
//             "Hokimiyatning har yili tinch yo'l bilan almashishi. [cite: 132]",
//             "Har bir fuqaroning davlat boshqaruvida bevosita ishtirok etishi. [cite: 132]",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Raqobatbardosh avtoritarizmda qanday holat kuzatiladi?",
//           options: [
//             "Siyosiy raqobatning mutlaq yo'qligi. [cite: 133]",
//             "Real raqobat mavjud, lekin o'yin maydoni (shart-sharoitlar) buzilgan bo'ladi. [cite: 133]",
//             "Barcha partiyalar uchun teng va adolatli imkoniyatlar yaratiladi. [cite: 133]",
//             "Hukumat faqatgina xalqaro tashkilotlar nazorati ostida ishlaydi. [cite: 133]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Demokratik tizimda hokimiyatning asosiy manbai kim?",
//           options: [
//             "Qurolli kuchlar. [cite: 134]",
//             "Xalq (erkin saylovlar orqali). [cite: 134]",
//             "Diniy ulamolar kengashi. [cite: 134]",
//             "Boy tadbirkorlar va sanoatchilar. [cite: 134]",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Totalitar rejim sharoitida qonun ustuvorligi holati qanday bo'ladi?",
//           options: [
//             "Qonunlar barcha uchun teng va majburiy amal qiladi. [cite: 135]",
//             "Faqatgina xalqaro huquq normalari amal qiladi. [cite: 135]",
//             "Qonun ustuvorligi mavjud bo'lmaydi. [cite: 135]",
//             "Inson huquqlari qonun bilan kafolatlanadi. [cite: 135]",
//           ],
//           correct: 2,
//         },
//       ]),
//     },
//     topic7: {
//       title: "7-Mavzu: DAVLAT FUNKTSIYALARI BO'YICHA TEST SAVOLLARI",
//       questions: randomizeQuestions([
//         {
//           q: "Lotincha \"functio\" so'zining lug'aviy ma'nosi nima?",
//           options: [
//             "Boshqaruv va nazorat.",
//             "Tuzilma va tartib.",
//             "Faoliyat va bajarish.",
//             "Hokimiyat va kuch.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Davlat funksiyasi tushunchasiga berilgan eng to'liq ta'rifni toping:",
//           options: [
//             "Davlat organlarining faqat ichki tartibni saqlashga qaratilgan harakatlari.",
//             "Davlatning umumijtimoiy mohiyatidan kelib chiqadigan va uning maqsadlariga erishishga qaratilgan asosiy faoliyat yo'nalishlari.",
//             "Faqatgina xalqaro maydonda davlat manfaatlarini himoya qilish usullari.",
//             "Davlat byudjetini taqsimlash va soliq yig'ish jarayonlarining yig'indisi.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Davlat faoliyatidagi mantiqiy ketma-ketlik qaysi javobda to'g'ri ko'rsatilgan?",
//           options: [
//             "Funksiya → Vazifa → Maqsad.",
//             "Vazifa → Funksiya → Maqsad.",
//             "Maqsad → Vazifa → Funksiya.",
//             "Maqsad → Funksiya → Vazifa.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Davlat funksiyalarini tasniflashda necha asosiy mezon qo'llaniladi?",
//           options: ["2 ta.", "3 ta.", "4 ta.", "5 ta."],
//           correct: 1,
//         },
//         {
//           q: "Faoliyat sohalari (muhimlik darajasi) bo'yicha funksiyalar qanday bo'linadi?",
//           options: [
//             "Asosiy va yordamchi.",
//             "Doimiy va vaqtinchalik.",
//             "Ichki va tashqi.",
//             "Huquqiy va tashkiliy.",
//           ],
//           correct: 0,
//         },
//         {
//           q: "Quyidagilarning qaysi biri davlatning ichki funksiyalari guruhiga kiradi?",
//           options: [
//             "Xalqaro terrorizmga qarshi kurash.",
//             "Davlat mudofaasini ta'minlash.",
//             "Iqtisodiy, ijtimoiy va huquq-tartibotni saqlash funksiyalari.",
//             "Boshqa davlatlar bilan diplomatik aloqalar o'rnatish.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Davlatning iqtisodiy funksiyasi qaysi vazifani qamrab oladi?",
//           options: [
//             "Faqatgina aholini ijtimoiy nafaqalar bilan ta'minlashni.",
//             "Iqtisodiyotni boshqarish, byudjet-soliq tizimini shakllantirish va tadbirkorlikni qo'llab-quvvatlashni.",
//             "Jinoyatchilikka qarshi kurashishni.",
//             "Tabiiy boyliklarni faqat davlat mulki sifatida saqlashni.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Ijtimoiy funksiya tarkibiga nimalar kiradi?",
//           options: [
//             "Siyosiy partiyalar faoliyatini tartibga solish.",
//             "Aholini ijtimoiy himoya qilish, ta'lim, sog'liqni saqlash va madaniyatni rivojlantirish.",
//             "Davlat chegaralarini qo'riqlash va qurolli kuchlarni shakllantirish.",
//             "Xorijiy investitsiyalarni jalb qilish.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Ekologik funksiya qachon alohida mustaqil funksiya sifatida shakllandi?",
//           options: [
//             "O'rta asrlarda.",
//             "XIX asrning boshlarida.",
//             "Zamonaviy davrda (XX-XXI asrlar).",
//             "Ibtidoiy jamoa tuzumi parchalangan davrda.",
//           ],
//           correct: 2,
//         },
//         {
//           q: "Davlatning tashqi funksiyalarini aniqlang:",
//           options: [
//             "Soliq yig'ish va huquq ijodkorligi.",
//             "Xalqaro hamkorlik va mudofaa funksiyasi.",
//             "Ekologik nazorat va kadrlar tayyorlash.",
//             "Mahalliy hokimiyat organlarini boshqarish.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Mudofaa funksiyasining ustuvor vazifasi nimadan iborat?",
//           options: [
//             "Davlatning iqtisodiy manfaatlarini boshqa davlatlar hududida yuritish.",
//             "Mustaqillik va hududiy yaxlitlikni himoya qilish, qurolli kuchlarni mustahkamlash.",
//             "Faqatgina qo'shni davlatlar bilan chegaralarni yopish.",
//             "Xalqaro tashkilotlarga a'zo bo'lish.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Davomiylik muddati bo'yicha funksiyalar qaysi turlarga ajratiladi?",
//           options: [
//             "Muhim va nomuhim.",
//             "Doimiy va vaqtinchalik.",
//             "Milliy va xalqaro.",
//             "Siyosiy va huquqiy.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Quyidagilardan qaysi biri davlatning doimiy funksiyasiga misol bo'ladi?",
//           options: [
//             "Favqulodda holat (pandemiya) oqibatlarini tugatish.",
//             "Iqtisodiy, ijtimoiy va huquqiy funksiyalar.",
//             "Inqiroz davridagi vaqtinchalik iqtisodiy cheklovlar.",
//             "Tabiiy ofat hududini tiklash.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Vaqtinchalik funksiyalar qanday holatlarda yuzaga keladi?",
//           options: [
//             "Davlat mavjud bo'lgan butun davr mobaynida.",
//             "Ma'lum bir tarixiy davrda aniq bir vazifani hal qilish uchun (masalan, pandemiya yoki urush).",
//             "Faqatgina saylovlar o'tkazilayotgan paytda.",
//             "Xorijiy davlatlar bilan shartnomalar imzolanganda.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Funksiyalarni amalga oshirishning huquqiy shakllarini ko'rsating:",
//           options: [
//             "Tashkiliy ishlar, kadrlar tayyorlash va rejalashtirish.",
//             "Huquq ijodkorligi, huquqni ijro etish, huquqni muhofaza qilish va shartnomaviy shakl.",
//             "Raqamlashtirish va targ'ibot ishlari.",
//             "Faqatgina sud qarorlarini ijro etish.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Huquqiy bo'lmagan (tashkiliy) shakllarga nimalar kiradi?",
//           options: [
//             "Yangi qonunlar qabul qilish.",
//             "Tashkiliy ishlar, kadrlar tayyorlash, rejalashtirish va raqamlashtirish.",
//             "Sud protsesslarini o'tkazish.",
//             "Xalqaro bitimlarni ratifikatsiya qilish.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Davlat funksiyalarini amalga oshirishning nechta asosiy usuli mavjud?",
//           options: ["2 ta.", "3 ta.", "4 ta.", "5 ta."],
//           correct: 1,
//         },
//         {
//           q: "Ishontirish usuli jamiyatga qanday ta'sir ko'rsatadi?",
//           options: [
//             "Qat'iy jazo choralari bilan qo'rqitish orqali.",
//             "Huquqiy ong va madaniyatni yuksaltirish, tushuntirish ishlari orqali.",
//             "Barcha fuqarolarning mol-mulkini musodara qilish bilan.",
//             "Faqatgina harbiy kuch ishlatish orqali.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Majburlash usulining mohiyati nima?",
//           options: [
//             "Ixtiyoriy ravishda qonunlarga bo'ysunish.",
//             "Huquqbuzarliklar uchun huquqiy sanksiyalar (jazo choralari) qo'llash.",
//             "Ma'naviy rag'batlantirish.",
//             "Aholi bilan ochiq muloqot o'tkazish.",
//           ],
//           correct: 1,
//         },
//         {
//           q: "Zamonaviy dunyoda davlatning qaysi funksiyalari kengayib bormoqda?",
//           options: [
//             "Faqatgina hududlarni kengaytirish (bosqinchilik) funksiyasi.",
//             "Xalqaro hamkorlik, ekologik nazorat va raqamlashtirish funksiyalari.",
//             "Aholini majburiy mehnatga jalb qilish funksiyasi.",
//             "Diniy qarashlarni majburiy singdirish funksiyasi.",
//           ],
//           correct: 1,
//         },
//       ]),
//     },
//      ,
//           "topic8": {
//              title: "8-Mavzu: DAVLAT SHAKLI BO'YICHA TEST SAVOLLARI",
//              questions:

//          }
//   };

// HOLATNI BOSHQARISH
