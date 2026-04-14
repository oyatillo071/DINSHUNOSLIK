// Savollari randomize qiluvchi funksiya
function randomizeQuestions(questions) {
  return questions.map((q) => {
    const correctText = q.options[q.correct];
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffled.indexOf(correctText);

    return {
      ...q,
      options: shuffled,
      correct: newCorrectIndex,
    };
  });
}

// MA'LUMOTLAR BAZASI

const quizDatabase = {
  topic1: {
    title: "1-Bo'lim",
    questions: randomizeQuestions([
 
  {
    "q": "Falsafa nimani o‘rgatadi?",
    "options": [
      "Kishilarda tafakkur qonunlari va talablari asosida dunyoning yaxlit idrok etilishini;",
      "Kishilarda tajribadan o‘tgan bilimlar asosida olam xaqida izchil tasavvurlarni shakllantirishni;",
      "Jamiyatning o‘tmishini umumlashtirish orqali kelajakni oldin tasavvur etishni;",
      "Insonning murakkab ijtimoiy xayotdagi o‘rnini belgilab berishga xizmat qiluvchi qapashlap, fikrlar ta’limotlarning yig‘indisini;"
    ],
    "correct": 0
  },
  {
    "q": "«Falsafa - mustaqil ijtimoiy ong shaklidir» deganda nimani anglashimiz kerak?",
    "options": [
      "dunyoni abstrakt obrazlar orqali in’ikos etganligini;",
      "insoniyat tomonidan to‘plangan ilmiy bilimlar asosida dunyoni idrok etilganligini;",
      "dunyoni mantiq qonunlari va kategoriyalari asosida aks etdiruvchi aloxida bilish bosqichi bo‘lganligini;",
      "xar qanday falsafiy dunyoqarash muayyan manfaatlarga mos kelganligini;"
    ],
    "correct": 2
  },
  {
    "q": "Muayyan siyosiy kuchlar manfaatlariga bo‘ysundirilgan falsafiy dunyoqarash...",
    "options": [
      "eklektikaga aylanadi;",
      "siyosiy ongning bir bosqichiga aylanadi;",
      "muayyan siyosiy kuchlarning maqsadlarini ifoda etuvchi mafkuraga aylanadi;",
      "b va v xollarda;"
    ],
    "correct": 3
  },
  {
    "q": "Falsafiy tafakkur qanday manfaatlarni ifoda etishi zarur?",
    "options": [
      "umuminsoniy;",
      "milliy-mintaqaviy;",
      "sinfiy;",
      "bu yerda 2ta javob togri;"
    ],
    "correct": 3
  },
  {
    "q": "Qadimgi Sharq falsafasining umumiy xususiyati nimadan iborat?",
    "options": [
      "ezgulikka asoslanganligi;",
      "mifologik, diniy, falsafiy, axloqiy, ilmiy bilimlarning yaxlit xolda namoyon bo‘lishi;",
      "ma’naviy omilning xal qiluvchi rolini barcha falsafiy ta’limotlarda e’tirof etilishi;",
      "dunyoni faqat mavxum obrazlar orqali aks ettirilganligida."
    ],
    "correct": 1
  },
  {
    "q": "«Dunyoning ibtidosi xam, intixosi xam - suvdir» degan ta’limot qaerda vujudga kelgan?",
    "options": [
      "Misrda;",
      "Mesopotamiyada;",
      "Qadimgi Rimda;",
      "Qadimgi Yunonistonda."
    ],
    "correct": 3
  },
  {
    "q": "Zardusht ta’limoti va uning vatani qaerda?",
    "options": [
      "Baqtriya;",
      "Sugdiyona;",
      "Margiyona;",
      "Xorazm;",
      "Midiya."
    ],
    "correct": 3
  },
  {
    "q": "Zardusht ta’limoti bo‘yicha dunyoning yaratilishi va xarakatida nechta substansiya mavjud deb qaralgan?",
    "options": [
      "1 ta;",
      "2 ta;",
      "3 yoki undan ortiq;",
      "xech bittasi."
    ],
    "correct": 1
  },
  {
    "q": "«Avesto» ta’limoti bo‘yicha ijtimoiy taraqqiyot va uning mezoni nima deb olingan?",
    "options": [
      "ilm-ma’rifatning rivojlanish darajasi;",
      "ijtimoiy ongning u yoki bu konkret shaklining takomillik darajasi;",
      "buyuk shaxslarning aql idroki va shaxsiy faoliyatlari;",
      "ezgulikka yo‘g‘rilgan axloq normalarga rioya qilish darajasi."
    ],
    "correct": 3
  },
  {
    "q": "«Avesto» ta’limoti bo‘yicha olamning moxiyati nimada?",
    "options": [
      "dunyo - ezgulik va kaboxat kuchlariiing kurash maydonidir;",
      "dunyo - Axuramazda tomonidan yaratilgan qonun va qoidalarga amal qiluvchi narsa va xodisalar majmuasidir;",
      "dunyo - kishilarga sinov uchun ajratilgan vaqt va fazoning birligidir;",
      "dunyo - doimo avj olib so‘nadigan olovdan iboratdir."
    ],
    "correct": 0
  },
  {
    "q": "Falsafa qachon va qayerda fan bulib shakllangan?",
    "options": [
      "er. oldingi 11-ming yillikning 2-yarmida Markaziy Osiyoda;",
      "er. oldingi 11-ming yillik boshlarida Misrda;",
      "er. oldingi VI-V asrlarda, Yunonistonda;",
      "er. oldingi VI-V asrlarda, Xindistonda."
    ],
    "correct": 2
  },
  {
    "q": "Falsafada tabiat «g‘oyalar dunyosining» xosilasi degan ta’limot dastlab kim tomonidan asoslangan?",
    "options": [
      "Zardusht;",
      "Platon;",
      "Demokrit;",
      "Aristotel."
    ],
    "correct": 1
  },
  {

"q": "Qadimgi Yunonistonda materiya xarakati inkor etiladigan falsafiy ta’limotning asoschisi kim?",
    "options": [
      "Pifagor;",
      "Zenon;",
      "Aristarx;",
      "Ptolemey."
    ],
    "correct": 1
  },
  {
    "q": "Deizm falsafasining tub moxiyatini anglatuvchi belgi nimadan iborat?",
    "options": [
      "dunyoning ibtidosi deb «dunyoviy rux»ning e’tirof etilishi;",
      "tabiat moddiy substansiyaning namoyon bo‘lishi deb e’tirof etilishi;",
      "tabiat - «dunyoviy rux»ning xosilasi ekanligini e’tirof etadi, lekin tabiatning keyingi rivojlanishi tabiiy qonunlar orqali ro‘y beradi deb xisoblovchi ta’limot;",
      "tabiat bilan «dunyoviy rux»ning yaxlitligini e’tirof etuvchi falsafiy ta’limot."
    ],
    "correct": 2
  },
  {
    "q": "Qadimgi Yunon falsafasining eng ymymiy va aloxida xususiyati nimada?",
    "options": [
      "falsafaning aloxida ijtimoiy ong bo‘lib shakllanganligida",
      "turli falsafiy oqimlarning shakllanganligida;",
      "«falsafa - fanlarning fani» bo‘lib shakllanganligida;",
      "bu yerda 2ta javob togri."
    ],
    "correct": 3
  },
  {
    "q": "«Aristotel falsafasining o‘ziga xosligi» nimada ko‘rinadi?",
    "options": [
      "uning dualizmida;",
      "metafizik metodida;",
      "uning materializmida;",
      "uning ob’ektiv idealizmida."
    ],
    "correct": 0
  },
  {
    "q": "Qadimgi Yunon falsafasida atomlar nazariyasining asoschisi kim?",
    "options": [
      "Levkipp;",
      "Epikur;",
      "Lukresiy;",
      "Demokrit."
    ],
    "correct": 3
  },
  {
    "q": "Pifagor ta’limoti bo‘yicha «tabiatdan oldin ...»",
    "options": [
      "moddiy substansiya mavjud deb tushunilgan;",
      "geometrik shakllar va matematik sonlar mavjud bo‘lgan;",
      "vaqt va fazo mavjud edi deb tushuniladi;",
      "xar qanday miqdorni inkor etuvchi sonlar mavjudligi e’tirof etiladi."
    ],
    "correct": 1
  },
  {
    "q": "Platon ta’limotidagi ideal jamiyatda davlatni kimlar boshqarishi zarur deyilgan?",
    "options": [
      "buyuk lashkarboshilar;",
      "faylasuflar;",
      "saylanib qo‘yiladigan xalq vakili;",
      "b va v xollarda."
    ],
    "correct": 1
  },
  {
    "q": "Aristotel falsafasidagi «moddiy olam to‘rtta unsurdan tarkib topadi» deganda nimalarni ko‘zda tutgan edi?",
    "options": [
      "yer, quyosh, oy, yulduzlar;",
      "tosh, tuproq, suv, efir;",
      "yer, suv, olov, xavo;",
      "jism, xarakat, fazo, vaqt."
    ],
    "correct": 2

      },
    ]),
  },
  
  topic2: {
    title: "2-Bo'lim:",
    questions: randomizeQuestions([
      {
    "q": "Falsafaning mustaqil ijtimoiy ong shakli bo‘lib shakllanishida xal qiluvchi omil nima?",
    "options": [
      "uning ilmiy ob’ektivligi;",
      "uning dunyoqarash xarakteri;",
      "uning ijtimoiy-tarixiy xarakteri;",
      "uning madaniy-ma’naviy tizimdagi aloxida o‘rni va roli."
    ],
    "correct": 2
  },
  {
    "q": "Eng qadimgi ilk dunyoqarash shakli?",
    "options": [
      "siyosiy va xuquqiy;",
      "diniy va falsafiy;",
      "axloqiy va badiiy;",
      "diniy-mifologik."
    ],
    "correct": 3
  },
  {
    "q": "Inson bilishining umumiy qonuniyatlarini falsafaning qaysi qismi o‘rganadi?",
    "options": [
      "ontologiya;",
      "gnoseologiya;",
      "sotsiologiya;",
      "aksiologiya."
    ],
    "correct": 1
  },
  {
    "q": "Falsafaning nazariy asoslarini nima tashkil etadi?",
    "options": [
      "mantiq;",
      "aksiologiya;",
      "gnoseologiya;",
      "ontologiya."
    ],
    "correct": 3
  },
  {
    "q": "Metodologiya nima?",
    "options": [
      "amaliy faoliyat prinsiplari;",
      "gnoseologiyaning aynan o‘zi;",
      "ilmiy tadqiqot mantig‘i;",
      "bilish uslublari to‘g‘risida ta’limot."
    ],
    "correct": 3
  },
  {
    "q": "Determinizm nima?",
    "options": [
      "eng umumiy sababiy aloqadorliklar tizimini o‘rganuvchi ta’limot;",
      "mavjud narsalarning kelgusini belgilab beruvchi ta’limot;",
      "tasodifning inkor etilishi;",
      "umumaloqadorlikning chuqur aks ettirilishi."
    ],
    "correct": 0
  },
  {
    "q": "Metod bu...",
    "options": [
      "maqsadga yetish uslubi;",
      "bilish quroli (vositasi);",
      "o‘rganilayotgan ob’ektning sub’ekt tafakkurida qayta gavdalanish uslubi;",
      "barcha javoblar to‘g‘ri."
    ],
    "correct": 3
  },
  {
    "q": "Bilishning asoslari va maqsadi nima?",
    "options": [
      "xaqiqatni ro‘yobga chiqarish;",
      "kishilarning amaliy faoliyati;",
      "tabiiy xodisalarni ilmiy bayon qilish;",
      "ilmiy tadqiqotning nazariy asoslari."
    ],
    "correct": 1
  },
  {
    "q": "Sizningcha tabiat va inson manfaatlarining mushtarakligi (birligi) nimalarda namoyon bo‘ladi?",
    "options": [
      "o‘zaro modda almashinuvining nazorat qilinishida;",
      "tabiatning kishilar irodasiga bo‘ysundirilishida;",
      "kishilarning aktiv xayotiy faoliyatlarida;",
      "kishilarning tabiiy resurslarni maqsadga muvofiq tarzda foydalanishida."
    ],
    "correct": 3
  },
  {
    "q": "Germenevtika - bu...",
    "options": [
      "ommaning moxiyati to‘g‘risidagi ta’limot;",
      "xaqiqatni bayon qilish san’ati va nazariyasi;",
      "mantiqiy tafakkur shakllaridan biri;",
      "turli xil falsafiy oqimlarni murosaga keltirish vositasi."
    ],
    "correct": 1
  },
  {
    "q": "Borliq tushunchasining falsafiy mazmuni nima?",
    "options": [
      "ma’naviy reallikning yig‘indisi;",
      "xudoni bilishning aloxida yo‘li;",
      "obyektiv va sub’ektiv reallikning yaxlitligi;",
      "dunyoning ziddiyatli xolati."
    ],
    "correct": 2
  },
  {
    "q": "Umuman borliq bilan aloxida olingan narsa borligining farqi yoki birligi nimada?",
    "options": [
      "birinchi va ikkinchi xolatlarda xam o‘zaro o‘zgarmasdir;",
      "birinchi xolatda o‘zgaruvchan, ikkinchi xolatda o‘zgarmasdir;",
      "birinchi xolatda o‘zgarmas, ikkinchi xolatda o‘zgaruvchandir;",
      "birinchi va ikkinchi xolatlarda xam o‘zgaruvchandir."
    ],
    "correct": 2
  },
  {
    "q": "Borliqning «birinchi tabiati» va borliqning «ikkinchi tabiati» ko‘rinishining o‘zaro farqlari nimada?",
    "options": [
      "birinchi tabiat ko‘rinishi ijtimoiy borliq bilan bog‘liqdir;",
      "ikkinchi tabiat ko‘rinishi ijtimoiy borliq bilan bog‘liqdir;",
      "birinchisi ikkinchisining xosilasidir;",
      "ikkinchisi birinchisining xosilasidir."
    ],
    "correct": 3
  },
  {
    "q": "Substansiya tushunchasi nimani anglatadi?",
    "options": [
      "dunyodagi rang-barang predmet va xodisalarning aloqadorligi, umumyaxlitligini;",
      "narsalarning tarkibini tashkil etuvchi asoslarni;",
"materiyaning namoyon bo‘lishidagi konkret bir ko‘rinishini;",
      "elementar zarrachalarning yig‘indisini."
    ],
    "correct": 0
  },
  {
    "q": "Monistik ta’limotlarning tub moxiyati nimadan iborat?",
    "options": [
      "olamning birligi to‘g‘risidagi qarashlarning to‘g‘riligiga ishonchda;",
      "olamning birligini inkor etuvchi qarashlar;",
      "olamning birligini bir substansiyadan tarkib topadi degan qarashlarda;",
      "olam ikki yoki ko‘p substansiyalardan tarkib topadi degan qarashlarda."
    ],
    "correct": 2
  },
  {
    "q": "Materiyaning yashash usuli deganda nima tushuniladi?",
    "options": [
      "elementar zarrachalarning o‘zaro ta’sirini;",
      "fazo va vaqt;",
      "sukunat;",
      "xarakat."
    ],
    "correct": 3
  },
  {
    "q": "Materiyaning falsafiy tushunchasi va uning asosiy xossasi?",
    "options": [
      "uning moddiyligida;",
      "uning mavjudligida;",
      "uning in’ikos etdirilishida;",
      "uning o‘zaro aloqadorligida."
    ],
    "correct": 1
  },
  {
    "q": "Materiyaning yashash shakli deganda nima tushuniladi?",
    "options": [
      "materiya va ongning birgalikdagina mavjud bo‘lishida;",
      "materiyaning ibtidosi xam, intixosi xam yo‘qligida;",
      "materiyaning vaqt va fazodagina mavjud bo‘lishida;",
      "materiyaning xarakat va sukunatdagina mavjud bo‘lishini."
    ],
    "correct": 2
  },
  {
    "q": "Makrodunyo xodisalari uchun fazo necha o‘lchovlik?",
    "options": [
      "2 o‘lchovlik;",
      "3 o‘lchovlik;",
      "4 o‘lchovlik;",
      "ko‘p o‘lchovlik."
    ],
    "correct": 1
  },
  {
    "q": "Nisbiylik nazariyasi bo‘yicha fazoning to‘rtinchi o‘lchovi nima?",
    "options": [
      "vaqt;",
      "xarakat;",
      "sukunat;",
      "in’ikos."
    ],
    "correct": 0
 
      },
    ]),
  },
  
 /////////////////////////////////////////////////////
  topic3: {
    title: "3-Bo'lim:",
    questions: randomizeQuestions([
   
  {
    "q": "Ijtimoiy muxitda tabiiy qonunlar xukm suradi deb xisoblaydigan falsafiy oqim?",
    "options": [
      "deizm;",
      "naturfilosofiya;",
      "panteizm;",
      "neorealizm."
    ],
    "correct": 1
  },
  {
    "q": "Ijtimoiy taraqqiyot va uning mezoni to‘g‘risida K.Marks ta’limotining asosiy kamchiligi nimadan iborat?",
    "options": [
      "sinflar o‘rtasidagi ziddiyatni kelishtirib bo‘lmaydigan antogonistik xarakterga ega deb qarashlarida;",
      "ishlab chiqaruvchi kuchlarning xarakatlantiruvchi manbasi mexnat kurollarining ishlab chiqarish jarayonida stixiyali takomillashishida deb tushunganligida;",
      "mexnat qurollarini takomillashtirishda xal qiluvchi kuch fan ekanligini e’tirof etmaganligida;",
      "a, b va v xollarda."
    ],
    "correct": 3
  },
  {
    "q": "Ijtimoiy voqelikni bilishning aloxida xususiyati nimada?",
    "options": [
      "tadqiqotchi sub’ekt - umuminsoniy manfaatlarni ifoda qiluvchi bo‘lib qatnashishida;",
      "sub’ekt - umuminsoniyat nomidan qatnasha olmasligida;",
      "ijtimoiy xodisalarni o‘rganishda milliy, sinfiy, mintaqaviy, diniy manfaatlarning ustuvorligida;",
      "b va v xollarda."
    ],
    "correct": 3
  },
  {
    "q": "Ijtimoiy falsafa nimani o‘rganadi?",
    "options": [
      "jamiyat taraqqiyotining xarakatlantiruvchi kuchlari va qonuniyatlarini;",
      "sotsial tuzumning funksiyasi va rivojlanish qonuniyatlarini;",
      "jamiyatdagi muxim ijtimoiy xodisalarning o‘zaro aloqalarini;",
      "a, b va v xollarda."
    ],
    "correct": 3
  },
  {
    "q": "Ijtimoiy munosabatlar tushunchasining mazmuni nima?",
    "options": [
      "ommaning kayfiyatlari, maqsadlarini aks ettiruvchi tushuncha;",
      "barcha ma’naviy munosabatlarning majmuasi;",
      "kishilarning moddiy va ma’naviy faoliyatlarini o‘zida aks etdiruvchi munosabatlar;",
      "moddiy va ma’naviy munosabatlarni aks etdiruvchi murakkab jarayon."
    ],
    "correct": 3
  },
  {
    "q": "Jamiyatning tabiatdan farq qilishiga sabab bo‘luvchi eng asosiy omil nimada?",
    "options": [
      "ijtimoiy taraqqiyotning o‘ta noyobligida;",
      "ijtimoiy qonunlar asosida rivojlanishida;",
      "tabiiy qonunlardan mustaqil bo‘lganligida;",
      "tabiatdan tashqari kuchlarning irodasi bilan rivojlanishida."
    ],
    "correct": 1
  },
  {
    "q": "Jamiyatning ijtimoiy strukturasini aniqlang?",
    "options": [
      "sotsial sinflar, ijtimoiy guruxlar;",
      "siyosiy partiyalar, ijtimoiy tashkilotlar;",
      "kishilarning tarixiy birliklari: urug‘, qabila, elat, millat;",
      "davlat va siyosiy xamda iqtisodiy sistemalar."
    ],
    "correct": 0
  },
  {
    "q": "Aksiologiya nima?",
    "options": [
      "inson bilishining umumiy qonuniyatlarini o‘rganuvchi falsafaning bir bo‘lagi;",
      "ijtimoiy taraqqiyot qonuniyatlarini o‘rganuvchi falsafaning bir qismi;",
      "falsafaning qadriyatlar soxasini o‘rganuvchi soxasi;",
      "falsafaning sinflar va siyosiy partiyalarning o‘zaro aloqadorligini o‘rganuvchi soxasi."
    ],
    "correct": 2
  },
  {
    "q": "«Ijtimoiy borliq» tushunchasi nimani anglatadi?",
    "options": [
      "ishlab chiqarish munosabatlari yig‘indisi;",
      "kishilar o‘rtasida shakllangan o‘zaro aloqadorliklar tizimi;",
      "ijtimoiy sinflar va tabaqalar yig‘indisi;",
      "ijtimoiy taraqqiyotning muayyan bosqichidagi kishilar o‘rtasidagi barcha ijtimoiy munosabatlar majmyaci."
    ],
    "correct": 3
  },
  {
    "q": "Davlat nima?",
    "options": [
      "ijtimoiy tizimning asosiy elementi;",
      "ijtimoiy muxitga o‘ta faol ta’sir o‘tkazuvchi siyosiy tashkilot;",
      "qonun chiqaruvchi xokimiyat tomonidan qabul qilingan farmon va qonunlarni xayotga joriy qiluvchi tizim;",
      "xukumat darajasidagi jamiyatni boshqaruvchi organ."
    ],
    "correct": 1
  },
  {
    "q": "Siyosiy ong nima?",
    "options": [
      "millatlar, ijtimoiy sinflar va tabaqalar, jamiyat va shaxs o‘rtasidagi munosabatlarning kishilar ongida aks etishi;",
      "muayyan jamiyat a’zolarining ongida kishilar o‘rtasidagi siyosiy munosabatlarning aks etishi;",

"ijtimoiy muxitning kundalik ong darajasidagi aks etdirilishi;",
      "«a» va «b» xollarda."
    ],
    "correct": 3
  },
  {
    "q": "Siyosiy ongning quyi bosqichi nima?",
    "options": [
      "o‘qimishli bo‘lmagan odamning ongida ijtimoiy munosabatlarning aks etilish darajasi;",
      "ijtimoiy munosabatlarning kishilarning kundalik ongi darajasida aks ettirilishi;",
      "ijtimoiy munosabatlarning kishilar ongida xissiy bilish darajasida aks etilishi;",
      "«a» va «v» xollarda."
    ],
    "correct": 1
  },
  {
    "q": "Siyosiy ongning yuqori bosqichi nima?",
    "options": [
      "barcha ijtimoiy munosabatlarning abstrakt tafakkur darajasidagi kishilar ongida aks etilishi;",
      "barcha ijtimoiy munosabatlarning muayyan manfaatlar doirasida sistemali aks etdirilishi;",
      "davlat organlari tomonidan barcha ijtimoiy munosabatlarning taxlil qilinishi va muayyan siyosiy xulosalarga kelinishi;",
      "«a» va «b» xollarda."
    ],
    "correct": 3
  },
  {
    "q": "Huquq nima?",
    "options": [
      "jamiyatda shaxs erkinligini ta’minlovchi tadbirlar;",
      "kishilarning jamiyatda o‘z o‘rinlarini aniq belgilab olish uchun belgilab qo‘yilgan xatti-xarakatlar normasi;",
      "kishilar o‘rtasidagi munosabatlarni tartibga solish uchun siyosiy xokimiyat tomonidan belgilangan zaruriy xatti-xarakatlar dasturi;",
      "xukmron siyosiy kuchlarning qonun darajasiga ko‘tarilgan irodasi."
    ],
    "correct": 2
  },
  {
    "q": "Huquqiy munosabatlar nima?",
    "options": [
      "jamiyat a’zolariga xukmron siyosiy kuchlar manfaatlari va irodasiga zid bo‘lmagan, ruxsat etilgan xatti-xarakatlar majmuasi;",
      "xukmron siyosiy kuchlar tomonidan ruxsat etilgan xatti-xarakatlar majmuasi;",
      "jamiyatning erkin fuqarosi bo‘lishi va xayot kechirishi uchun zarur bo‘lgan xokimiyat tomonidan ruxsat etilgan daxlsiz xatti-xarakatlar doirasi;",
      "a, b va v xollarda."
    ],
    "correct": 3
  },
  {
    "q": "Huquqiy davlat nima?",
    "options": [
      "muayyan ijtimoiy sinflar yoki tabaqalar irodasining qonun darajasiga ko‘tarilishi;",
      "qonun ustuvorligi ta’minlangan jamiyat;",
      "shaxs erkinligini qonunlar dengan chegaralab qo‘yadigan jamiyat;",
      "bu yerda 2ta javob togri."
    ],
    "correct": 1
  },
  {
    "q": "Huquqiy ong qachon paydo bo‘lgan?",
    "options": [
      "jamiyatda siyosiy munosabatlar shakllangan davrda;",
      "jamiyatda chuqur ijtimoiy mexnat taqsimoti amalga oshgan paytda;",
      "jamiyatda xukmron sinflar va tabaqalar shakllangan davrda;",
      "a, b va v xollarda."
    ],
    "correct": 0
  },
  {
    "q": "Jamiyat taraqqiyotining qaysi bosqichida kishilarda axloq normalari shakllangan?",
    "options": [
      "kishilik jamiyatining ilk bosqichlarida;",
      "eng qadimgi va qadimgi davrlarda;",
      "dunyoviy dinlar vujudga kelgandan keyin;",
      "ibtidoiy davrning o‘rta va so‘nggi davrlarida."
    ],
    "correct": 3
  },
  {
    "q": "Axloqiy ong qachon paydo bo‘lgan?",
    "options": [
      "kishilik jamiyatining ilk bosqichlarida;",
      "aqliy va jismoniy mexnat ajralib chiqqandan so‘ng;",
      "dunyoviy dinlar vujudga kelgandan so‘ng;",
      "ibtidoiy davrning o‘rta va so‘nggi bosqichlarida."
    ],
    "correct": 3
  },
  {
    "q": "Axloq nima?",
    "options": [
      "ijtimoiy muxit talabi va extiyojlari asosida shakllangan kishilarning xatti-xarakatlari va o‘zaro munosabat normalari;",
      "mifologik dunyoqarash asosida vujudga kelgan urf-odat va rasm-rusmlar;",
      "jaxon dinlarining vujudga kelishi bilan shakllangan e’tiqod va ibodat qilish usullari;",
      "diniy tasavvurlar orqali shakllangan kishilarning iloxiy qudrat va o‘zaro munosabatlarini takomillashtirish uchun zarur bo‘lgan qoidalar."
    ],
    "correct": 0

        },
    ]),
  },


  
 ///////////////
  
topic4: {
    title: "4-Bo'lim:",
    questions: randomizeQuestions([
 
  {
    "q": "«Falsafiy ong» ijtimoiy ongning aloxida shakli sifatida nimalarni o‘zida aks ettiradi?",
    "options": [
      "kishilar ongida ijtimoiy munosabatlarning in’ikos etilish shakllarini;",
      "mavjud siyosiy munosabatlarning kishilarning kundalik ong darajasida aks etilishini;",
      "insonunng tashqi olam predmet va xodisalarga bo‘lgan munosabatlarning kishilar ongida yaxlit xolda aks ettirilishini;",
      "«a» va «b» xollarda."
    ],
    "correct": 2
  },
  {
    "q": "«Madaniyat» tushunchasi nimani anglatadi?",
    "options": [
      "kishilar tomonidan yaratilgan ma’naviy qadriyatlar;",
      "kishilar tomonidan yaratilgan moddiy ne’matlar yig‘indicini;",
      "kishilar tomonidan shakllantirilgan axloq normalari, xulk-atvorlar majmuasini;",
      "kishilar tomonidan ishlab chiqilgan, yaratilgan moddiy va ma’naviy boyliklarni."
    ],
    "correct": 3
  },
  {
    "q": "Kishilarning ma’lum xudud va davrdagi moddiy xamda ma’naviy madaniyatini to‘laroq aks etdiruvchi falsafiy tushunchani toping.",
    "options": [
      "tarixiy davr;",
      "kishilarning tarixiy birliklari;",
      "sivilizatsiya;",
      "etnik birlik."
    ],
    "correct": 2
  },
  {
    "q": "«Madaniyat» tushunchasining eng muxim belgilaridan birini toping?",
    "options": [
      "uning ikkiyoqlamaligi, ikki xil sifatga ega bo‘lishi;",
      "uning ijtimoiy ongning aloxida shakli ekanligi;",
      "uning konservativ xarakterga egaligi;",
      "uning diniy tasavvurlar bilan chambarchas bog‘liqligi."
    ],
    "correct": 0
  },
  {
    "q": "Ijtimoiy taraqqiyot va uning mezoni deganda Zardusht ta’limotida nima asos qilib olingan?",
    "options": [
      "diniy ibodatga amal qilish darajasi;",
      "ezgulik va qaboxat kuchlari o‘rtasidagi ziddiyat;",
      "dunyoni anglash darajasi;",
      "axloq normalariga amal qilish darajasi."
    ],
    "correct": 3
  },
  {
    "q": "Qadimgi yunon mutafakkirlari ijtimoiy xayot yo‘nalishini qanday tushungan?",
    "options": [
      "yuqoridan pastga tobora tubanlashish jarayoni sifatida;",
      "bir tekis gorizontal chiziq bo‘yicha xarakat qiluvchi ijtimoiy xodisa sifatida;",
      "pastdan yuqoriga, oddiydan-murakkablik tomon doimo takomillashishda;",
      "xar qanday xarakat inkor etiladi."
    ],
    "correct": 0
  },
  {
    "q": "XVII-XVIII acp fransuz mutafakkirlari ijtimoiy taraqqiyot mezoni deb nimani tushunganlar?",
    "options": [
      "diniy tasavvurlar;",
      "ilm - ma’rifat;",
      "falsafiy dunyoqarash;",
      "jangovor «xur fikrlilik»."
    ],
    "correct": 1
  },
  {
    "q": "Buyuk nemis klassik faylasufi Gegel ijtimoiy taraqqiyotni xarakatlantiruvchi kuch deb nima tushungan?",
    "options": [
      "ilg‘or falsafiy ta’limot;",
      "gumanizm ruxidagi diniy e’tiqod;",
      "fuqarolarning ma’rifatlilik darajasi;",
      "tabiiy fanlar, birinchi navbatda matematika."
    ],
    "correct": 0
  },
  {
    "q": "Buyuk nemis klassik faylasufi L.Feyerbax ta’limoti bo‘yicha ijtimoiy taraqqiyot mezoni deb nima tushunilgan?",
    "options": [
      "falsafiy ong;",
      "ilmiy ong;",
      "diniy ong;",
      "siyosiy ong."
    ],
    "correct": 2
  },
  {
    "q": "«Davlat - xamma narsa, shaxs - xech narsa» tamoyiliga asoslanuvchi ta’limot.",
    "options": [
      "nigilizm;",
      "volyuntarizm;",
      "pragmatizm;",
      "pozitivizm."
    ],
    "correct": 1
  },
  {
    "q": "Shaxs deb nimaga aytiladi?",
    "options": [
      "shaxs - bu xar qanday aloxida olingan kishi;",
      "shaxs - bu boshqalarni o‘ziga bo‘ysundira oladigan kishi;",
      "shaxs - barcha ijtimoiy munosabatlar majmuasi;",
      "shaxs - bu o‘ta qobiliyatli, bilimli va ziyoli odam."
    ],
    "correct": 2
  },
  {
    "q": "Shaxs erkinligi nima?",
    "options": [
      "o‘zining konstitutsion xuquqlarini anglash;",
      "kishining ichki dunyosi;",
      "kishi faoliyati uchun cheklanmagan imkoniyat;",
      "kishilar tomonidan anglab olingan zarurat."
    ],
    "correct": 3
  },
  {
    "q": "Davrimizning jaxonshumul (global) muammolari tushunchasi nimani anglatadi?",

"options": [
      "insoniyatning barcha qatlamlari va xalqlari ishtirokidagina xal etish mumkin bo‘lgan muammolar;",
      "ikki yoki undan ortiq mamlakat yoki xalqlar doirasida vujudga kelgan muammolar;",
      "ko‘lami jixatdan butun yer yuzi axolisining ko‘pchiligiga taalluqli bo‘lgan muammolar;",
      "a, b va v xollarda."
    ],
    "correct": 0
  },
  {
    "q": "Davrimizning jaxonshumul muammolari va uning kelib chiqish sabablari deganda:",
    "options": [
      "militaristik ruxning avj olishi, qurollanish poygasining tobora zo‘rayib borishi;",
      "ITTda sinfiy va milliy manfaatlar yo‘lida foydalanishga asosiy e’tiborning qaratilishi;",
      "markazlashgan ma’muriy buyruqbozlik sistemasining mavjudligi;",
      "XX acp «Demografik portlash» asri bo‘lganligi;",
      "b, v va g xollarda."
    ],
    "correct": 4
  },
  {
    "q": "Jahonshumul muammolar qanday turkumlashtiriladi?",
    "options": [
      "milliy, sinfiy, umuminsoniyat miqyosda;",
      "juz’iy, mintaqaviy, umumbashariy miqyosda;",
      "diniy, madaniy, ilmiy tafakkur doirasida;",
      "rivojlangan, o‘rtacha va kam taraqqiy etgan mamlakatlar doirasida."
    ],
    "correct": 1
  },
  {
    "q": "Jahonshumul muammolarning kelib chiqishida ijtimoiy omillari tushunchasi va uning mazmuni.",
    "options": [
      "ijtimoiy xodisalarni bilishda ob’ekt-sub’ekt munosabatlaridagi o‘ziga xoslik;",
      "tabiiy va ijtimoiy xodisalarning o‘zaro munosabatlarini yangicha talqin etilishi;",
      "ITTning so‘nggi yutuqlari asosida xodisalarga yangicha qarashlarning shakllanishi;",
      "barcha ijtimoiy munosabatlarni tushunishda siyosiy manfaatlar ustuvorligining e’tirof etilishi."
    ],
    "correct": 3
  },
  {
    "q": "«Yangicha siyosiy tafakkur» deganda...",
    "options": [
      "barcha siyosiy va ijtimoiy xodisalarga sinfiy nuqtai nazardan yondashish;",
      "ijtimoiy munosabatlarga milliy manfaat nuqtai nazaridan yondashish;",
      "ijtimoiy xodisalarga yondashilganda umuminsoniy manfaatlar ustuvorligining e’tirof etilishi;",
      "ijtimoiy xodisalarga yondashilganda milliy va umuminsoniy manfaatlar ustuvorligining e’tirof etilishi."
    ],
    "correct": 2
  },
  {
    "q": "«Urush» atamasining mazmuni nimadan iborat?",
    "options": [
      "urushlar - ijtimoiy ziddiyatlarni bartaraf etishning yagona vositasidir;",
      "siyosiy kuchlar o‘rtasidagi ziddiyatni muvozanatga solib turuvchi xarakatlantiruvchi kuchdir;",
      "urushlar - inkor etiluvchi bilan inkor etuvchi o‘rtasidagi kurashning ochiq shaklidir;",
      "urushlar - siyosiy kuchlar o‘rtasidagi munosabatlarning qurol vositasi orqali davom etdirilishidir."
    ],
    "correct": 3
  },
  {
    "q": "Mamlakatlar o‘rtasidagi iqtisodiy ko‘rsatkichning asosiy mezoni nimada?",
    "options": [
      "yalpi milliy maxsulot mikdorining axoli jon boshiga taqsimotida;",
      "industrlashtirish darajasida;",
      "urbanizatsiya (shaxarlashish) darajasida;",
      "ilm-fan ravnaqi darajasida."
    ],
    "correct": 0
  },
  {
    "q": "«Demografik portlash» xodisasi nimani anglatadi?",
    "options": [
      "tarixan qisqa bir muddat ichida xalqlarning zulmdan ozod bo‘lishi;",
      "tarixan qiska bir davr ichida siyosiy inqirozning yuzaga chiqishi;",
      "tarixan qisqa bir davr ichida axoli miqdorining tabiiy o‘sish xisobiga bir necha barobar ko‘payishi;",
      "tarixan qisqa bir muddat ichida insoniyatning jipslashuvi."
    ],
    "correct": 2

        },
    ]),
  },

  
  /*
  topic7: {
    title: "7-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "Din inson axloqini shakllantirishda qanday fundamental vazifani amalga oshiradi?",
        options: [
          "Insonni faqatgina jamiyat qonunlariga jismonan bo'ysundirish va jazo choralaridan qo'rqitish orqali tartibga soladi.",
          "Halollik, ota-onaga hurmat va saxovat kabi xislatlarni dindorlikning ajralmas qismi va ma'naviy burch sifatida uqtiradi.",
          "Insonni barcha dunyoviy orzu-havaslardan voz kechishga va faqatgina tarkidunyo qilish orqali poklanishga chaqiradi.",
          "Axloqiy me'yorlarni faqat diniy marosimlar doirasida saqlashni va ijtimoiy hayotda ularga rioya qilmaslikni targ'ib qiladi.",
        ],
        correct: 1,
      },
      {
        q: "Din ijtimoiy barqarorlikni ta’minlashda qanday ma’naviy ahamiyatga ega?",
        options: [
          "Odamlarni faqat bir xil e'tiqod atrofida birlashtirib, boshqa din vakillariga nisbatan ijtimoiy masofa saqlashga undaydi.",
          "Davlat boshqaruvining barcha sohalarini diniy qoidalar asosida nazorat qilish orqali jamiyatda tartib o'rnatadi.",
          "Insonlarni bir-biriga rahm-shafqatli bo‘lishga va mavjud qonun-qoidalarga ma’naviy mas'uliyat bilan rioya qilishga undaydi.",
          "Jamiyatdagi ijtimoiy tengsizlikni din orqali qonuniylashtiradi va insonlarni bunga hech qanday qarshiliksiz ko'nishga chorlaydi.",
        ],
        correct: 2,
      },
      {
        q: "Din va ma’naviyat o‘rtasidagi uzviy bog‘liqlik qaysi javobda to‘g‘ri ifodalangan?",
        options: [
          "Ma'naviyat va din bir-biridan mustaqil sohalar bo'lib, insonning ichki olamiga turlicha ta'sir ko'rsatadigan tizimlardir.",
          "Ma’naviyat insonning ichki dunyosi bo‘lsa, din bu dunyoni boyituvchi va unga aniq yo‘nalish beruvchi asosiy manbadir.",
          "Din faqatgina tashqi marosimlardan iborat tizimdir, ma'naviyat esa faqatgina dunyoviy bilimlar asosida shakllanadigan tushunchadir.",
          "Ma'naviyat dinning o'rnini bosuvchi zamonaviy tushuncha bo'lib, bugungi kunda dinning ahamiyatini pasaytirishga xizmat qiladi.",
        ],
        correct: 1,
      },
      {
        q: "Diniy qadriyatlarni yosh avlodga yetkazishning eng samarali va zamonaviy usuli qaysi?",
        options: [
          "Faqatgina diniy matnlarni majburiy yodlatish va ularni ijtimoiy hayotdan ajratgan holda o'rgatish.",
          "Shaxsiy namuna, interaktiv darslar va zamonaviy media-kontentlar orqali qadriyatlarni tushuntirish.",
          "Yoshlarni axborot texnologiyalaridan uzoqlashtirgan holda faqat an'anaviy maktablarda ta'lim berish.",
          "Diniy qarashlarni faqat oilaviy muhit bilan cheklab, ijtimoiy institutlarning bu jarayondagi rolini inkor etish.",
        ],
        correct: 1,
      },
      {
        q: "Ma’rifat va diniy bilim o‘rtasidagi o'zaro nisbatni qanday tushunish kerak?",
        options: [
          "Diniy bilim bu ma'rifatning bir qismi bo'lib, ular orasida hech qanday farq yoki o'ziga xos xususiyat mavjud emas.",
          "Diniy bilim — hukmlarni bilish, ma’rifat esa bilim asosida insonning qalban va aqlan yuksalib, dunyoni chuqur anglashidir.",
          "Ma'rifat faqat dunyoviy fanlarni o'rganishni, diniy bilim esa faqat ibodat qoidalarini yod olishni anglatadi.",
          "Diniy bilim ma'rifatdan ko'ra ustunroq bo'lib, insonning intellektual salohiyatiga hech qanday bog'liqligi yo'qdir.",
        ],
        correct: 1,
      },
      {
        q: "Diniy bilimning noto‘g‘ri talqin qilinishi jamiyatda qanday xavfli tendensiyalarni keltirib chiqaradi?",
        options: [
          "Jamiyatda ilmiy tadqiqotlarning ko'payishiga va dinlararo muloqotning yanada mustahkamlanishiga olib keladi.",
          "Mutaassiblik, odamlarni guruhlarga ajratish va ijtimoiy barqarorlikka raxna soluvchi to‘qnashuvlarga zamin yaratadi.",
          "Insonlarning shaxsiy erkinliklarini oshiradi va ularning dindagi turli oqimlarni mustaqil tanlashiga yordam beradi.",
          "Diniy tashkilotlarning iqtisodiy qudratini oshiradi va ularning davlat bilan hamkorligini kuchaytiradi.",
        ],
        correct: 1,
      },
      {
        q: "Globallashuv sharoitida dinshunoslik fanining o‘rganilishi nima uchun dolzarb hisoblanadi?",
        options: [
          "Yangi paydo bo'layotgan diniy oqimlarning moliyaviy manbalarini aniqlash va ularni soliqqa tortish uchun.",
          "Turli g‘oyalar oqimida to‘g‘ri yo‘lni tanlash, dinlar tarixini bilish va mafkuraviy xurujlardan himoyalanish uchun.",
          "Barcha dinlarni yagona bir qolipga solish va dunyo miqyosida yagona diniy boshqaruvni joriy etish uchun.",
          "Dinning jamiyatdagi rolini pasaytirish va aholini faqatgina texnologik yangiliklarga yo'naltirish uchun.",
        ],
        correct: 1,
      },
      {
        q: "Dinshunoslik fanining asosiy vazifasi qaysi javobda xolis ko'rsatilgan?",
        options: [
          "Muayyan bir dinning boshqa dinlardan ustun ekanligini ilmiy va nazariy jihatdan isbotlab berish.",
          "Dinlarning kelib chiqishi, rivojlanishi va jamiyatdagi o‘rnini xolis ilmiy hamda tarixiy asosda o‘rganish.",
          "Diniy marosimlarni o'tkazish tartibini belgilash va diniy xizmatchilarning faoliyatini nazorat qilish.",
          "Faqatgina muqaddas kitoblardagi mo''jizalarni ilmiy nuqtai nazardan tahlil qilish va ularni isbotlash.",
        ],
        correct: 1,
      },
      {
        q: "Dinshunoslik fanini o‘rganishdan ko‘zlangan yakuniy strategik maqsad nima?",
        options: [
          "Dunyoviy va diniy dunyoqarashlar muvozanatini saqlash hamda diniy bag‘rikenglik madaniyatini yuksaltirish.",
          "Jamiyatni butunlay dindan uzoqlashtirish va faqatgina ateistik dunyoqarashni shakllantirish.",
          "Barcha diniy nizolarni harbiy yo'l bilan hal qilish uchun nazariy tavsiyalar ishlab chiqish.",
          "Diniy tashkilotlar o'rtasida raqobatni kuchaytirish va ularning siyosiy nufuzini oshirish.",
        ],
        correct: 0,
      },
      {
        q: "“Fiqh” so‘zining lug‘aviy ma’nosi qaysi javobda to‘g‘ri bayon etilgan?",
        options: [
          "Biror narsani shunchaki yod olish va uni o'zgarishsiz qabul qilish.",
          "Bir narsani yoki hodisani chuqur anglash, mohiyatiga yetib tushunish.",
          "Diniy hukmlarni jamlash va ularni kitob holiga keltirish jarayoni.",
          "Faqat ibodat masalalarida kishilarga ko'rsatma berish va fatvo chiqarish.",
        ],
        correct: 1,
      },
      {
        q: "Islom olamidagi to‘rtta mashhur fiqhiy mazhabning to‘g‘ri tartibini aniqlang:",
        options: [
          "Hanafiy, Molikiy, Shofeiy va Hanbaliy mazhablari.",
          "Hanafiy, Moturidiy, Ash'ariy va Hanbaliy maktablari.",
          "Hanafiy, Shofeiy, So'fiylik va Hanbaliy yo'nalishlari.",
          "Hanafiy, Ja'fariy, Molikiy va Zaydiy mazhablari.",
        ],
        correct: 0,
      },
      {
        q: "Imom Molik ibn Anas nima sababdan islom olamida “Madina imomi” degan sharafli nomga ega bo'lgan?",
        options: [
          "Chunki u Madina shahrining hokimi bo'lgan va barcha diniy islohotlarni boshqargan.",
          "Deyarli butun umrini Madinada o‘tkazgani va Madina ahlining amallarini sunnat asosi deb bilgani uchun.",
          "Faqatgina Madina shahridagi odamlar uchun fatvo berish huquqiga ega bo'lganligi sababli.",
          "U asos solgan mazhab faqat Madina shahri doirasidagina amal qilgani va boshqa joyga tarqalmagani uchun.",
        ],
        correct: 1,
      },
      {
        q: "Imom Molikning “Al-Muvatto” asari islom huquqshunosligida qanday ahamiyatga ega?",
        options: [
          "U faqatgina Madina shahri tarixi va u yerdagi qabilalar haqida ma'lumot beruvchi geografik asardir.",
          "Bu asar islom olamidagi birinchi hadis va fiqhni o'zida jamlagan tizimli manbalardan biri hisoblanadi.",
          "Asar faqatgina tasavvufiy qarashlarni o'z ichiga olgan va huquqiy masalalarga daxli yo'qdir.",
          "Bu kitob Imom Molikning shaxsiy hayoti va u kishining ustozlari haqidagi xotiralardan iboratdir.",
        ],
        correct: 1,
      },
      {
        q: "Imom Shofeiyning fiqhiy qarashlari shakllanishida qaysi ikki maktabning ta’siri kuchli bo'lgan?",
        options: [
          "Faqatgina Makka va Qohira fiqhiy maktablarining ta'siri ostida shakllangan.",
          "Hijoz (Molikiy) va Iroq (Hanafiy) fiqhiy maktablarining bilimlarini o'zida mujassam etgan.",
          "Hindiston va Markaziy Osiyo hududidagi qadimiy huquqiy tizimlarning ta'sirida bo'lgan.",
          "Andalus va Shimoliy Afrika hududidagi mahalliy an'analarga asoslangan maktablardan ta'lim olgan.",
        ],
        correct: 1,
      },
      {
        q: "Hanbaliy mazhabida huquqiy hukm chiqarishda qaysi manbalarga asosiy e'tibor qaratiladi?",
        options: [
          "Faqatgina olimlarning o'zaro ittifoqi (ijmo) va mantiqiy qiyosga (ray).",
          "Qur’on, Sunnat, sahobalarning fatvolari va mursal hadislarga.",
          "Mahalliy urf-odatlar va jamiyatdagi mavjud dunyoviy qonunlarga.",
          "Faqatgina Imom Ahmad ibn Hanbalning shaxsiy asarlari va tavsiyalariga.",
        ],
        correct: 1,
      },
      {
        q: "Imom Shofeiyning “Ar-Risola” asari islom ilm-fanida qanday yangilik yaratgan?",
        options: [
          "Ushbu asar bilan islom huquqshunosligi metodologiyasi — 'Usulul fiqh' faniga asos solingan.",
          "Asar faqatgina ibodatning qoidalari haqidagi savol-javoblar to'plamidan iboratdir.",
          "Ushbu kitobda faqatgina tilshunoslik va arab tili grammatikasi masalalari yoritilgan.",
          "Bu asar islom dinidagi barcha mazhablarni bitta umumiy tizimga birlashtirishni taklif etgan.",
        ],
        correct: 0,
      },
      {
        q: "Imom Ahmad ibn Hanbalning dindorlar o'rtasidagi nufuzi nima bilan izohlanadi?",
        options: [
          "U kishining juda katta boylikka ega bo'lgani va xayriya ishlarini o'tkazgani bilan.",
          "Aqida masalalaridagi mustahkamligi, hadislarni mukammal bilishi va zohidona hayoti bilan.",
          "Faqatgina davlat arboblari bilan yaqin aloqada bo'lganligi va siyosiy faolligi bilan.",
          "Yangi dinni targ'ib qilgani va an'anaviy qarashlarni butunlay rad etgani bilan.",
        ],
        correct: 1,
      },
      {
        q: "To'rtta fiqhiy mazhab o'rtasidagi farqlarga qanday munosabatda bo'lish to'g'ri hisoblanadi?",
        options: [
          "Bu farqlarni bir-birini inkor etuvchi qarama-qarshiliklar va xato deb baholash kerak.",
          "Ularni islom huquqining keng imkoniyatlari, ma'naviy boyligi va 'rahmat' deb qabul qilish kerak.",
          "Faqatgina bitta mazhabni to'g'ri deb bilib, qolganlarini asossiz deb rad etish kerak.",
          "Mazhablar o'rtasidagi farqlarni yo'qotish uchun ularning barchasidan voz kechish kerak.",
        ],
        correct: 1,
      },
      {
        q: "Fiqh va huquqshunoslik o‘rtasidagi o'zaro aloqadorlik qaysi javobda to'g'ri ko'rsatilgan?",
        options: [
          "Fiqh faqatgina axloqiy maslahatlardir, huquqshunoslik esa faqat davlat qonunlaridir.",
          "Fiqh — shariat amallarini batafsil o'rganuvchi soha bo'lib, islom huquqshunosligining asosi hisoblanadi.",
          "Bu ikkala tushuncha bir-birini mutlaqo inkor etuvchi va turlicha metodlarga tayanuvchi sohalardir.",
          "Fiqh faqat o'tmishda qolib ketgan tizim bo'lib, zamonaviy huquqshunoslikda uning o'rni yo'qdir.",
        ],
        correct: 1,
      },
      {
        q: "Imom Shofeiy nima uchun 'Sunnatni himoya qiluvchi' (Nosirush-sunna) deb atalgan?",
        options: [
          "Faqatgina hadislarni yig'ish bilan shug'ullangani va ularni tahrir qilgani uchun.",
          "Hadislarning islom huquqidagi o'rnini mustahkamlab, ularni fiqhiy hukmlarga asos qilib bergani uchun.",
          "Faqatgina hadis aytuvchi roviylar hayotini o'rgangani va ularni tartiblashtirgani uchun.",
          "U kishi hadislarni davlat qonunlari darajasiga ko'tarish haqida maxsus farmon bergani uchun.",
        ],
        correct: 1,
      },

      {
        q: "Muhammad ibn Ali Qaffol Shoshiyning islom huquqshunosligi tarixidagi o'rni qaysi javobda to'g'ri ko'rsatilgan?",
        options: [
          "U kishi Hanafiy mazhabining yirik vakili bo'lib, Movarounnahrda ushbu mazhabni tizimlashtirgan.",
          "Toshkentlik buyuk alloma bo'lib, Shofeiy mazhabiga mansub bo'lgan va fiqh usulini rivojlantirgan.",
          "Markaziy Osiyoda birinchi bo'lib mazhabsizlik g'oyasiga asos solgan va erkin ijtihodni targ'ib qilgan.",
          "Faqatgina hadis ilmi bilan shug'ullangan va to'rtta fiqhiy mazhabga ham aloqador bo'lmagan olim.",
        ],
        correct: 1,
      },
      {
        q: "Fiqhiy mazhablarning bir-biriga nisbatan munosabatidagi asosiy tamoyil qaysi variantda to'g'ri ifodalangan?",
        options: [
          "Faqatgina o'z mazhabining mutloq to'g'riligini va boshqa barcha qarashlarning dindan chiqish ekanligini ta'kidlash.",
          "O'z mazhabini 'to'g'ri, ammo xato ehtimoli bor', boshqalarnikini 'xato, ammo to'g'ri ehtimoli bor' deb e'tirof etish.",
          "Barcha mazhablar o'rtasidagi farqlarni yo'qotib, ularni yagona bir huquqiy tizimga birlashtirishga intilish.",
          "Boshqa mazhablarning hukmlarini o'rganishni man etish va faqat o'z imomining fatvolariga so'zsiz ergashish.",
        ],
        correct: 1,
      },
      {
        q: "Musulmon jamiyatida 'mazhabsizlik' g'oyasining tarqalishi qanday salbiy oqibatlarga zamin yaratadi?",
        options: [
          "Jamiyatda erkin fikrlashni kuchaytiradi va diniy bilimlarni ommalashtirishga yordam beradi.",
          "Ixtilof va bo‘linishlarni keltirib chiqaradi, tartibsizlik (fartsa) hamda diniy radikalizmga yo‘l ochadi.",
          "Barcha musulmonlarning yagona bir g'oya atrofida birlashishiga va diniy bag'rikenglikning ortishiga xizmat qiladi.",
          "Diniy marosimlarni soddalashtirish orqali yoshlarning dinga bo'lgan qiziqishini yanada oshiradi.",
        ],
        correct: 1,
      },
      {
        q: "Ishtilohiy ma'noda 'Fatvo' tushunchasiga berilgan eng aniq ta'rifni toping:",
        options: [
          "Diniy jamoa o'rtasida o'zaro kelishilgan va barcha uchun majburiy bo'lgan ijtimoiy bitim.",
          "Vakolatli shaxs (muftiy) tomonidan shariat bo'yicha so'ralgan savolga berilgan rasmiy javob va hukm.",
          "Faqatgina davlat rahbari tomonidan qabul qilinadigan va qonuniy kuchga ega bo'lgan diniy qaror.",
          "Har bir musulmonning Qur'on va hadisdan mustaqil ravishda chiqargan shaxsiy xulosasi.",
        ],
        correct: 1,
      },
      {
        q: "Mujtahid va muqallid tushunchalari o'rtasidagi mantiqiy farq nimadan iborat?",
        options: [
          "Mujtahid faqat ibodat bilan band bo'ladi, muqallid esa diniy bilimlarni tarqatish bilan shug'ullanadi.",
          "Mujtahid mustaqil hukm chiqarish darajasiga yetgan olim, muqallid esa biror mazhab imomiga ergashuvchidir.",
          "Mujtahid davlat tomonidan tayinlangan muftiy, muqallid esa oddiy diniy xizmatchi hisoblanadi.",
          "Muqallid diniy qonunlarni ishlab chiqadi, mujtahid esa ularni amaliyotga tatbiq etish bilan shug'ullanadi.",
        ],
        correct: 1,
      },
      {
        q: "Hanafiy va Shofeiy mazhablarining bugungi kunda keng tarqalgan jug'rofiy hududlari qaysi javobda to'g'ri ko'rsatilgan?",
        options: [
          "Hanafiy — Misr va Indoneziya; Shofeiy — Markaziy Osiyo va Turkiya hududlarida.",
          "Hanafiy — Markaziy Osiyo, Turkiya va Hindiston; Shofeiy — Misr, Indoneziya va Malayziyada.",
          "Hanafiy — Shimoliy Afrika va Ispaniya; Shofeiy — Eron va Iroq hududlarida.",
          "Har ikkala mazhab ham faqatgina Arabiston yarim orolida va Fors ko'rfazi davlatlarida tarqalgan.",
        ],
        correct: 1,
      },
      {
        q: "Mazhabsizlikni targ'ib qiluvchilarning hukm olish metodologiyasidagi asosiy xatosi nimada?",
        options: [
          "Ular hadislarni mutlaqo inkor etib, faqatgina dunyoviy qonunlarga tayanishni taklif etadilar.",
          "Mazhab imomlarining ijtihodlarini inkor etib, har kim mustaqil ravishda Qur'on va hadisdan hukm olishi kerak deb hisoblaydilar.",
          "Faqatgina o'tmishdagi ulamolarning qarashlariga tayanib, zamonaviy muammolarga javob bermaslikni targ'ib qiladilar.",
          "Diniy hukmlarni faqat mantiqiy qiyos orqali chiqarib, vahiyni ikkinchi darajaga tushirib qo'yadilar.",
        ],
        correct: 1,
      },
      {
        q: "Mazhablar o'rtasida bir masalaning turlicha talqin qilinishiga sabab bo'luvchi obyektiv omillar qaysi?",
        options: [
          "Diniy matnlarning (hadislarning) yetib kelish uslubi, lug'aviy ma'nolarni tushunish va ijtimoiy muhitdagi farqlar.",
          "Mazhab imomlarining bir-biri bilan shaxsiy adovati va o'zaro raqobatda ustun kelishga intilishi.",
          "Muqaddas kitobning turli mintaqalar uchun turlicha tahrirlarda va nusxalarda nozil bo'lganligi.",
          "Davlat rahbarlarining o'z siyosiy manfaatlariga mos keluvchi diniy hukmlarni majburan qabul qildirishlari.",
        ],
        correct: 0,
      },
      {
        q: "Hadisda keltirilgan 'olimning obiddan afzalligi' haqidagi o'xshatishning mazmuni nimada?",
        options: [
          "Obidning qilgan ibodati olimning ilmidan ko'ra jamiyat uchun ko'proq foyda keltirishi haqida.",
          "Olimning ilm nuri bilan boshqalarga yo'l ko'rsatishi oyning yulduzlardan afzalligiga o'xshatilgan.",
          "Olim va obidning darajasi bir xil bo'lib, biri dunyoviy, ikkinchisi diniy sohada yetakchi ekanligi haqida.",
          "Olim faqat nazariya bilan, obid esa faqat amaliyot bilan shug'ullanishi lozimligi haqida.",
        ],
        correct: 1,
      },
      {
        q: "Soxta salafiylarning 'biz faqat Qur'on va hadisga ergashamiz' degan da'volarining noto'g'riligi nimada?",
        options: [
          "Ular aslida Qur'on va hadisni butunlay rad etib, faqat o'z amirlarining buyruqlariga so'zsiz bo'ysunadilar.",
          "Ulamolar ijtihodini inkor qilib, muqaddas matnlarni o'zlarining sayoz va noto'g'ri tushunchalari asosida talqin qiladilar.",
          "Ular faqatgina arab tilidagi manbalardan foydalanib, boshqa tillardagi diniy adabiyotlarni tan olmaydilar.",
          "Bu da'vo orqali ular faqatgina zamonaviy ilm-fan yutuqlaridan foydalanishni taqiqlashni maqsad qilganlar.",
        ],
        correct: 1,
      },
      {
        q: "Markaziy Osiyo hududida dastlabki diniy tasavvurlarning shakllanishi qaysi davrga to'g'ri keladi?",
        options: [
          "Islom dinining mintaqaga kirib kelgan ilk o'rta asrlar davriga.",
          "Eng qadimgi davrlarga — paleolit (tosh) davriga borib taqaladi.",
          "Zardushtiylik dini davlat dini darajasiga ko'tarilgan antik davrga.",
          "Mintaqada birinchi yirik shaharlar va sug'orish tizimlari paydo bo'lgan davrga.",
        ],
        correct: 1,
      },
      {
        q: "Mintaqa xalqlari tarixida ketma-ket almashgan diniy ta'limotlarning to'g'ri ketma-ketligini aniqlang:",
        options: [
          "Animizm, zardushtiylik, buddaviylik, moniylik, xristianlik va islom.",
          "Islom, zardushtiylik, buddaviylik, animizm va shomonlik.",
          "Zardushtiylik, islom, buddaviylik, moniylik va totemizm.",
          "Buddaviylik, xristianlik, islom, moniylik va zardushtiylik.",
        ],
        correct: 0,
      },
      {
        q: "Ibtidoiy odamlarning qoyatosh chizmalaridagi tasvirlar qanday diniy mohiyatga ega bo'lgan?",
        options: [
          "Faqatgina estetik zavq olish va bino ichkarisini bezash maqsadida chizilgan.",
          "Ov jarayonlari, hayvonlarga sig‘inish va tabiat hodisalaridan hayratlanish/qo‘rqish tuyg‘ularini ifodalagan.",
          "Kelajak avlodlar uchun yozuv tizimini yaratish va tarixiy voqealarni xronologik qayd etish vositasi bo'lgan.",
          "Qadimgi xaritalarni chizish va hududlarni chegaralash maqsadida qo'llanilgan.",
        ],
        correct: 1,
      },
      {
        q: "Diniy e'tiqodlar tarixidagi 'Sinxretizm' tushunchasining mazmuni nima?",
        options: [
          "Muayyan bir dinning boshqa barcha dinlarni mutlaqo taqiqlashi va yo'q qilishi.",
          "Turli diniy e’tiqod va qarashlarning bir-biri bilan qo‘shilib, aralashib ketishi.",
          "Dinning davlatdan to'liq ajratilishi va dunyoviy hayotning ustuvorligi.",
          "Diniy matnlarning faqatgina bitta tildan boshqa tilga tarjima qilinishi.",
        ],
        correct: 1,
      },
      {
        q: "Fetishizm diniy tasavvuri qanday e'tiqodga asoslangan?",
        options: [
          "Tabiatdagi barcha hodisalar muayyan bir xudo tomonidan boshqarilishiga ishonish.",
          "Jonsiz narsalarning (tosh, tumor, daraxt) g‘ayritabiiy kuchiga ishonish va ularga sig‘inish.",
          "Insonning vafotidan so'ng uning ruhi boshqa bir jonzotga o'tishiga (reinkarnatsiya) ishonish.",
          "Faqatgina olovning muqaddasligiga va uning tozalovchi kuchiga e'tiqod qilish.",
        ],
        correct: 1,
      },
      {
        q: "Animizm tushunchasining tub mohiyati qaysi javobda to'g'ri ifodalangan?",
        options: [
          "Insoniyatning kelib chiqishini muayyan bir hayvon turi bilan bog'lab tushuntirish.",
          "Tabiatdagi barcha narsa va hodisalarning (tog‘, daryo, shamol) ruhi yoki joni bor deb ishonish.",
          "Faqatgina o'tgan ajdodlarning ruhlariga sig'inish va ulardan madad so'rash tizimi.",
          "Yulduzlarning joylashishiga qarab inson taqdirini bashorat qilish san'ati.",
        ],
        correct: 1,
      },
      {
        q: "Ibtidoiy davrdagi 'Ona xudo' tasavvuri jamiyatning qaysi bosqichi bilan bog'liq?",
        options: [
          "Patriarxat davri — erkaklar ustunligi va harbiy demokratiya bosqichi.",
          "Matriarxat davri — unumdorlik va hayot davomiyligini ayol timsolida ulug'lash bosqichi.",
          "Feodalizm davri — yerga egalik qilish va dehqonchilik madaniyatining shakllanishi bosqichi.",
          "Sanoat inqilobi davri — texnologik taraqqiyot va diniy qarashlarning pasayishi bosqichi.",
        ],
        correct: 1,
      },
      {
        q: "Totemistik qarashlarning asosiy mazmunini aniqlang:",
        options: [
          "Insonning g'ayritabiiy kuchlar yordamida tabiatga ta'sir o'tkaza olishiga bo'lgan ishonchi.",
          "Muayyan insonlar guruhi (urug‘) bilan ma’lum bir hayvon yoki o‘simlik o‘rtasida qon-qardoshlik aloqasi bor deb ishonish.",
          "Faqatgina quyosh va oyning muqaddasligiga hamda ularning hayot beruvchi kuchiga sig'inish.",
          "Dunyoni yaratgan yagona qudratli kuchga va uning elchilariga e'tiqod qilish tizimi.",
        ],
        correct: 1,
      },
      {
        q: "Markaziy Osiyodagi qoyatosh chizmalarida aks etgan 'ov sehri' tasvirlari nima maqsadni ko'zlagan?",
        options: [
          "O'ljani ramziy o'ldirish orqali haqiqiy ovda muvaffaqiyatga erishishga bo'lgan g'ayritabiiy ishonch.",
          "Boshqa qabilalarga o'z hududidagi hayvonlar boyligi haqida hisobot berish va ularni qo'rqitish.",
          "Qabiladagi yosh bolalarga hayvonlarning turlari va ularning tuzilishini o'rgatish (ko'rgazmali qurol).",
          "Ibtidoiy odamlarning hayvonot olamiga bo'lgan nafratini va ularni qirib tashlash istagini ifodalash.",
        ],
        correct: 0,
      },
      {
        q: "Ibtidoiy dinlar va zamonaviy dinlar o'rtasidagi farqni belgilovchi asosiy jihat nima?",
        options: [
          "Ibtidoiy dinlar faqat bitta xudoga, zamonaviy dinlar esa ko'plab ma'budalarga tayanadi.",
          "Ibtidoiy dinlar ko'proq tabiat hodisalariga sig'inishga (mafkuraviy soddalik), zamonaviy dinlar esa tizimli aqidalarga asoslangan.",
          "Ibtidoiy dinlarda ibodat qilish uchun maxsus binolar bo'lgan, zamonaviylarida esa faqat ochiq havoda sig'iniladi.",
          "Zamonaviy dinlar faqat qadimiy an'analarni saqlaydi, ibtidoiy dinlar esa doimo yangilikka intilgan.",
        ],
        correct: 1,
      },
    ]),
  },
  */
};
