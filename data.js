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
        q: "Din va fan o'rtasidagi funktsional munosabatning kognitiv mohiyati qanday talqin qilinadi?",
        options: [
          "Din metafizik e'tiqodga, fan esa ob'ektiv isbotlangan tizimli bilimlarga tayanadi.",
          "Din va fan bir-birini inkor etuvchi, mutlaqo kesishmaydigan intellektual sohalardir.",
          "Din faqat ilohiy kuchlarni, fan esa faqat ijtimoiy munosabatlarni o'rganuvchi vositadir.",
          "Din va fan mohiyatan bir xil metodologiya va tadqiqot ob'ektlariga ega bo'lgan tizimdir.",
        ],
        correct: 0,
      },
      {
        q: "Diniy ekstremizm tushunchasi huquqiy va ijtimoiy nuqtai nazardan nimani anglatadi?",
        options: [
          "Diniy tashkilotlarning jamiyatda ma'rifiy va xayriya faoliyatini kengaytirishi.",
          "Diniy qarashlarni qonuniy me'yorlar doirasida ochiq va erkin tarzda targ'ib etish.",
          "Diniy asosda mavjud davlat tuzumini zo'ravonlik bilan o'zgartirishga qaratilgan faoliyat.",
          "Shaxsning o'z diniy e'tiqodini boshqa shaxslar e'tiqodidan ustun deb hisoblashi.",
        ],
        correct: 2,
      },
      {
        q: "Radikalizm va ekstremizm o'rtasidagi fundamental tafovut qaysi javobda to'g'ri ko'rsatilgan?",
        options: [
          "Radikalizm – fikrdagi keskinlik, ekstremizm – amaldagi zo'ravonlik va qonunga zidlik.",
          "Radikalizm – siyosiy islohot, ekstremizm – diniy e'tiqodga asoslangan nazariy qarash.",
          "Radikalizm – qurolli to'qnashuv, ekstremizm – mafkuraviy targ'ibotning yumshoq shakli.",
          "Radikalizm va ekstremizm o'rtasida huquqiy va ma'noviy jihatdan hech qanday farq yo'q.",
        ],
        correct: 0,
      },
      {
        q: "Terrorizmning diniy niqob ostida namoyon bo'lishining bosh sababi nimada?",
        options: [
          "Diniy manbalarning barchasi zo'ravonlik g'oyalarini o'zida mujassam etganligi.",
          "Diniy tuyg'ular orqali insonlarni manipulyatsiya qilish va ishontirishning osonligi.",
          "Terroristik guruhlarning barchasi diniy ulamolardan tashkil topganligi.",
          "Dunyo dinlarining barchasi faqat urush va bosqinchilik asosida tarqalganligi.",
        ],
        correct: 1,
      },
      {
        q: "Yoshlarning ekstremistik g'oyalarga berilib ketishiga sabab bo'luvchi tashqi omil qaysi?",
        options: [
          "Akademik ta'lim muassasalarida diniy fanlarning yuqori saviyada o'qitilishi.",
          "Ommaviy axborot vositalari va internetda nazorat qilinmagan yot g'oyalar targ'iboti.",
          "Yoshlarning bo'sh vaqtlarida sport va san'at bilan muntazam shug'ullanishi.",
          "Davlat tomonidan yoshlarga berilayotgan imtiyozlar va ijtimoiy qo'llab-quvvatlash.",
        ],
        correct: 1,
      },
      {
        q: "Diniy mutaassiblikning (fanatizm) ijtimoiy barqarorlikka ta'siri qanday baholanadi?",
        options: [
          "Jamiyatda o'zaro hamjihatlik, bag'rikenglik va madaniy yuksalishni ta'minlaydi.",
          "Diniy qadriyatlarning sof holatda saqlanishiga va taraqqiyotga xizmat qiladi.",
          "Jamiyatda ayirmachilik, adovat va ijtimoiy nizolar kelib chiqishiga zamin yaratadi.",
          "Mutaassiblik faqat shaxsiy e'tiqod darajasida qolib, jamiyatga ta'sir ko'rsatmaydi.",
        ],
        correct: 2,
      },
      {
        q: "Diniy bag'rikenglikni (tolerantlik) mustahkamlashda ta'limning o'rni nimadan iborat?",
        options: [
          "Faqat muayyan bir dinni o'rganish orqali boshqa dinlarni inkor qilishni o'rgatish.",
          "Madaniy muloqot va ezgulik yo'lidagi hamkorlik g'oyalarini yoshlar ongiga singdirish.",
          "Diniy ta'limni dunyoviy ta'limdan butunlay ajratib, alohida tizimda shakllantirish.",
          "Ta'lim orqali insonlarni diniy e'tiqoddan butunlay voz kechishga undash.",
        ],
        correct: 1,
      },
      {
        q: "Ommaviy axborot vositalarining diniy savodxonlikdagi strategik roli nima?",
        options: [
          "Diniy sohadagi muammolarni faqat tanqidiy va salbiy tomondan yoritib borish.",
          "Aqidaparastlik g'oyalari tarqalishining oldini oluvchi xolis axborotlarni tarqatish.",
          "Barcha telekanallarda faqat diniy va'zlar va diniy marosimlarni namoyish etish.",
          "OAV diniy masalalarga aralashmasligi va bu mavzuni butunlay chetlab o'tishi.",
        ],
        correct: 1,
      },
      {
        q: "Internet tarmog'ida diniy targ'ibotning eng xavfli jihati qaysi javobda ko'rsatilgan?",
        options: [
          "Diniy adabiyotlarning elektron shaklda bepul va tez tarqatilishi.",
          "Diniy tushunchalarning g'arazli maqsadlarda noto'g'ri va buzib talqin qilinishi.",
          "Internet foydalanuvchilarining diniy mavzularda o'zaro fikr almashishi.",
          "Rasmiy diniy tashkilotlarning o'z veb-saytlariga ega bo'lib borishi.",
        ],
        correct: 1,
      },
      {
        q: "Diniy sohada profilaktik ishlarning asosiy mexanizmi qaysi usulga tayanadi?",
        options: [
          "Aholini majburiy ravishda diniy tashkilotlar nazoratiga topshirish.",
          "Tushuntirish ishlari, ma'rifiy bukletlar va mahallabay tizimida targ'ibot.",
          "Faqat huquqbuzarlik sodir etgan shaxslarni qat'iy jazolash va qamoqqa olish.",
          "Diniy adabiyotlarni chop etishni va tarqatishni butunlay taqiqlash.",
        ],
        correct: 1,
      },
      {
        q: "Davlatning ekstremizmga qarshi siyosati qaysi huquqiy tamoyilga asoslanadi?",
        options: [
          "Barcha dindorlarni nazoratga olish va e'tiqod erkinligini cheklash.",
          "Huquqbuzarlik uchun javobgarlikning muqarrarligi va preventiv choralar ko'rish.",
          "Diniy tashkilotlarni moliyalashtirishni davlat byudjeti hisobidan amalga oshirish.",
          "Ekstremizmga qarshi kurashni faqat jamoat tashkilotlari zimmasiga yuklash.",
        ],
        correct: 1,
      },
      {
        q: "Fuqarolik jamiyati institutlarining diniy xavfsizlik borasidagi vazifasi nima?",
        options: [
          "Diniy nizolarni hal qilishda harbiy kuchlardan foydalanishga ko'maklashish.",
          "Ijtimoiy profilaktika, ogohlikni oshirish va sog'lom muhitni shakllantirish.",
          "Yangi diniy oqimlarni davlat ro'yxatidan o'tkazishni nazorat qilish.",
          "Faqat diniy ta'lim muassasalarining moliyaviy hisobotlarini tekshirish.",
        ],
        correct: 1,
      },
      {
        q: "Oila muhitining diniy tarbiyadagi ahamiyati qanday tavsiflanadi?",
        options: [
          "Oila faqat iqtisodiy ehtiyojlarni qondiruvchi, tarbiyaga daxlsiz kichik bo'g'indir.",
          "Oila bolaning ma'naviy va diniy dunyoqarashini shakllantiruvchi eng asosiy muhitdir.",
          "Diniy tarbiya faqat maxsus maktablarda berilishi, oila aralashmasligi kerak.",
          "Oila muhiti bolaning radikal g'oyalarga berilishiga ta'sir o'tkaza olmaydi.",
        ],
        correct: 1,
      },
      {
        q: "Mahalla institutining yoshlar tarbiyasidagi roli nimada ko'rinadi?",
        options: [
          "Yoshlarning kundalik hayotini va shaxsiy daxlsizligini qat'iy nazorat qilish.",
          "Yoshlarni jamiyatga moslashtirish, ularni bilimli va barkamol qilib tarbiyalash.",
          "Mahalla faqat kattalar uchun maslahat beruvchi, yoshlarga aloqasiz organdir.",
          "Yoshlarning diniy ta'lim olishini butunlay cheklash va taqiqlash.",
        ],
        correct: 1,
      },
      {
        q: "Diniy ta'lim muassasalari oldidagi dolzarb vazifalardan biri nima?",
        options: [
          "Yoshlarni faqat o'tmishdagi diniy qoidalarga so'zsiz bo'ysunishga o'rgatish.",
          "Yoshlarni sof islom aqidasida tarbiyalash va yot g'oyalarga qarshi kurashish.",
          "Xalqaro diniy tashkilotlarning ko'rsatmalarini so'zsiz ijro etish.",
          "Diniy ta'lim muassasalarida faqat dunyoviy fanlarni o'qitishni joriy etish.",
        ],
        correct: 1,
      },
      {
        q: "Imom-xatiblar va ulamolarning jamiyatdagi ijtimoiy mas'uliyati nima?",
        options: [
          "Faqat diniy marosimlarda ishtirok etish va duo-fotiha bilan cheklanish.",
          "To'g'ri diniy ta'lim berish va tinchlik hamda bag'rikenglikni targ'ib qilish.",
          "Siyosiy partiyalar faoliyatida qatnashish va hokimiyat uchun kurashish.",
          "Jamiyatni diniy va dunyoviy tabaqalarga ajratib, ularni boshqarish.",
        ],
        correct: 1,
      },
      {
        q: "Soxta diniy targ'ibotning eng asosiy xususiyatini aniqlang:",
        options: [
          "Insonparvarlik, rahm-shafqat va ezgulik g'oyalariga tayanadi.",
          "Zo'ravonlik, adovat va amaldagi davlat qonunlariga nafratni oqlaydi.",
          "Xalqaro miqyosda qabul qilingan inson huquqlarini himoya qiladi.",
          "Faqatgina ilmiy kashfiyotlar va mantiqiy dalillar asosida gapiradi.",
        ],
        correct: 1,
      },
      {
        q: "Markaziy Osiyodagi 'An'anaviy islom' tushunchasining mazmuni nima?",
        options: [
          "Yaqin Sharqdagi radikal oqimlarning Markaziy Osiyoga ko'chirilgan varianti.",
          "Hanafiylik mazhabi, Moturidiylik va milliy madaniyat uyg'unlashgan mo'tadil din.",
          "Faqatgina diniy kitoblarda yozilgan, hayotga tatbiq etilmaydigan nazariyalar.",
          "Milliy urf-odatlarni inkor etuvchi, faqat arabcha turmush tarziga asoslangan din.",
        ],
        correct: 1,
      },
      {
        q: "Hanafiylik mazhabining mintaqada keng tarqalishining asosiy sababi nima?",
        options: [
          "Hukmlarning juda og'irligi va inson erkinligini butunlay cheklashi.",
          "Hukmlarning o'ta qulayligi, aqlga tayanilgani va urf-odatlarga mosligi.",
          "Ushbu mazhabni qabul qilmaganlar uchun og'ir jazolar belgilanganligi.",
          "Mazhab asoschilarining Markaziy Osiyoda uzoq vaqt hukmdorlik qilgani.",
        ],
        correct: 1,
      },
      {
        q: "Moturidiylik aqidaviy maktabining bosh maqsadi nimadan iborat?",
        options: [
          "Aql va e'tiqodni uyg'unlashtirib, diniy masalalarda mo'tadillikni ta'minlash.",
          "E'tiqodiy masalalarda mantiqni rad etib, faqat ko'r-ko'rona ergashishni talab qilish.",
          "Dunyoviy bilimlarni o'rganishni diniy gunoh sifatida e'lon qilish.",
          "Faqatgina arab tili va adabiyotini o'rganishni majburiy deb hisoblash.",
        ],
        correct: 0,
      },
      {
        q: "Mahalliy urf-odatlar va din o'rtasidagi uyg'unlik qanday natija beradi?",
        options: [
          "Dinning milliy qadriyatlarni butunlay inkor etishiga olib keladi.",
          "Diniy va milliy qadriyatlarning o'zaro boyishi va jamiyat barqarorligiga.",
          "Milliy urf-odatlarning diniy qoidalar ostida butunlay yo'qolishiga.",
          "Jamiyatda faqat diniy tartib-qoidalarning amalda bo'lishini ta'minlaydi.",
        ],
        correct: 1,
      },
      {
        q: "Mustaqillik yillarida O'zbekistonda diniy sohada amalga oshirilgan bosh o'zgarish?",
        options: [
          "Barcha diniy tashkilotlarni davlat boshqaruviga to'liq bo'ysundirish.",
          "Vijdon erkinligining qonuniy kafolatlanishi va diniy qadriyatlarning tiklanishi.",
          "Diniy ta'limni faqat xorijiy davlatlarda olishni majburiy qilib qo'yish.",
          "Diniy marosimlarni o'tkazishni faqat davlat bayramlari doirasida cheklash.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekistonda faoliyat yuritayotgan turli diniy konfessiyalararo munosabatlar asosi?",
        options: [
          "Bir dinning boshqa dinlardan ustunligini qonuniy mustahkamlash.",
          "Bag'rikenglik, o'zaro hurmat va qonun oldida tenglik tamoyillari.",
          "Diniy konfessiyalarning bir-biridan ajralgan holda, muloqotsiz yashashi.",
          "Faqatgina davlat tomonidan tan olingan bitta dinning mavjudligi.",
        ],
        correct: 1,
      },
      {
        q: "Diniy bag'rikenglik siyosatining ustuvor yo'nalishi nimaga qaratilgan?",
        options: [
          "Jamiyatda faqat bitta din vakillarining huquqlarini himoya qilishga.",
          "Turli din vakillari o'rtasida tinchlik, totuvlik va hamjihatlikni saqlashga.",
          "Barcha dinlarni birlashtirib, yangi bitta din yaratishga harakat qilishga.",
          "Diniy qarashlarning davlat siyosatiga ta'sirini butunlay yo'qotishga.",
        ],
        correct: 1,
      },
      {
        q: "Din va milliy o'zlik o'rtasidagi bog'liqlik qaysi jarayonda aks etadi?",
        options: [
          "Diniy qadriyatlarning milliy madaniyat va axloqning ajralmas qismiga aylanishida.",
          "Milliy o'zlikning diniy e'tiqod ta'sirida butunlay yo'qolib ketishida.",
          "Din va milliy o'zlik o'rtasidagi doimiy ziddiyat va kurashlar tarixida.",
          "Milliy o'zlikning faqat dunyoviy mafkura asosida shakllanishi kerakligida.",
        ],
        correct: 0,
      },
      {
        q: "Diniy mutaassiblikka qarshi kurashda eng samarali vosita qaysi?",
        options: [
          "Mutaassib shaxslarni jamiyatdan butunlay ajratib qo'yish.",
          "Ma'rifat tarqatish, chuqur bilim berish va sog'lom dunyoqarashni shakllantirish.",
          "Diniy tashkilotlarning sonini maksimal darajada kamaytirish.",
          "Barcha diniy mavzulardagi kitob va nashrlarni taqiqlab qo'yish.",
        ],
        correct: 1,
      },
      {
        q: "Hanafiy mazhabining 'Aqlga tayanish' xususiyati nimada ko'rinadi?",
        options: [
          "Diniy manbalarni butunlay inkor qilib, faqat mantiq bilan ish ko'rishda.",
          "Shar'iy hukmlarni chiqarishda mantiqiy tahlil (qiyos) usulidan foydalanishda.",
          "Faqat dunyoviy qonunlarga tayanib, diniy qoidalarni o'zgartirishda.",
          "Odamlarning shaxsiy xohish-irodasini diniy qonunlardan ustun qo'yishda.",
        ],
        correct: 1,
      },
      {
        q: "Markaziy Osiyo mutafakkirlarining an'anaviy islom rivojiga qo'shgan hissasi?",
        options: [
          "Dinni faqat arab tilida o'rganish kerakligini qat'iy talab qilishgan.",
          "Diniy va dunyoviy bilimlarni uyg'unlashtirib, ilm-fan rivojiga xizmat qilishgan.",
          "Milliy an'analarni dindan butunlay chiqarib tashlashga harakat qilishgan.",
          "Faqatgina tasavvufiy g'oyalarni targ'ib qilib, hayotdan uzilishni targ'ib qilishgan.",
        ],
        correct: 1,
      },
      {
        q: "Diniy erkinlikni ta'minlash bo'yicha islohotlar asosi nimaga qaratilgan?",
        options: [
          "Aholini majburiy ravishda diniy tashkilotlarga a'zo qilishga.",
          "Fuqarolarning vijdon va e'tiqod erkinligini konstitutsiyaviy kafolatlashga.",
          "Faqat yirik diniy bayramlarni nishonlashga ruxsat berish bilan cheklanishga.",
          "Diniy tashkilotlarning davlat ishlariga to'g'ridan-to'g'ri aralashuviga.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekistonda diniy sohadagi davlat siyosatining asosiy maqsadi?",
        options: [
          "Barcha fuqarolarning bir xil diniy qarashga ega bo'lishini ta'minlash.",
          "Dinlararo do'stlikni mustahkamlash va diniy ekstremizmga qarshi turish.",
          "Diniy tashkilotlarni xalqaro moliyaviy yordamlardan butunlay uzib qo'yish.",
          "Dunyoviy davlatda dinning o'rnini butunlay yo'q qilishga harakat qilish.",
        ],
        correct: 1,
      },
    ]),
  },
  topic2: {
    title: "2-Bo'lim:",
    questions: randomizeQuestions([
      {
        q: "Islom ilm-fani tarixida algebra va algoritm fanlarining fundamental asoslari qaysi soha rivojiga xizmat qilgan?",
        options: [
          "Faqatgina diniy merosni raqamlashtirish.",
          "Matematika va aniq fanlar taraqqiyotiga.",
          "Fizika va mexanika qonunlarini inkor etishga.",
          "Kimyoviy elementlarning xususiyatini o'rganishga.",
        ],
        correct: 1,
      },
      {
        q: "Zamonaviy jamiyatda dinning ijtimoiy-axloqiy funktsiyasi qaysi javobda to'g'ri ifodalangan?",
        options: [
          "Jamiyatni qat'iy tabaqalarga ajratib boshqarish.",
          "Axloq, birlik va ma'naviy barqarorlikni mustahkamlash.",
          "Insonlarni zamonaviy ilm-fandan uzoqlashtirish.",
          "Faqat moddiy boyliklarni adolatli taqsimlash.",
        ],
        correct: 1,
      },
      {
        q: "Ma'rifat va diniy bilim o'rtasidagi kontseptual farq nimada aks etadi?",
        options: [
          "Ma'rifat – tor doiradagi, diniy bilim – keng qamrovli tushunchadir.",
          "Ma'rifat – keng dunyoqarash, diniy bilim – e'tiqodiy sohadir.",
          "Ular o'rtasida mantiqiy va amaliy jihatdan farq mavjud emas.",
          "Diniy bilim faqat tarixni, ma'rifat esa kelajakni o'rganadi.",
        ],
        correct: 1,
      },
      {
        q: "Diniy bilimlarning noto'g'ri va sub'ektiv talqin qilinishi qanday global xavfni keltirib chiqaradi?",
        options: [
          "Iqtisodiy inqiroz va ishsizlik darajasining ortishini.",
          "Zo'ravonlik, adovat va ekstremistik g'oyalar ildiz otishini.",
          "Ilmiy kashfiyotlar va innovatsiyalarning to'xtab qolishini.",
          "Tabiiy resurslarning kamayishi va ekologik muammolarni.",
        ],
        correct: 1,
      },
      {
        q: "Dinshunoslik fanining zamonaviy globallashuv sharoitidagi asosiy vazifasi nima?",
        options: [
          "Barcha insonlarni yagona bir dinga e'tiqod qildirish.",
          "Dinlar tarixini o'rganish va bag'rikenglikni rivojlantirish.",
          "Diniy tashkilotlarning siyosiy faoliyatini qo'llab-quvvatlash.",
          "Diniy e'tiqodni ilmiy nuqtai nazardan butunlay inkor etish.",
        ],
        correct: 1,
      },
      {
        q: "Fiqh ilmining lug'aviy ma'nosi va istilohiy mohiyati qaysi javobda to'g'ri berilgan?",
        options: [
          "Faqatgina tarixiy voqealarni hikoya qilib berish.",
          "Narsani chuqur tushunish va shariat hukmlarini bilish.",
          "Dunyoviy qonunlarni diniy qoidalardan ustun qo'yish.",
          "Insonlarning shaxsiy fikrlarini muqaddas deb e'lon qilish.",
        ],
        correct: 1,
      },
      {
        q: "Imom Molik ibn Anas nima sababdan islom tarixida 'Madina imomi' degan yuksak sharafga ega bo'lgan?",
        options: [
          "Faqatgina Madina shahrida tug'ilib, u yerda vafot etgani uchun.",
          "Madina ahli amaliyoti va sunnatiga tayangan fiqhni targ'ib qilgani uchun.",
          "Madina shahrining siyosiy boshqaruvini o'z qo'liga olgani uchun.",
          "Boshqa mazhab asoschilari bilan uchrashishni rad etgani uchun.",
        ],
        correct: 1,
      },
      {
        q: "Imom Shofeiyning fiqhiy maktabi qaysi ikki yirik yo'nalish ta'sirida shakllangan?",
        options: [
          "Faqatgina yunon falsafasi va hind mifologiyasi ta'sirida.",
          "Imom Molik va Imom Abu Hanifa asos solgan ilmiy maktablar ta'sirida.",
          "Markaziy Osiyo shomonligi va buddaviylik ta'limotlari asosida.",
          "Faqatgina o'z davridagi siyosiy partiyalarning mafkurasi asosida.",
        ],
        correct: 1,
      },
      {
        q: "Hanbaliy mazhabida huquqiy hukm chiqarishda qaysi manbalar birlamchi hisoblanadi?",
        options: [
          "Insonning shaxsiy xohishi va zamonaviy qonunchilik hujjatlari.",
          "Muqaddas Qur'on oyatlari va Payg'ambar (s.a.v.) hadislari.",
          "Faqatgina mahalliy urf-odatlar va qabila oqsoqollari qarorlari.",
          "Mantiqiy qiyos va jamiyatdagi ko'pchilikning sub'ektiv fikri.",
        ],
        correct: 1,
      },
      {
        q: "Islom huquqshunosligida 'Fatvo' tushunchasiga berilgan eng aniq ta'rif qaysi?",
        options: [
          "Davlat rahbarining iqtisodiy masalalar bo'yicha chiqargan qarori.",
          "Muayyan masala bo'yicha berilgan shariat hukmi yoki maslahati.",
          "Faqatgina namoz va ro'za qoidalari haqidagi ma'lumotlar to'plami.",
          "Boshqa din vakillari bilan tuziladigan xalqaro bitimlar majmuasi.",
        ],
        correct: 1,
      },
      {
        q: "Mujtahid va muqallid o'rtasidagi funktsional farq nimada ko'rinadi?",
        options: [
          "Mujtahid – boy, muqallid – kambag'al tabaqa vakili hisoblanadi.",
          "Mujtahid mustaqil hukm chiqaradi, muqallid esa unga ergashadi.",
          "Muqallid qonun chiqaradi, mujtahid esa uni faqat ijro etadi.",
          "Ular o'rtasida huquqiy maqom jihatidan hech qanday farq yo'q.",
        ],
        correct: 1,
      },
      {
        q: "Mazhabsizlik g'oyasi musulmon jamiyati barqarorligiga qanday ta'sir ko'rsatadi?",
        options: [
          "Jamiyatda birdamlik, totuvlik va o'zaro ishonchni mustahkamlaydi.",
          "Ijtimoiy nizolar va diniy hukmlarni noto'g'ri anglashga olib keladi.",
          "Diniy savodxonlikni oshirib, ilmiy kashfiyotlarga keng yo'l ochadi.",
          "Siyosiy tizimning mukammallashuviga va iqtisodiy o'sishga xizmat qiladi.",
        ],
        correct: 1,
      },
      {
        q: "Hozirgi globallashuv davrida 'soxta salafiylar' qanday xavfli da'voni ilgari surmoqda?",
        options: [
          "Barcha dinlarni birlashtirib, yangi madaniyat yaratish kerakligi haqida.",
          "Mazhablar shart emasligi va faqat manbalarga shaxsiy talqin bilan qaytish haqida.",
          "Diniy ta'limni faqat zamonaviy universitetlarda o'qitish zarurligi haqida.",
          "Inson huquqlarini himoya qilishda xalqaro tashkilotlar bilan ishlash haqida.",
        ],
        correct: 1,
      },
      {
        q: "Markaziy Osiyo xalqlari tarixidagi 'Sinxretizm' jarayoni nimani anglatadi?",
        options: [
          "Faqatgina bitta dinning boshqa dinlar ustidan mutlaq g'alabasini.",
          "Turli diniy ta'limot va qarashlarning o'zaro bog'lanishi va birlashishini.",
          "Diniy e'tiqodning jamiyat hayotidan butunlay chiqarib tashlanishini.",
          "Faqat harbiy harakatlar natijasida yuzaga keladigan ijtimoiy inqirozni.",
        ],
        correct: 1,
      },
      {
        q: "Fetishizm diniy tasavvuri ibtidoiy insonlar ongida qanday namoyon bo'lgan?",
        options: [
          "Faqatgina yagona va ko'rinmas ilohiy kuchga ishonish orqali.",
          "Jonsiz narsalarning g'ayritabiiy xususiyatiga ishonish va sig'inish orqali.",
          "Tabiat hodisalarini faqat ilmiy mantiq bilan tushuntirish orqali.",
          "Inson ruhining o'lmasligi haqidagi falsafiy bahslar yuritish orqali.",
        ],
        correct: 1,
      },
      {
        q: "Animizm tushunchasining mazmuni qaysi javobda to'g'ri tavsiflangan?",
        options: [
          "Faqatgina hayvonlarni muqaddas deb bilish va ularni o'ldirmaslik.",
          "Tabiatdagi barcha predmet va hodisalarning ruhi borligiga ishonish.",
          "Osmon jismlarini ilohiylashtirish va ularga qurbonliklar keltirish.",
          "Insonni koinotning markazi deb hisoblovchi dunyoviy ta'limot.",
        ],
        correct: 1,
      },
      {
        q: "Totemizm e'tiqodining qabila tuzumidagi ahamiyati nimadan iborat edi?",
        options: [
          "Qabila a'zolarini o'zaro savdo aloqalarini kuchaytirishga undagan.",
          "Muayyan hayvon yoki o'simlikni qabila himoyachisi deb bilib, sig'inilgan.",
          "Faqatgina yangi yerlarni egallash uchun harbiy ittifoq vazifasini o'tagan.",
          "Qabila ichida demokratik saylov tizimini joriy etishga xizmat qilgan.",
        ],
        correct: 1,
      },
      {
        q: "Shomonlik (shamanizm) ta'limotining funktsional asosi nima?",
        options: [
          "Faqatgina yozma qonunlar asosida jamiyatni boshqarish.",
          "Maxsus shaxs orqali ruhlar bilan aloqa qilish va tabiatga ta'sir etish.",
          "Dunyoviy bilimlarni o'rganish va ularni amaliyotda qo'llash.",
          "Iqtisodiy munosabatlarni tartibga soluvchi diniy ko'rsatmalar majmui.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekiston Respublikasining yangi tahrirdagi 'Vijdon erkinligi...' Qonuni qachon qabul qilindi?",
        options: [
          "1991-yil 31-avgustda.",
          "2021-yil 5-iyulda.",
          "2017-yil 1-sentabrda.",
          "2000-yil 15-dekabrda.",
        ],
        correct: 1,
      },
      {
        q: "2021-yilda qabul qilingan 'Vijdon erkinligi...' Qonunining asosiy ustuvor maqsadi nima?",
        options: [
          "Diniy tashkilotlar faoliyatini maksimal darajada cheklash.",
          "Shaxsning diniy e'tiqodini erkin ifoda etishini huquqiy ta'minlash.",
          "Muayyan bir dinni davlatning rasmiy mafkurasi deb e'lon qilish.",
          "Faqatgina diniy ta'lim muassasalari sonini ko'paytirish.",
        ],
        correct: 1,
      },
      {
        q: "Imom Ahmad ibn Hanbal asos solgan mazhabning boshqa mazhablardan farqli jihati?",
        options: [
          "Faqatgina mantiqiy xulosalarga tayanib hukm chiqarishi.",
          "Hukm chiqarishda Qur'on va hadis matnlariga qat'iy va so'zsiz amal qilishi.",
          "Mahalliy urf-odatlarni diniy matnlardan ustun deb hisoblashi.",
          "Faqatgina ijtimoiy manfaatni (maslaha) asosiy manba deb bilishi.",
        ],
        correct: 1,
      },
      {
        q: "Muhammad ibn Ali Qaffol Shoshiy qaysi fiqhiy mazhabning yirik namoyandasi bo'lgan?",
        options: [
          "Faqatgina Hanafiy mazhabining.",
          "Shofe'iy mazhabining (O'rta Osiyoda tarqalishiga hissa qo'shgan).",
          "Molikiy mazhabining.",
          "Hanbaliy mazhabining.",
        ],
        correct: 1,
      },
      {
        q: "Fiqhiy mazhablar o'rtasidagi ixtiloflarga (farqlarga) qanday munosabatda bo'lish lozim?",
        options: [
          "Ularni bir-biriga zid va dushman yo'nalishlar deb hisoblash lozim.",
          "Ularni shariat doirasidagi rahmat va ilmiy xilma-xillik deb hurmat qilish lozim.",
          "Faqat bitta mazhabni to'g'ri deb, qolganlarini rad etish lozim.",
          "Mazhablar o'rtasidagi farqlarni butunlay yo'qotib, ularni birlashtirish lozim.",
        ],
        correct: 1,
      },
      {
        q: "Din va ma'naviyat o'rtasidagi dialektik bog'liqlik qaysi javobda to'g'ri berilgan?",
        options: [
          "Din va ma'naviyat bir-biriga mutlaqo aloqasi bo'lmagan sohalardir.",
          "Din axloqiy qadriyatlarni shakllantirib, ma'naviy kamolotga xizmat qiladi.",
          "Ma'naviyat faqat dunyoviy, din esa faqat oxirat masalalari bilan shug'ullanadi.",
          "Diniy qarashlar insonning ma'naviy erkinligini cheklab qo'yadi.",
        ],
        correct: 1,
      },
      {
        q: "Markaziy Osiyo hududida Islomdan avval qaysi diniy ta'limotlar mavjud bo'lgan?",
        options: [
          "Faqatgina protestantlik va katoliklik.",
          "Zardushtiylik, buddaviylik, moniylik va xristianlik.",
          "Faqatgina shomonlik va totemizm.",
          "Sintoizm va konfutsiylik.",
        ],
        correct: 1,
      },
      {
        q: "Islom sivilizatsiyasining jahon madaniyatiga qo'shgan hissasi nimalarda ko'rinadi?",
        options: [
          "Faqatgina harbiy texnika va qurol-yarog'lar yaratishda.",
          "Ilm-fan, me'morchilik, adolat va yuksak axloqiy g'oyalarning rivojida.",
          "Faqatgina yangi yerlarni bosib olish va iqtisodiy nazorat o'rnatishda.",
          "Insonlarning milliy tillarini butunlay yo'qotib, faqat bitta tilni joriy etishda.",
        ],
        correct: 1,
      },
      {
        q: "Diniy bag'rikenglik (tolerantlik) tajribasi O'zbekistonda qanday namoyon bo'ladi?",
        options: [
          "Faqat bitta din vakillariga barcha huquqlarni berish orqali.",
          "Turli din vakillarining qonun doirasida erkin va teng faoliyat yuritishi orqali.",
          "Barcha dinlarni yagona bir tashkilotga majburan birlashtirish orqali.",
          "Diniy bayramlarni o'tkazishni butunlay taqiqlash orqali.",
        ],
        correct: 1,
      },
      {
        q: "Qur'on va hadislarda tinchlikka oid ilgari surilgan asosiy tamoyil qaysi?",
        options: [
          "Barcha nizolarni faqat kuch va harbiy yo'l bilan hal qilish.",
          "Zo'ravonlikni rad etish, sabr, murosa va adolat bilan munosabat o'rnatish.",
          "Boshqa din vakillari bilan hech qanday aloqa qilmaslik.",
          "Faqatgina o'z diniy qarashlarini majburan yoyish.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekistonda diniy ta'limni rivojlantirishda qaysi muassasalar strategik rol o'ynaydi?",
        options: [
          "Faqatgina xususiy kurslar va uy ta'limi.",
          "O'zbekiston xalqaro islom akademiyasi, madrasalar va ilmiy markazlar.",
          "Faqatgina xorijiy davlatlarning diniy maktablari.",
          "Siyosiy partiyalar qoshidagi tashviqot markazlari.",
        ],
        correct: 1,
      },
      {
        q: "Vijdon erkinligini ta'minlashda davlatning tutgan o'rni qanday tavsiflanadi?",
        options: [
          "Dinni davlatdan va jamiyatdan butunlay ajratib qo'yish.",
          "Fuqarolarning e'tiqod huquqlarini kafolatlash va dinlararo totuvlikni saqlash.",
          "Faqatgina diniy tashkilotlar faoliyatini moliyalashtirish.",
          "Diniy rahbarlarni davlat lavozimlariga tayinlash.",
        ],
        correct: 1,
      },
    ]),
  },
  topic3: {
    title: "3-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "O'zbekiston Respublikasi qonunchiligiga ko'ra, diniy tashkilot tuzish uchun talab etiladigan tashabbuskorlar soni qancha?",
        options: [
          "Kamida 5 ta tashabbuskor",
          "Kamida 10 ta tashabbuskor",
          "Kamida 50 ta tashabbuskor",
          "Kamida 100 ta tashabbuskor",
        ],
        correct: 1,
      },
      {
        q: "Diniy tashkilotning huquqiy maqomi (yuridik shaxs) qaysi paytdan e'tiboran rasman tan olinadi?",
        options: [
          "Tashkilot nizomi tasdiqlangan kundan.",
          "Adliya organlari tomonidan ro'yxatdan o'tkazilgan paytdan.",
          "Diniy qo'mita tomonidan ruxsatnoma berilgan kundan.",
          "Birinchi ommaviy ibodat amalga oshirilgan vaqtdan.",
        ],
        correct: 1,
      },
      {
        q: "Diniy tashkilotni ro'yxatdan o'tkazish uchun taqdim etilgan hujjatlar qancha muddatda ko'rib chiqilishi shart?",
        options: [
          "15 ish kuni ichida.",
          "1 oy (o'ttiz kun) ichida.",
          "3 oy (to'qson kun) ichida.",
          "10 kalendar kuni ichida.",
        ],
        correct: 1,
      },
      {
        q: "Islomdan avvalgi Arabistonda 'Johiliya' tushunchasining mazmuniy mohiyati nimada aks etgan?",
        options: [
          "Faqatgina yozish va o'qishni bilmaslikda.",
          "Ma'rifatsizlik, axloqiy tushkunlik va nodonlikda.",
          "Iqtisodiy qoloqlik va kambag'allikda.",
          "Chet tillarini o'rganishni rad etishda.",
        ],
        correct: 1,
      },
      {
        q: "Johiliya davridagi eng og'ir ijtimoiy-axloqiy jinoyat (illat) sifatida nima ko'rsatiladi?",
        options: [
          "Savdo-sotiqda o'zaro kelisha olmaslik.",
          "Qiz bolalarni tiriklayin tuproqqa ko'mish.",
          "Chet ellik savdogarlardan boj undirish.",
          "Qabila rahbarlarini tez-tez almashtirish.",
        ],
        correct: 1,
      },
      {
        q: "Arabistonda butparastlik an'anasini (birinchi sanamni) Shomdan olib kelgan shaxs kim?",
        options: [
          "Abu Sufyon ibn Harb.",
          "Amr ibn Luhay al-Xuzoiy.",
          "Abu Jahl ibn Hishom.",
          "Varaqa ibn Navfal.",
        ],
        correct: 1,
      },
      {
        q: "Johiliya davrida 'Haniflar' deb kimlarga nisbatan aytilgan?",
        options: [
          "Butlarga sig'inuvchi boy zodagonlarga.",
          "Ibrohim (a.s.) yo'lida bo'lib, yakkahudolikka ishonuvchilarga.",
          "Faqatgina xristianlikni qabul qilgan arab ayollariga.",
          "Yahudiylikning barcha qoidalariga amal qiluvchi qabilalarga.",
        ],
        correct: 1,
      },
      {
        q: "Payg'ambarimiz Muhammad (s.a.v.)ning onalari Omina binti Vahb qaysi manzilda vafot etganlar?",
        options: [
          "Makka va Madina oralig'idagi Abvo qishlog'ida.",
          "Yasrib (Madina) shahrining markazida.",
          "Shomga boradigan savdo yo'li ustida.",
          "Yaman o'lkasining chekka hududida.",
        ],
        correct: 0,
      },
      {
        q: "Muhammad (s.a.v.) 12 yoshlarida Shomga qilgan safarlarida qaysi rohib u zotdagi payg'ambarlik belgisini tanigan?",
        options: [
          "Rohib Varaqa.",
          "Rohib Buhayro.",
          "Rohib Quss ibn Soida.",
          "Rohib Nestorius.",
        ],
        correct: 1,
      },
      {
        q: "Xadicha (r.a.) Muhammad (s.a.v.)ni o'z savdo karvoniga taklif qilishining bosh sababi nima edi?",
        options: [
          "U zotning amakilari Abu Tolib bilan qarindoshligi.",
          "U zotning yuksak omonatdorligi va halolligi ('Al-Amin').",
          "U zotning harbiy sohadagi tajribasi va jasorati.",
          "U zotning Shom yo'llarini juda yaxshi bilishi.",
        ],
        correct: 1,
      },
      {
        q: "Muhammad (s.a.v.) 35 yoshlarida Ka'bani qayta qurishda qaysi muhim masalada hakamlik qilganlar?",
        options: [
          "Ka'ba kalitini kim saqlashi masalasida.",
          "Hajar al-asvadni o'rniga qo'yish masalasida.",
          "Qurayshning yangi rahbarini saylash masalasida.",
          "Zam-zam qudug'ini qazish huquqi masalasida.",
        ],
        correct: 1,
      },
      {
        q: "Hiro g'orida ilk vahiy - 'Alaq' surasining dastlabki oyatlari nechanchi yilda nozil bo'lgan?",
        options: [
          "Milodiy 571-yilda.",
          "Milodiy 610-yilda.",
          "Milodiy 622-yilda.",
          "Milodiy 632-yilda.",
        ],
        correct: 1,
      },
      {
        q: "Jabroil (a.s.) payg'ambarimizga Hiro g'orida aytgan birinchi buyrug'i (so'zi) nima bo'lgan?",
        options: [
          "Qum! (Tur!)",
          "Iqro! (O'qi!)",
          "Sabbih! (Tasbih ayt!)",
          "Anzir! (Ogohlantir!)",
        ],
        correct: 1,
      },
      {
        q: "Varaqa ibn Navfal Muhammad (s.a.v.)ning ilk vahiy haqidagi so'zlarini eshitib, u zotga kim kelganini aytgan?",
        options: [
          "Faqatgina bir xayoliy ko'rinish.",
          "Muso (a.s.)ga kelgan Nomus (Jabroil).",
          "Qadimgi Shom folbinlarining ruhi.",
          "Insonlarga yordam beruvchi oddiy farishta.",
        ],
        correct: 1,
      },
      {
        q: "Islom tarixida birinchi bo'lib iymon keltirgan (musulmon bo'lgan) shaxs kim?",
        options: [
          "Abu Bakr Siddiq (r.a.).",
          "Xadicha binti Xuvaylid (r.a.).",
          "Ali ibn Abu Tolib (r.a.).",
          "Zayd ibn Horisa (r.a.).",
        ],
        correct: 1,
      },
      {
        q: "Makkadagi yashirin da'vat (sirli islomga chaqirish) davri necha yil davom etgan?",
        options: ["1 yil.", "3 yil.", "10 yil.", "13 yil."],
        correct: 1,
      },
      {
        q: "Oshkora da'vat boshlanganda Muhammad (s.a.v.)ga eng qattiq qarshilik ko'rsatgan amakilari kim edi?",
        options: [
          "Abu Tolib.",
          "Abu Lahab.",
          "Hamza ibn Abdulmuttalib.",
          "Abbos ibn Abdulmuttalib.",
        ],
        correct: 1,
      },
      {
        q: "Mushriklarning zulmi kuchayganidan so'ng, musulmonlarning birinchi guruhi qayerga hijrat qilgan?",
        options: [
          "Yasrib (Madina) shahriga.",
          "Habashiston (Efiopiya) o'lkasiga.",
          "Yaman va Ummon hududlariga.",
          "Misr va Shom tuproqlariga.",
        ],
        correct: 1,
      },
      {
        q: "Payg'ambarimiz (s.a.v.)ning hayotlaridagi eng og'ir damlar - 'Mahzunlik yili'da kimlar vafot etgan?",
        options: [
          "Otalari Abdulloh va onalari Omina.",
          "Xadicha (r.a.) va amakilari Abu Tolib.",
          "Bobolari Abdulmuttalib va amakilari Hamza.",
          "Farzandlari Ibrohim va Qosim.",
        ],
        correct: 1,
      },
      {
        q: "Milodiy 622-yilda amalga oshirilgan 'Hijrat' voqeasi qaysi ikki shahar o'rtasida bo'lgan?",
        options: [
          "Makka va Shom.",
          "Makka va Madina.",
          "Madina va Toif.",
          "Makka va Habashiston.",
        ],
        correct: 1,
      },
      {
        q: "Islom dini ta'limotida 'Islom' so'zining lug'aviy va istilohiy ma'nosi nima?",
        options: [
          "Faqatgina tinchlik va totuvlik.",
          "Allohga taslim bo'lish, bo'ysunish va itoat qilish.",
          "Boshqa dinlar bilan birlashish va hamkorlik.",
          "Eski urf-odatlarni butunlay inkor etish.",
        ],
        correct: 1,
      },
      {
        q: "Muhammad (s.a.v.)ning yoshliklarida ishonchli va halol bo'lganliklari uchun berilgan laqablari?",
        options: ["As-Siddiq.", "Al-Amin.", "Al-Faruq.", "Az-Zaki."],
        correct: 1,
      },
      {
        q: "Payg'ambarimiz (s.a.v.) emizgan sut-onalari Halima Sa'diyaning uyida necha yil yashaganlar?",
        options: ["2 yil.", "4 yil.", "6 yil.", "10 yil."],
        correct: 1,
      },
      {
        q: "Qur'onda zikr qilingan va johiliya arablarining eng mashhur sanamlari qaysilar edi?",
        options: [
          "Hubal va Isaf.",
          "Lot, Manot va Uzzo.",
          "Noyl va Na'ila.",
          "Vadd va Suvo'.",
        ],
        correct: 1,
      },
      {
        q: "Xadicha (r.a.) vafotidan so'ng, Muhammad (s.a.v.)ning Moriya (r.a.) ismli ayollaridan tug'ilgan o'g'illari?",
        options: ["Qosim.", "Ibrohim.", "Abdulloh.", "Toyyib."],
        correct: 1,
      },
      {
        q: "Hijrat amalga oshirilgandan so'ng, Madinada musulmonlar tomonidan qurilgan birinchi masjid nomi?",
        options: [
          "Masjidul Harom.",
          "Qubo masjidi.",
          "Masjidun Nabaviy.",
          "Al-Aqso masjidi.",
        ],
        correct: 1,
      },
      {
        q: "Makkada Hajar al-asvadni joyiga qo'yishda payg'ambarimiz (s.a.v.) qanday usulni qo'llaganlar?",
        options: [
          "Toshni o'zlari yolg'iz ko'tarib qo'yganlar.",
          "Toshni choponga qo'yib, barcha qabila boshliqlariga ko'tartirganlar.",
          "Eng kuchli pahlavonni chaqirib, unga buyurganlar.",
          "Qur'a tashlash yo'li bilan g'olibni aniqlaganlar.",
        ],
        correct: 1,
      },
      {
        q: "Muhammad (s.a.v.) necha yoshlarida Yasribga borib, u yerda otalarining qabrini ziyorat qilganlar?",
        options: ["6 yoshda.", "12 yoshda.", "25 yoshda.", "40 yoshda."],
        correct: 0,
      },
      {
        q: "Payg'ambarimiz (s.a.v.)ning otalari Abdulloh qayerda vafot etgan va dafn qilingan?",
        options: [
          "Makka shahrida.",
          "Yasrib (Madina) shahrida.",
          "Shom (Suriya) hududida.",
          "Habashiston o'lkasida.",
        ],
        correct: 1,
      },
      {
        q: "Diniy tashkilotlar qaysi holatlarda davlat boji to'lashdan ozod qilinishi mumkin?",
        options: [
          "Agar ular faqat xorijiy tillarni o'rgatsa.",
          "Qonunda belgilangan notijorat maqsadlar va ro'yxatdan o'tishda.",
          "Barcha diniy tashkilotlar har qanday bojdan doim ozoddir.",
          "Faqatgina katta bayramlar arafasida.",
        ],
        correct: 1,
      },
    ]),
  },

  topic4: {
    title: "4-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "Madinaga hijrat qilingandan so'ng, musulmonlar va mahalliy yahudiy qabilalari (Banu Qurayza, Banu Qaynuqo, Banu Nadir) o'rtasidagi munosabatlar qanday tartibga solingan?",
        options: [
          "Ular o'rtasida o'zaro harbiy ittifoq va sulh shartnomalari tuzilgan.",
          "Yahudiy qabilalari darhol islom dinini qabul qilishga majburlangan.",
          "Musulmonlar va yahudiylar o'rtasida hech qanday aloqa o'rnatilmagan.",
          "Yahudiy qabilalari Madinadan darhol haydab chiqarilgan.",
        ],
        correct: 0,
      },
      {
        q: "Hudaybiya sulhiga ko'ra, musulmonlar jamoasi Makkada necha kun davomida haj amallarini bajarish huquqiga ega edilar?",
        options: [
          "Bir hafta davomida.",
          "Faqat 3 kun davomida.",
          "Sulh muddati davomida (10 yil).",
          "Makkada qolish butunlay taqiqlangan edi.",
        ],
        correct: 1,
      },
      {
        q: "Payg'ambarimiz (s.a.v.)ning 632-yildagi 'Vidolashuv haji' (Hajjatul vido)da necha nafar musulmon ishtirok etgan?",
        options: [
          "Taxminan 10 ming nafar.",
          "Taxminan 90 ming nafar.",
          "Taxminan 500 ming nafar.",
          "Faqatgina makkalik musulmonlar.",
        ],
        correct: 1,
      },
      {
        q: "Payg'ambarimiz (s.a.v.) vafotidan so'ng, dastlabki ikki xalifa (Abu Bakr va Umar r.a.) davridagi ijtimoiy-siyosiy vaziyat qanday edi?",
        options: [
          "Turli diniy firqalar o'rtasida qurolli to'qnashuvlar boshlangan.",
          "Jamiyatda ichki nizolar va firqalanishlar kuzatilmagan.",
          "Hokimiyat uchun kurash sababli davlat ikkiga bo'lingan.",
          "Diniy masalalarda barcha fuqarolar o'zaro ixtilofga tushgan.",
        ],
        correct: 1,
      },
      {
        q: "Islom tarixida ichki siyosiy nizolar va ixtiloflar qaysi xalifa davrining so'nggi yillarida kuchaya boshladi?",
        options: [
          "Abu Bakr as-Siddiq (r.a.) davrida.",
          "Umar ibn Xattob (r.a.) davrida.",
          "Usmon ibn Affon (r.a.) davrida.",
          "Ali ibn Abu Tolib (r.a.) davrida.",
        ],
        correct: 2,
      },
      {
        q: "657-yilda Shom voliysi Muoviya va xalifa Ali (r.a.) tarafdorlari o'rtasida yuz bergan qurolli to'qnashuv qanday nomlanadi?",
        options: [
          "Badr jangi.",
          "Siffin jangi.",
          "Uhud jangi.",
          "Xandaq jangi.",
        ],
        correct: 1,
      },
      {
        q: "Islomdagi ilk bid'at va mutaassib firqa hisoblangan 'Xorijiylar' qaysi guruhdan ajralib chiqqan?",
        options: [
          "Makka mushriklari tarkibidan.",
          "Hazrat Ali (r.a.) tarafdorlari (shialar) tarkibidan.",
          "Shomlik savdogarlar jamoasidan.",
          "Habashistonga hijrat qilganlardan.",
        ],
        correct: 1,
      },
      {
        q: "Payg'ambarimiz (s.a.v.)ning mashhur hadislarida islom ummati necha firqaga bo'linishi aytilgan?",
        options: [
          "71 ta firqaga.",
          "72 ta firqaga.",
          "73 ta firqaga.",
          "99 ta firqaga.",
        ],
        correct: 2,
      },
      {
        q: "Hadisga ko'ra, 73 ta firqa ichida 'Najot topuvchi' (haq yo'ldagi) guruh qaysi biri hisoblanadi?",
        options: [
          "Xorijiylar.",
          "Ahli sunna val jamoa (Sunniylar).",
          "Mu'taziliylar.",
          "Jabariylar.",
        ],
        correct: 1,
      },
      {
        q: "Xorijiylarning aqidaviy talqiniga ko'ra, 'gunohi kabira' (katta gunoh) qilgan kishining hukmi qanday?",
        options: [
          "U mo'minligicha qoladi va tavba qilishi kerak.",
          "U kofirga aylanadi va uni o'ldirish joiz hisoblanadi.",
          "Uning hukmi oxiratda Allohga havola qilinadi.",
          "U faqat jamoat ishlaridan chetlatiladi.",
        ],
        correct: 1,
      },
      {
        q: "Shialik ta'limotida rahbarlik (Imomat) masalasi qanday tushuniladi?",
        options: [
          "Rahbar xalq tomonidan erkin saylanishi shart.",
          "Rahbarlik faqat Ali (r.a.) va uning avlodiga meros bo'lib o'tadi.",
          "Rahbarlikka har qanday taqvodor musulmon kelishi mumkin.",
          "Rahbarlik masalasi dinda muhim rukun hisoblanmaydi.",
        ],
        correct: 1,
      },
      {
        q: "Shialikda e'tiqod qilinadigan 5 ta asosiy aqidaning qaysi biri sunniylik aqidasiga butunlay zid?",
        options: [
          "Tavhid (Allohning birligi).",
          "Imomat (Imomlarning muqaddasligi va merosxo'rligi).",
          "Nubuvat (Payg'ambarlik).",
          "Qiyomat (Oxirat kuni).",
        ],
        correct: 1,
      },
      {
        q: "Mu'taziliylar ta'limotining asosiy o'ziga xosligi nimada aks etadi?",
        options: [
          "Faqatgina urf-odatlarga tayanishda.",
          "Aqida masalalarida aql va mantiqni ustun qo'yishda.",
          "Barcha hadislarni mutlaq inkor etishda.",
          "Dunyoviy bilimlarni o'rganishni taqiqlashda.",
        ],
        correct: 1,
      },
      {
        q: "Xalifa Ma'mun davrida davlat darajasiga ko'tarilgan va 'Qur'on yaratilgan' degan g'oyani ilgari surgan oqim?",
        options: [
          "Mu'taziliylar.",
          "Qadariylar.",
          "Xorijiylar.",
          "Jabariylar.",
        ],
        correct: 0,
      },
      {
        q: "Inson irodasini butunlay inkor etib, 'hamma narsa (yomonlik ham) oldindan belgilangan, inson majburiy ijrochi' degan g'oya qaysi oqimga tegishli?",
        options: ["Qadariylar.", "Jabariylar.", "Mu'taziliylar.", "Sunniylar."],
        correct: 1,
      },
      {
        q: "Qadariylar ta'limotiga ko'ra, insonning amallari va gunohlari qanday yuzaga keladi?",
        options: [
          "Allohning xohishi va taqdiri bilan.",
          "Faqat insonning o'z faoliyati va irodasi bilan (Allohni inkor qilgan holda).",
          "Ruhlar va g'ayritabiiy kuchlar ta'sirida.",
          "Jamiyatning iqtisodiy holatiga bog'liq holda.",
        ],
        correct: 1,
      },
      {
        q: "Mushabbihalar firqasining adashgan aqidasi nimadan iborat edi?",
        options: [
          "Allohni butunlay inkor etish.",
          "Allohni inson suratiga va a'zolariga o'xshatish (jism berish).",
          "Payg'ambarlarni xudo darajasiga ko'tarish.",
          "Faqatgina farishtalarga sig'inish.",
        ],
        correct: 1,
      },
      {
        q: "Sunniylikda (Ahli sunna val jamoa) rahbar yoki podshohga nisbatan qanday munosabat bildirilgan?",
        options: [
          "Zolim bo'lsa, darhol qurolli qo'zg'olon ko'tarish kerak.",
          "Fitna va qon to'kilishining oldini olish uchun podshohga qarshi chiqmaslik.",
          "Rahbarning barcha buyruqlarini diniy rukun deb qabul qilish.",
          "Rahbarlikni faqat diniy ulamolarga topshirish.",
        ],
        correct: 1,
      },
      {
        q: "Odamlarni kofirga chiqarish (takfir) va qurolli 'jihod' g'oyasi orqali terror amaliyotini boshlab bergan tarixiy guruh?",
        options: [
          "Mu'taziliylar.",
          "Xorijiylar.",
          "Qadariylar.",
          "Jabariylar.",
        ],
        correct: 1,
      },
      {
        q: "Payg'ambar (s.a.v.) davrida diniy-huquqiy masalalarda ixtiloflar bo'lmaganligining asosiy sababi nima?",
        options: [
          "Odamlar savol berishdan qo'rqqanlari uchun.",
          "Payg'ambarimiz barcha masalalarga bevosita aniq javob berganlari uchun.",
          "O'sha davrda qonunlar hali ishlab chiqilmagan edi.",
          "Barcha insonlarning bilimi bir xil darajada bo'lgani uchun.",
        ],
        correct: 1,
      },
      {
        q: "Shialikdagi 'Imomiylar' va 'Ismoiliylar' oqimlari bir-biridan qaysi jihatdan farq qiladi?",
        options: [
          "Qur'onning muqaddasligini tan olishda.",
          "Xalifalikni qaysi imom (avlod) davom ettirishi kerakligi masalasida.",
          "Namoz o'qish qoidalarida.",
          "Arab tilini muqaddas deb bilishda.",
        ],
        correct: 1,
      },
      {
        q: "Jabariylarning 'juz'iy ixtiyor' (inson erkinligi) masalasidagi pozitsiyasi qanday?",
        options: [
          "Inson o'z ixtiyoriga to'liq ega.",
          "Inson irodasi mutlaq rad etiladi, hamma narsa majburiydir.",
          "Inson va Alloh irodasi o'zaro tengdir.",
          "Faqatgina iqtisodiy masalalarda ixtiyor berilgan.",
        ],
        correct: 1,
      },
      {
        q: "Sunniylik belgilaridan biri - Sahobiylarga bo'lgan munosabat qanday tavsiflanadi?",
        options: [
          "Faqatgina Ali (r.a.)ni hurmat qilish.",
          "Barcha sahobiylarni yaxshi ko'rish va ularni kofirga chiqarmaslik.",
          "Sahobiylarning so'zlarini Qur'ondan ustun qo'yish.",
          "Sahobiylarning tarixiy rolini inkor etish.",
        ],
        correct: 1,
      },
      {
        q: "Mu'taziliylar oqimi nechanchi asrlarga kelib tarix sahnasidan deyarli yo'qolib ketgan?",
        options: [
          "7-8-asrlarda.",
          "13-14-asrlarda.",
          "19-20-asrlarda.",
          "Hozirgi kunda ham eng yirik oqim hisoblanadi.",
        ],
        correct: 1,
      },
      {
        q: "Xorijiylarning 'xalifalik' haqidagi qarashlariga ko'ra, kim xalifa bo'lishi mumkin?",
        options: [
          "Faqatgina Quraysh qabilasi vakili.",
          "Faqatgina Payg'ambar (s.a.v.)ning avlodi.",
          "Har qanday taqvodor musulmon (hatto qul bo'lsa ham).",
          "Faqatgina eng boy va nufuzli savdogar.",
        ],
        correct: 2,
      },
      {
        q: "Shialar nazoratidagi hududlarda hadislar qaysi manbalar asosida qabul qilingan?",
        options: [
          "Barcha sahobiylarning rivoyatlari.",
          "Faqat Ali (r.a.) va uning tarafdorlari tomonidan rivoyat qilingan hadislar.",
          "Yunon faylasuflarining asarlari.",
          "Faqatgina makkalik boylarning so'zlari.",
        ],
        correct: 1,
      },
      {
        q: "Hijriy 2-asrda (milodiy 8-asr) islomda mazhablarning paydo bo'lishiga nima turtki bo'ldi?",
        options: [
          "Siyosiy partiyalarning o'zaro kelishuvi.",
          "Shariat olimlari va ularning ilmiy maktablari (shogirdlari)ning shakllanishi.",
          "Xorijiy davlatlarning diniy bosimi.",
          "Qur'onning birinchi marta kitob holiga keltirilishi.",
        ],
        correct: 1,
      },
      {
        q: "Sunniy aqidaga ko'ra, Allohning sifatlarini (eshituvchi, ko'ruvchi va h.k.) talqin qilish qanday?",
        options: [
          "Bu sifatlarni butunlay inkor etish kerak.",
          "Sifatlarni tasdiqlash, lekin ularni insoniy a'zolarga o'xshatmaslik.",
          "Allohning sifatlari yo'q deb hisoblash.",
          "Sifatlarni faqat majoziy ma'noda tushunish shart.",
        ],
        correct: 1,
      },
      {
        q: "Xorijiylik mafkurasi natijasida islom olamida qanday salbiy holat ko'p kuzatilgan?",
        options: [
          "Iqtisodiy farovonlikning oshishi.",
          "Musulmonlar o'rtasida o'zaro qon to'kilishi va beqarorlik.",
          "Xalqaro savdoning rivojlanishi.",
          "Barcha insonlarning yagona bir firqaga birlashishi.",
        ],
        correct: 1,
      },
      {
        q: "Hozirgi kundagi 'ISHID' yoki 'Boko Haram' kabi tashkilotlar qaysi tarixiy firqaning zamonaviy ko'rinishi sifatida baholanadi?",
        options: [
          "Mu'taziliylarning.",
          "Xorijiylarning (neoxorijiylik).",
          "Shialarning.",
          "Jabariylarning.",
        ],
        correct: 1,
      },
    ]),
  },

  topic5: {
    title: "5-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "Arab tilida 'Shariat' so'zi qaysi ma'nolarni anglatadi?",
        options: [
          "Qonunlar to'plami va axloqiy me'yorlar.",
          "Oson va to'g'ri yo'l, suv ichish joyiga boradigan yo'l.",
          "Faqatgina ibodat qilish va tavba qilish usullari.",
          "Diniy jamoalarning o'zaro kelishuv bitimlari.",
        ],
        correct: 1,
      },
      {
        q: "Fiqh ilmining istilohiy ma'nosi va uning asosiy manbalari qaysi javobda to'g'ri ko'rsatilgan?",
        options: [
          "Shariatni tushunish; Qur'on, Sunnat, Ijmo va Qiyos.",
          "Tarixni o'rganish; Faqatgina Hadis va Ijmo.",
          "Mantiqiy xulosalar; Faqatgina ulamolar fatvolari.",
          "Tilshunoslikni bilish; Lug'at va grammatika qoidalari.",
        ],
        correct: 0,
      },
      {
        q: "Ahli sunna val jamoa doirasidagi ikki yirik aqidaviy mazhab (maktab) qaysilar?",
        options: [
          "Hanafiylik va Shofe'iylik.",
          "Moturidiylik va Ash'ariylik.",
          "Qadariya va Jabariya.",
          "Shialik va Xorijiylik.",
        ],
        correct: 1,
      },
      {
        q: "Imom Molik ibn Anasning 40 yil davomida tuzgan va eng ishonchli manbalardan biri hisoblangan asari nomi?",
        options: ["Al-Umm.", "Al-Muvatto.", "Ar-Risola.", "Al-Fiqh al-Akbar."],
        correct: 1,
      },
      {
        q: "Markaziy Osiyoda, xususan Toshkentda hijriy 3-4-asrlarda Shofe'iylik mazhabining yirik vakili kim bo'lgan?",
        options: [
          "Abu Mansur Moturidiy.",
          "Muhammad ibn Ali Qaffol Shoshiy.",
          "Imom al-Buxoriy.",
          "Burhoniddin Marg'inoniy.",
        ],
        correct: 1,
      },
      {
        q: "Mazhabsizlik (mazhablarni inkor qilish) g'oyasining asosiy xavfi nimada deb ko'rsatiladi?",
        options: [
          "Diniy matnlarni o'qishni qiyinlashtiradi.",
          "Asrlar davomida musulmonlar adashgan degan xato xulosaga yetaklaydi.",
          "Faqatgina iqtisodiy munosabatlarga zarar yetkazadi.",
          "Diniy ta'lim muassasalari sonini kamaytiradi.",
        ],
        correct: 1,
      },
      {
        q: "Toshkent shahri nechanchi yilda va qaysi tashkilot tomonidan 'Islom madaniyati poytaxti' deb e'lon qilingan?",
        options: [
          "2001-yil, YuNESKO tomonidan.",
          "2007-yil, ISESCO tomonidan.",
          "2010-yil, BMT tomonidan.",
          "2017-yil, Islom hamkorlik tashkiloti tomonidan.",
        ],
        correct: 1,
      },
      {
        q: "Imom al-Buxoriy islom olamida qanday yuksak unvon bilan ulug'langan?",
        options: [
          "Sulton al-orifin.",
          "Sahihlar shayxi (Imom al-Sahih).",
          "Shayxul islom.",
          "Hujjatul islom.",
        ],
        correct: 1,
      },
      {
        q: "Moturidiylik ta'limoti asosan qaysi manbalarga tayanadi?",
        options: [
          "Faqatgina aql va falsafiy mulohazalarga.",
          "Qur'on, Sunnat, Ijmo hamda aql va tafakkurga.",
          "Faqatgina qadimgi urf-odatlar va an'analarga.",
          "O'tmishdagi barcha diniy kitoblarning umumiy jamlanmasiga.",
        ],
        correct: 1,
      },
      {
        q: "Ash'ariylik va Moturidiylik o'rtasidagi asosiy umumiylik nimada?",
        options: [
          "Sunniylik doirasida aql va naql (vahy) muvozanatini saqlash.",
          "Inson irodasini (juz'iy ixtiyor) butunlay inkor etish.",
          "Hadislar o'rniga faqat falsafani afzal ko'rish.",
          "Diniy amallarni iymonning ajralmas qismi deb bilish.",
        ],
        correct: 0,
      },
      {
        q: "Sunniy aqidada 'Iymon' tushunchasi qanday tavsiflanadi?",
        options: [
          "Faqatgina tilda aytilgan so'zlar majmui.",
          "Alloh, Payg'ambarlar, Kitoblar, Farishtalar, Oxirat va Taqdirga ishonish.",
          "Faqatgina xayrli amallarni bajarishdan iborat jarayon.",
          "Insonning tabiat kuchlariga bo'lgan qo'rquvi va ehtiromi.",
        ],
        correct: 1,
      },
      {
        q: "Katta gunoh (gunohi kabira) qilgan musulmonning sunniy aqidadagi hukmi qanday?",
        options: [
          "U darhol dindan chiqadi (kofir bo'ladi).",
          "U musulmon hisoblanadi, lekin gunohi uchun osiy (gunohkor) bo'ladi.",
          "Uning hech qanday gunohi hisobga o'tilmaydi.",
          "U musulmonlikdan chiqmaydi, lekin dunyoviy jazolardan ham ozod bo'ladi.",
        ],
        correct: 1,
      },
      {
        q: "Diniy terminologiyada 'Takfir' tushunchasi nimani anglatadi?",
        options: [
          "Insonni diniy ilm olishga da'vat qilish.",
          "Musulmon kishini dindan chiqqanlikda (kofirlikda) ayblash.",
          "Gunohlar uchun kaforat to'lash jarayoni.",
          "Diniy matnlarni bir tildan ikkinchi tilga tarjima qilish.",
        ],
        correct: 1,
      },
      {
        q: "Soxta salafiylikning asosiy da'volaridan biri qaysi?",
        options: [
          "Mazhablarga qat'iy amal qilish zarurligi.",
          "Mazhablarni rad etish va faqat o'z talqinlari asosida 'payg'ambar asri'ga qaytish.",
          "Dunyo dinlarining barchasini teng deb tan olish.",
          "Diniy bilimlarni faqat zamonaviy fanlar orqali o'rganish.",
        ],
        correct: 1,
      },
      {
        q: "Mazhabga amal qilishning ijtimoiy barqarorlikdagi o'rni nimada?",
        options: [
          "Jamiyatda faqat bitta millatning ustunligini ta'minlash.",
          "Diniy hayotda tartibni saqlash va ixtiloflarning oldini olish.",
          "Barcha fuqarolarni majburan bir xil kiyinishga undash.",
          "Siyosiy hokimiyatni diniy ulamolarga topshirish.",
        ],
        correct: 1,
      },
      {
        q: "Islomda 'Ijtihod' qilish huquqi kimlarga beriladi?",
        options: [
          "Barcha xohlovchi musulmonlarga.",
          "Yetarli ilm, malaka va shartlarga ega bo'lgan mujtahid ulamolarga.",
          "Faqatgina davlat rahbarlari va vazirlarga.",
          "Faqatgina tarixchi olimlarga.",
        ],
        correct: 1,
      },
      {
        q: "O'z ijtihodiga ega bo'lmay, biror mazhab yoki olimning hukmiga ergashuvchi shaxs qanday ataladi?",
        options: ["Mujtahid.", "Muqallid.", "Mufassir.", "Muhaddis."],
        correct: 1,
      },
      {
        q: "Dinlararo bag'rikenglik (tolerantlik) tushunchasiga berilgan eng to'g'ri ta'rif qaysi?",
        options: [
          "Barcha dinlarni yagona bir dinga birlashtirish.",
          "Turli din vakillarining bir-birini hurmat qilib, hamjihat yashashi.",
          "Diniy e'tiqodlarni butunlay inkor etish.",
          "Faqat o'z dini vakillari bilan muloqot qilish.",
        ],
        correct: 1,
      },
      {
        q: "O'zbekiston Respublikasi Konstitutsiyasiga ko'ra davlat va din munosabati qanday?",
        options: [
          "Din davlat siyosatiga bevosita aralashadi.",
          "Din davlatdan ajratilgan, barcha dinlar qonun oldida teng.",
          "Davlat faqat bitta dinni moliyaviy qo'llab-quvvatlaydi.",
          "Diniy tashkilotlar davlat boshqaruvida ishtirok etishi shart.",
        ],
        correct: 1,
      },
      {
        q: "Dinshunoslik fanida 'Qiyosiy metod' nimani o'rganadi?",
        options: [
          "Faqat bitta dinning ichki qoidalarini.",
          "Dinlarning umumiy shakllari, o'zaro o'xshash va farqli jihatlarini.",
          "Diniy binolarning me'morchilik uslublarini.",
          "Diniy kitoblarning nashr etilish tarixini.",
        ],
        correct: 1,
      },
      {
        q: "Dinshunoslik fanida 'Konfessiya' atamasi qaysi tildan olingan va nima ma'noni bildiradi?",
        options: [
          "Yunoncha - bilim.",
          "Lotincha - e'tiqod qilish (diniy uyushma).",
          "Arabcha - bo'ysunish.",
          "Forscha - yo'l.",
        ],
        correct: 1,
      },
      {
        q: "Jahon dinlari qatoriga qaysi dinlar kiradi?",
        options: [
          "Yahudiylik, Hinduizm, Sintoizm.",
          "Buddaviylik, Xristianlik, Islom.",
          "Konfutsiylik, Daosizm, Zardushtiylik.",
          "Sikhizm, Jainizm, Shamanizm.",
        ],
        correct: 1,
      },
      {
        q: "Milliy dinlarga (ma'lum bir millatga mansub) qaysilar misol bo'ladi?",
        options: [
          "Islom va Xristianlik.",
          "Yahudiylik, Hinduizm va Sintoizm.",
          "Buddaviylik va Islom.",
          "Barcha jahon dinlari.",
        ],
        correct: 1,
      },
      {
        q: "Diniy ramzlarning jamiyatdagi asosiy vazifasi nima?",
        options: [
          "Faqatgina binolarga bezak berish.",
          "Diniy qadriyatlarni belgilar orqali ifodalash va birlikni mustahkamlash.",
          "Diniy tashkilotlarning iqtisodiy daromadini oshirish.",
          "Insonlarning milliy mansubligini yashirish.",
        ],
        correct: 1,
      },
      {
        q: "Islom huquqshunosligida 'Shariat' va 'Huquq' munosabati qanday izohlanadi?",
        options: [
          "Huquq shariatning asosi hisoblanadi.",
          "Shariat huquqning asosi, lekin huquq shariatning asosi emas.",
          "Ular o'rtasida hech qanday mantiqiy bog'liqlik yo'q.",
          "Dunyoviy huquq doimo shariatdan ustun turadi.",
        ],
        correct: 1,
      },
      {
        q: "Globallashuv sharoitida din omiliga bo'lgan qiziqishning ortishi nima bilan izohlanadi?",
        options: [
          "Ilm-fan rivojlanishining to'xtab qolganligi bilan.",
          "Insonlarning o'zligini anglash va ma'naviy tayanch izlashga bo'lgan intilishi bilan.",
          "Dunyo miqyosida iqtisodiy inqirozlarning ko'payganligi bilan.",
          "Dunyoviy qonunlarning butunlay bekor qilinishi bilan.",
        ],
        correct: 1,
      },
      {
        q: "Diniy marosim deganda nima tushuniladi?",
        options: [
          "Faqatgina qurbonlik qilish jarayoni.",
          "Individ yoki guruhlarning g'oya va e'tiqodlarini ifodalovchi harakatlar tizimi.",
          "Diniy kitoblarni ko'paytirish va tarqatish.",
          "Diniy ulamolarning o'zaro ilmiy bahslari.",
        ],
        correct: 1,
      },
      {
        q: "Dinshunoslik fanining obyekti sifatida nimalar qaraladi?",
        options: [
          "Faqatgina qadimiy ashyolar.",
          "Diniy manbalar, ta'limotlar, oqimlar va din bilan bog'liq hodisalar.",
          "Faqatgina siyosiy partiyalarning dasturlari.",
          "Faqatgina tabiiy hodisalar va ularning qonuniyatlari.",
        ],
        correct: 1,
      },
      {
        q: "Sunniy aqidada aql va naql (matn) munosabati qanday?",
        options: [
          "Aql naqldan ustun turadi.",
          "Naql birlamchi, aql esa uni tushunish va izohlash vositasidir.",
          "Aqlga ehtiyoj yo'q, faqat ko'r-ko'rona ergashish shart.",
          "Naql faqat tarixiy ma'lumot berish uchun xizmat qiladi.",
        ],
        correct: 1,
      },
      {
        q: "Muqaddas matnlarning (Qur'on va Hadis) asosiy ijtimoiy funksiyasi nima?",
        options: [
          "Insonlarni faqat o'tmish bilan yashashga majburlash.",
          "Ezgulikka chorlash, qadriyatlarni ajdodlardan avlodlarga yetkazish.",
          "Iqtisodiy foyda olish maqsadida xizmat qilish.",
          "Boshqa millatlarning madaniyatini inkor etish.",
        ],
        correct: 1,
      },
    ]),
  },
  topic6: {
    title: "6-Bo'lim",
    questions: randomizeQuestions([
      {
        q: "Din va fan o‘rtasidagi munosabat zamonaviy qomuslarda qanday talqin qilinadi?",
        options: [
          "Fan va din bir-birini inkor etuvchi, borliqning moddiy va ma'naviy qismlarini ajratuvchi qarama-qarshi qutblardir.",
          "Fan borliqning fizik qonuniyatlarini, din esa hayotning mazmuni va axloqiy tamoyillarini o‘rganuvchi to‘ldiruvchi omillardir.",
          "Islom ta'limotiga ko'ra, fan va din insoniyat intellektual hayotining faqatgina nazariy jihatlarini yoritishga xizmat qiladi.",
          "Fan faqatgina 'Nima uchun?' savoliga, din esa tabiat hodisalarining 'Qanday?' sodir bo'lishiga javob beruvchi tizimlardir.",
        ],
        correct: 1,
      },
      {
        q: "Diniy ekstremizm tushunchasining tub mohiyati qaysi javobda to‘g‘ri ko‘rsatilgan?",
        options: [
          "Diniy aqidalarni o‘ta radikal va ashaddiy talqin qilish orqali o‘z qarashlarini boshqalarga zo‘rlik bilan o‘tkazishga intilish.",
          "Jamiyatdagi ijtimoiy-siyosiy muammolarni hal qilishda diniy qadriyatlardan va milliy an'analardan unumli foydalanish.",
          "Muayyan diniy guruhlarning o‘z e'tiqodlarini himoya qilish maqsadida jamiyatdan va dunyoviy hayotdan butunlay ajralib chiqishi.",
          "Dindagi mavjud an'anaviy qarashlarni zamonaviy talablar asosida isloh qilish va ularni siyosiy manfaatlar yo'lida qo'llash.",
        ],
        correct: 0,
      },
      {
        q: "Radikalizm va ekstremizm o‘rtasidagi asosiy farq nimadan iborat?",
        options: [
          "Radikalizm faqat siyosiy sohadagi keskinlikni anglatadi, ekstremizm esa faqat diniy sohadagi buzg'unchi harakatlardir.",
          "Ekstremizm — bu g'oyaviy qarashlar darajasidagi keskinlik, radikalizm esa ushbu g'oyalarning amaliyotga ko'chgan shaklidir.",
          "Radikalizm — keskin choralarni yoqlash (qarashlar darajasidа), ekstremizm esa bu qarashlarning tajovuzkor harakatlarga ko'chishidir.",
          "Har ikkala tushuncha ham mohiyatan bir xil bo'lib, ular orasida na huquqiy va na mafkuraviy jihatdan hech qanday farq mavjud emas.",
        ],
        correct: 2,
      },
      {
        q: "Terrorizmning diniy niqob ostida namoyon bo‘lishining asosiy sabablari qaysilar?",
        options: [
          "Diniy bilimsizlik, muqaddas matnlarni noto‘g‘ri talqin qilish va siyosiy manfaatlarni din orqali oqlashga urinish.",
          "Global miqyosda turli din vakillari o'rtasida e'tiqodiy qarama-qarshiliklarning keskinlashishi va madaniyatsizlik.",
          "Diniy tashkilotlarning davlat boshqaruvidan chetlatilishi va jamiyatda dunyoviy ta'limning o'ta kuchayib ketishi.",
          "Xalqaro terroristik tashkilotlarning faqatgina iqtisodiy resurslarni qo'lga kiritish maqsadida dindan foydalanishi.",
        ],
        correct: 0,
      },
      {
        q: "Yoshlarning ekstremistik g‘oyalarga berilib ketishiga sabab bo‘luvchi psixologik-ijtimoiy omillar qaysi?",
        options: [
          "Diniy savodxonlikning yuqoriligi, oilaviy muhitning haddan tashqari barqarorligi va jamiyatdagi ijtimoiy adolat.",
          "Internetdagi manipulyatsiyalar, diniy savodsizlik va 'haqiqat izlash' jarayonida shubhali manbalarga duch kelish.",
          "Zamonaviy ta'lim muassasalarida diniy fanlarning o'tilmasligi va yoshlarning faqat dunyoviy bilimlar bilan cheklanishi.",
          "Chet tillarini mukammal bilmaslik natijasida xalqaro axborot maydonidagi ma'lumotlarni tahlil qila olmaslik.",
        ],
        correct: 1,
      },
      {
        q: "Diniy mutaassiblikning ijtimoiy oqibatlari jamiyat hayotiga qanday ta'sir ko'rsatadi?",
        options: [
          "Jamiyatning jipslashishi, diniy qadriyatlarning yanada mustahkamlanishi va ma'naviy yuksalishning tezlashishi.",
          "Fuqarolarning diniy huquqlari cheklanishi va davlatning din ishlariga aralashuvi natijasida yuzaga keladigan norozilik.",
          "Jamiyatning parchalanishi, boshqa din vakillariga nisbatan nafrat uyg‘onishi va barqarorlikning tizimli buzilishi.",
          "Ijtimoiy-iqtisodiy munosabatlarning yaxshilanishi va milliy an'analarning diniy aqidalar bilan uyg'unlashishi.",
        ],
        correct: 2,
      },
      {
        q: "Diniy bag‘rikenglikni mustahkamlashda zamonaviy ta’limning roli nimadan iborat?",
        options: [
          "Yoshlarda tanqidiy fikrlashni shakllantirish, turli madaniyatlar haqida xolis ma’lumot berish va muloqot madaniyatini o‘rgatish.",
          "Faqatgina muayyan bir dinning ustunligini isbotlash orqali yoshlarda boshqa dinlarga nisbatan himoya hissini shakllantirish.",
          "Ta'lim oluvchilarni diniy masalalardan butunlay uzoqlashtirish va ularni faqatgina texnik innovatsiyalarga yo'naltirish.",
          "Dunyoviy qonunlarning diniy qonunlardan ustunligini uzoq yillik tarixiy tajribalar va misollar orqali majburiy singdirish.",
        ],
        correct: 0,
      },
      {
        q: "Ommaviy axborot vositalarining diniy savodxonlikni oshirishdagi asosiy vazifasi nima?",
        options: [
          "Diniy arboblarning shaxsiy hayotini yoritish va ularning jamiyatdagi nufuzini oshirishga xizmat qiluvchi materiallar tayyorlash.",
          "Xalqqa xolis diniy ma’lumotlarni yetkazish, aqidaparastlikning zararli mohiyatini ochish va totuvlikni targ‘ib qilish.",
          "Internet tarmog'idagi barcha diniy kontentlarni bloklash va faqatgina davlat tomonidan tasdiqlangan ma'lumotlarni tarqatish.",
          "Turli diniy konfessiyalar o'rtasidagi aqidaviy farqlarni batafsil tahlil qilish orqali bahs-munozara maydonini yaratish.",
        ],
        correct: 1,
      },
      {
        q: "Internetda diniy targ‘ibotning xavfli jihatlari qaysi javobda to‘liq ko‘rsatilgan?",
        options: [
          "Ma’lumotlarning tekshirilmaganligi, hissiyotga asoslangan 'miyani yuvish' va ekstremistik materiallarning tez tarqalishi.",
          "Diniy ma'lumotlarning haddan tashqari ko'pligi va ularni o'rganish uchun ko'p vaqt sarflanishi natijasida yuzaga keladigan charchoq.",
          "Ijtimoiy tarmoqlarda diniy guruhlarning o'zaro fikr almashishi va an'anaviy islom qadriyatlarining keng targ'ib qilinishi.",
          "Internet tezligining pastligi va barcha fuqarolarning ham diniy mazmundagi elektron resurslardan foydalana olmasligi.",
        ],
        correct: 0,
      },
      {
        q: "Diniy sohada profilaktik ishlar qaysi tamoyil asosida olib borilishi samarali hisoblanadi?",
        options: [
          "Faqatgina ma'muriy jazo choralarini qo'llash va ekstremistik g'oyalarga moyil shaxslarni jamiyatdan ajratib qo'yish orqali.",
          "'Jaholatga qarshi ma’rifat' tamoyili asosida tushuntirish, muloqot va sog‘lom diniy muhitni yaratish orqali.",
          "Yoshlarning diniy ehtiyojlarini cheklash va ularni majburiy ravishda faqat sport va madaniyat tadbirlariga jalb qilish orqali.",
          "Diniy ta'lim muassasalarini yopish va barcha diniy marosimlarni faqat mahalla nazorati ostida o'tkazishni joriy etish orqali.",
        ],
        correct: 1,
      },
      {
        q: "Davlatning ekstremizmga qarshi siyosati ustuvor ravishda nimaga qaratilgan?",
        options: [
          "Diniy tashkilotlar faoliyatini to'liq to'xtatish va jamiyatda faqat dunyoviy mafkurani majburiy targ'ib qilishga.",
          "Konstitutsiyaviy tuzumni himoya qilish, tinchlikni ta’minlanish va buzg‘unchi g‘oyalar tarqalishining oldini olishga.",
          "Faqatgina xorijiy davlatlardan kelayotgan diniy adabiyotlarni nazorat qilish va chegaralarda bojxona nazoratini kuchaytirishga.",
          "Fuqarolarning vijdon erkinligi huquqini cheklash orqali barcha diniy jarayonlarni davlat organlariga bo'ysundirishga.",
        ],
        correct: 1,
      },
      {
        q: "Fuqarolik jamiyati institutlarining (NNT, Mahalla) ekstremizmga qarshi kurashdagi vazifasi nima?",
        options: [
          "Huquqbuzarlik sodir etgan shaxslarni aniqlash va ularga nisbatan sud qarorisiz ma'muriy jazo choralarini qo'llash.",
          "Ijtimoiy nazoratni o‘rnatish, muammoli oilalarga yordam berish va sog‘lom turmush tarzini keng targ‘ib qilish.",
          "Diniy ta'lim muassasalari uchun o'quv dasturlarini ishlab chiqish va ularni davlat organlari bilan kelishish.",
          "Faqatgina diniy bayramlarni tashkil etish va aholi o'rtasida xayriya tadbirlarini o'tkazish bilan cheklanish.",
        ],
        correct: 1,
      },
      {
        q: "Oila muhitining diniy tarbiyadagi va mafkuraviy himoyadagi ahamiyati qanday?",
        options: [
          "Oila faqat iqtisodiy ta'minot manbai bo'lib, bolaning diniy dunyoqarashi faqat maktab va jamoat joylarida shakllanadi.",
          "Ota-onaning dunyoqarashi va bergan tarbiyasi bolaning yot g'oyalarga qarshi diniy 'immuniteti' bo'lib xizmat qiladi.",
          "Diniy tarbiya faqat maxsus ta'lim muassasalarida berilishi kerak, oilada bu haqda gapirish bolaning dunyoviy rivojlanishiga xalaqit beradi.",
          "Oiladagi diniy muhit qanchalik qat'iy va cheklovlarga boy bo'lsa, bolaning ekstremistik g'oyalarga qarshi chidamliligi shunchalik ortadi.",
        ],
        correct: 1,
      },
      {
        q: "Mahalla institutining yoshlarni 'yot g‘oyalar'dan asrashdagi roli qaysi javobda to‘g‘ri ifodalangan?",
        options: [
          "Yoshlarning har bir qadamini nazorat qilish va ularning shaxsiy hayotiga aralashish orqali xavfni bartaraf etish.",
          "Yoshlarning xulqini kuzatish, jamoat ishlariga jalb qilish va adashganlarni sog‘lom hayotga qaytarishda ko‘maklashish.",
          "Faqatgina profilaktik hisobda turgan yoshlar bilan ishlash va ularni doimiy ravishda huquq-tartibot organlariga hisobot berishga majburlash.",
          "Mahalla hududidagi barcha yoshlarning internetdan foydalanishini cheklash va ularni faqat jismoniy mehnatga yo'naltirish.",
        ],
        correct: 1,
      },
      {
        q: "Diniy ta’lim muassasalari oldida turgan dolzarb vazifa qaysi variantda ko'rsatilgan?",
        options: [
          "Faqatgina o'tmishdagi diniy manbalarni yodlatish va zamonaviy dunyoviy fanlarni o'qitishdan butunlay voz kechish.",
          "Zamon talablariga javob beradigan, ham diniy, ham dunyoviy bilimlarni chuqur egallagan kadrlar tayyorlash.",
          "Diniy xizmatchilarni faqatgina marosimlarni o'tkazishga tayyorlash va ularning ijtimoiy faolligini pasaytirish.",
          "Xalqaro diniy markazlarning barcha o'quv dasturlarini o'zgartirishsiz mahalliy ta'lim tizimiga joriy etish.",
        ],
        correct: 1,
      },
      {
        q: "Imom-xatib va diniy ulamolarning jamiyat barqarorligidagi asosiy mas’uliyati nimadan iborat?",
        options: [
          "Xalqqa sof islom ta’limotini yetkazish, adashganlarni yo‘lga solish va ma’naviy barqarorlikni saqlash.",
          "Faqatgina diniy adabiyotlarni nashr etish va ularni aholi o'rtasida pullik asosda tarqatish ishlarini tashkil qilish.",
          "Davlat boshqaruvi organlarining ishiga aralashish va qonun chiqaruvchi hokimiyatda diniy qoidalarni joriy etish.",
          "Jamiyatdagi barcha ijtimoiy muammolarni faqatgina duolar va diniy marosimlar orqali hal qilishga chaqirish.",
        ],
        correct: 0,
      },
      {
        q: "Soxta diniy targ‘ibotning asosiy belgilariga nimalar kiradi?",
        options: [
          "Jamiyatda tinchlikni targ'ib qilish, milliy qadriyatlarni hurmat qilish va boshqa mazhablarga nisbatan bag'rikeng bo'lish.",
          "Boshqalarni kofirlikda ayblash (takfir), davlat qonunlariga qarshi chiqish va faqat o‘zlarini 'haq yo‘lda' deb bilish.",
          "Ilm-fanni o'rganishga chaqirish, zamonaviy texnologiyalardan din yo'lida foydalanish va xayriya ishlarini ko'paytirish.",
          "Diniy matnlarni tarixiy kontekstda o'rganish va ularni bugungi kun ijtimoiy hayotiga moslashtirishga harakat qilish.",
        ],
        correct: 1,
      },
      {
        q: "An’anaviy islom tushunchasi nimani anglatadi?",
        options: [
          "Islom dinining shakllanish davridagi barcha qonun-qoidalarni bugungi kunda ham aynan, o'zgarishsiz qo'llashni.",
          "Muayyan mintaqada asrlar davomida shakllangan, mahalliy urf-odatlar bilan uyg‘unlashgan va radikalizmga begona tushuncha.",
          "Faqatgina arab davlatlari uchun xos bo'lgan va boshqa xalqlar madaniyatini inkor etuvchi sof diniy qarashlar majmuasi.",
          "Diniy aqidalarni siyosiy maqsadlar yo'lida o'zgartirgan va xalqaro tashkilotlar tomonidan e'tirof etilgan yangi diniy oqim.",
        ],
        correct: 1,
      },
      {
        q: "An’anaviy islomning asosiy xususiyatlari qaysi javobda to'g'ri sanab o'tilgan?",
        options: [
          "Motalidlik (vazminlik), bag‘rikenglik, mazhablarga amal qilish va milliy qadriyatlarni hurmat qilish.",
          "Qat'iy aqidaparastlik, boshqa din vakillarini inkor etish va faqatgina o'z mazhabini ustun deb hisoblash.",
          "Dunyoviy hayotdan butunlay voz kechish, faqat oxirat amallari bilan band bo'lish va ilm-fanni rad etish.",
          "Siyosiy radikalizmga moyillik, milliy urf-odatlarni dindan tashqari deb hisoblash va ularga qarshi kurashish.",
        ],
        correct: 0,
      },
      {
        q: "Markaziy Osiyoda an’anaviy islom shakllanishiga ta’sir ko‘rsatgan fundamental omillar qaysilar?",
        options: [
          "Faqatgina hududning iqlim sharoiti va aholining ko'chmanchi hayot tarzidan o'troq hayotga o'tish jarayoni.",
          "Ipak yo‘lidagi madaniy almashinuvlar, buyuk mutafakkirlar merosi va Hanafiya mazhabining keng qamrovliligi.",
          "Xorijiy bosqinlar natijasida majburiy singdirilgan diniy qarashlar va mahalliy aholining e'tiqodiy qarshiliklari.",
          "Mintaqadagi tabiiy boyliklar uchun kurash va diniy markazlarning iqtisodiy manfaatlar yo'lidagi o'zaro kelishuvlari.",
        ],
        correct: 1,
      },
      {
        q: "Hanafiya mazhabining Markaziy Osiyo mintaqasida keng tarqalishining fundamental sababi nima?",
        options: [
          "Inson huquqlariga e’tiborliligi, mantiqiy yondashuvning ustuvorligi va mahalliy urf-odatlarga (urf tamoyili) tolerantligi.",
          "Mintaqadagi siyosiy rahbarlarning faqat ushbu mazhab vakillariga davlat lavozimlarini berish haqidagi qat'iy talabi.",
          "Boshqa mazhablarga nisbatan ibodat amallarining o'ta soddaligi va barcha diniy manbalarning faqat mahalliy tilda yozilganligi.",
          "Arab xalifaligi davrida mintaqaga kelgan barcha ulamolarning faqat Hanafiya huquqiy maktabiga mansub bo'lganligi.",
        ],
        correct: 0,
      },
      {
        q: "Imom Moturidiy asos solgan moturidiylik ta'limotining mintaqa ma'naviy hayotidagi o'rni qanday baholanadi?",
        options: [
          "Islom aqidasini faqatgina hissiy va botiniy kechinmalar orqali tushuntirishga harakat qilib, ilmiy yondashuvni cheklagan.",
          "Diniy qarashlarni davlat siyosatiga to'liq bo'ysundirish va ijtimoiy hayotda faqatgina dunyoviy qonunlarni ustuvor deb bilish.",
          "Islom aqidasini aql va naql (Qur’on va Sunnat) asosida tizimlashtirib, mintaqada aqidaviy barqarorlikni ta’minlagan.",
          "Mavjud barcha diniy nizolarni faqatgina huquqiy normalar orqali hal qilishni taklif etgan mantiqiy tizim hisoblanadi.",
        ],
        correct: 2,
      },
      {
        q: "Hanafiylikdagi 'Urf' tushunchasi mahalliy an'analar va din uyg'unligini qanday ta'minlagan?",
        options: [
          "Shariatga zid bo‘lmagan milliy an’analar diniy hayotning ajralmas qismi sifatida qabul qilinishiga zamin yaratgan.",
          "Milliy urf-odatlarning shariat qoidalaridan ustun ekanligini e'tirof etib, dinni millatga moslashtirishga xizmat qilgan.",
          "Mahalliy an'analarni vaqtinchalik qabul qilib, keyinchalik ularni butunlay islomiy qoidalar bilan almashtirishni nazarda tutgan.",
          "Diniy marosimlarni faqat milliy qadriyatlar asosida o'tkazishni va shariatning qat'iy ko'rsatmalaridan voz kechishni anglatgan.",
        ],
        correct: 0,
      },
      {
        q: "O'zbek xalqining milliy o'zligi va islomiy qadriyatlar bog'liqligi qaysi jihatlarda ko'proq namoyon bo'ladi?",
        options: [
          "Faqatgina diniy bayramlarni nishonlashda va masjidlar atrofida ijtimoiy yig'ilishlarni tashkil etishda.",
          "Til, adabiyot, san’at va kundalik hayot tarzining islomiy tamoyillar bilan chambarchas bog‘liq holda shakllanganligida.",
          "Mintaqada faqat islom diniga xos bo'lgan me'moriy obidalarning saqlanib qolganligi va ularning davlat tomonidan muhofaza qilinishida.",
          "Aholining barcha qatlamlari tomonidan diniy liboslarning milliy libos sifatida qabul qilinishi va ommalashuvida.",
        ],
        correct: 1,
      },
      {
        q: "Mustaqillik yillarida O‘zbekistonda diniy sohada amalga oshirilgan islohotlarning bosh maqsadi nima?",
        options: [
          "Diniy tashkilotlar sonini ko'paytirish orqali mintaqada diniy markazga aylanish va siyosiy ta'sirni oshirish.",
          "Diniy qadriyatlarni tiklash, allomalar merosini o'rganish va vijdon erkinligini qonuniy kafolatlash.",
          "Jamiyatni to'liq diniy boshqaruv tizimiga o'tkazish va dunyoviy ta'limni diniy ta'lim bilan almashtirish.",
          "Xalqaro tashkilotlarning talablarini bajarish maqsadida diniy sohadagi barcha cheklovlarni bir tomonlama bekor qilish.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekistonda faoliyat yuritayotgan konfessiyalararo totuvlikning huquqiy asosi qaysi javobda to'g'ri ko'rsatilgan?",
        options: [
          "Faqatgina diniy konfessiyalar kengashining ichki nizomi va diniy arboblarning o'zaro kelishuvi.",
          "Xalqaro huquqiy normalarning mahalliy qonunchilikdan ustunligi haqidagi deklarativ hujjatlar.",
          "'Vijdon erkinligi va diniy tashkilotlar to'g'risida'gi qonun va Konstitutsiyaviy normalar.",
          "Diniy tashkilotlarning davlat organlaridan to'liq mustaqilligi haqidagi ijtimoiy shartnoma tamoyillari.",
        ],
        correct: 2,
      },
      {
        q: "O‘zbekistondagi diniy bag‘rikenglik siyosatining o'ziga xos jihati nimada?",
        options: [
          "Barcha din vakillariga teng huquqlar berish, dinlararo muloqot va millatlararo totuvlikni davlat darajasida qo'llashda.",
          "Faqatgina islom dini vakillari uchun maxsus imtiyozlar yaratish va boshqa dinlarni e'tibordan chetda qoldirishda.",
          "Jamiyatdagi barcha diniy jarayonlarni faqat huquq-tartibot organlari nazorati ostida amalga oshirishda.",
          "Diniy bag'rikenglikni faqat turizm salohiyatini oshirish vositasi sifatida qo'llash va uni targ'ib qilishda.",
        ],
        correct: 0,
      },
      {
        q: "Dinlararo muloqot nima uchun zamonaviy jamiyat barqarorligi uchun muhim omil hisoblanadi?",
        options: [
          "Diniy qarashlar o'rtasidagi aqidaviy farqlarni butunlay yo'qotish va yagona jahon dinini yaratish uchun.",
          "O‘zaro ishonchni mustahkamlash, nizolarning oldini olish va umuminsoniy muammolarni birgalikda hal qilish uchun.",
          "Turli din vakillarini siyosiy maqsadlar yo'lida birlashtirish va ulardan saylov jarayonlarida foydalanish uchun.",
          "Diniy tashkilotlar o'rtasida iqtisodiy raqobatni kuchaytirish va ularning moliyaviy barqarorligini ta'minlash uchun.",
        ],
        correct: 1,
      },
      {
        q: "Xalqaro hamjamiyat O‘zbekistonning diniy sohadagi islohotlarini qanday mezon asosida ijobiy baholagan?",
        options: [
          "Aholining barcha qatlamlarini majburiy diniy ta'limga jalb qilgani va yangi madrasalar ochgani uchun.",
          "O‘zbekistonning 'alohida xavotirdagi davlatlar' ro‘yxatidan chiqarilishi va diniy erkinlikning ta'minlanishi asosida.",
          "Faqatgina diniy turizm sohasida erishilgan iqtisodiy natijalar va xorijiy investitsiyalarning jalb qilinishi bilan.",
          "Diniy adabiyotlarning senzurasiz nashr etilishi va barcha diniy oqimlarga cheksiz erkinlik berilganligi sababli.",
        ],
        correct: 1,
      },
      {
        q: "Sharq uyg'onish davri (Renessans) ning yuzaga kelishida islomiy qaysi tamoyil asosiy turtki bo'lgan?",
        options: [
          "Faqatgina diniy matnlarni sharhlash va ularni yod olish orqali ma'naviy kamolotga erishish g'oyasi.",
          "'Ilm izlash barcha uchun farz' degan tamoyil orqali dunyoviy va diniy bilimlarni egallashga bo'lgan intilish.",
          "Boshqa madaniyatlarning ilmiy yutuqlarini inkor etgan holda, faqat islomiy kashfiyotlarga tayanish tamoyili.",
          "Diniy ulamolarning siyosiy hokimiyatni boshqarishi va barcha mablag'larni ilm-fanga yo'naltirish haqidagi qarori.",
        ],
        correct: 1,
      },
      {
        q: "Ibn Sino va al-Xorazmiy kabi allomalarning islom sivilizatsiyasidagi o'rnini qanday ifodalash mumkin?",
        options: [
          "Ular faqatgina diniy huquq (fiqh) sohasida asarlar yozib, islom sivilizatsiyasining huquqiy asoslarini yaratganlar.",
          "Islom sivilizatsiyasini matematika, tibbiyot va boshqa fundamental fanlar orqali jahon madaniyati darajasiga ko'targanlar.",
          "Faqat yunon falsafasini tarjima qilish bilan shug'ullanib, islom dunyosiga begona g'oyalarni olib kirganlar.",
          "Diniy qarashlar va ilm-fan o'rtasida katta tafovut borligini isbotlashga harakat qilgan erkin fikrli olimlar bo'lganlar.",
        ],
        correct: 1,
      },
      {
        q: "Qur’ondagi 'Dinda zo‘rlash yo‘q' (Baqara, 256) tamoyili islomda qanday tushuniladi?",
        options: [
          "Inson o'z xohishi bilan dinni tanlashi, e'tiqod erkinligi va boshqa din vakillariga nisbatan tajovuz qilmaslik asosi sifatida.",
          "Diniy qoidalarni bajarishda sustkashlikka yo'l qo'yish mumkinligi va ibodatlarning ixtiyoriy ekanligi haqidagi ruxsat sifatida.",
          "Faqatgina islom diniga kirganlar uchun jazo choralari qo'llanilmasligi va boshqalarga nisbatan majburlov qo'llash ruxsati sifatida.",
          "Diniy nizolarni hal qilishda hech qanday qonuniy kuch ishlatmaslik va hamma narsani o'z holiga tashlab qo'yish tamoyili sifatida.",
        ],
        correct: 0,
      },
      {
        q: "Islom sivilizatsiyasida 'tinchlik' (salom) tushunchasi huquqiy jihatdan qanday asoslangan?",
        options: [
          "Tinchlik faqatgina musulmon davlatlar o'rtasida bo'lishi kerakligi haqidagi qat'iy talab orqali.",
          "Bir insonni asossiz o‘ldirish butun insoniyatni o‘ldirish bilan tengligi haqidagi g‘oyalar va inson hayotining muqaddasligi orqali.",
          "Faqatgina harbiy harakatlar to'xtatilgan vaqtdagina tinchlikni saqlash lozimligi haqidagi vaqtinchalik tavsiyalar orqali.",
          "Dunyodagi barcha insonlarni islom diniga kiritish orqali umumiy tinchlikka erishish mumkinligi haqidagi nazariya orqali.",
        ],
        correct: 1,
      },
      {
        q: "Diniy nizolarni hal etishda 'ma'rifiy tushuntirish' ishlarining afzalligi nimada?",
        options: [
          "Muammoni ildizini — jaholatni bartaraf etish, muloqot va diplomatiya orqali barqaror tinchlikka erishish imkoniyatida.",
          "Nizo tarafdorlarini qo'rqitish va ularga nisbatan diniy fatvolar orqali bosim o'tkazishning samarali yo'li ekanligida.",
          "Diniy nizolarni dunyoviy sudlarga yetkazmasdan, faqatgina masjidlar darajasida yashirincha hal qilish imkoniyatida.",
          "Barcha nizoli masalalarni faqat bitta din foydasiga hal qilish va boshqalarni murosaga majburlash usuli ekanligida.",
        ],
        correct: 0,
      },
      {
        q: "Zamonaviy jamiyatda dinning 'yupatish' (psixologik madad) funksiyasi qanday namoyon bo'ladi?",
        options: [
          "Insonlarning real hayotiy muammolaridan qochishiga va faqat tasavvufiy dunyoga sho'ng'ishiga yordam berishida.",
          "Og'ir damlarda insonga ma'naviy kuch berish, hayot mazmunini anglash va tushkunlikdan chiqishda ruhiy tayanch bo'lishida.",
          "Barcha ijtimoiy va sog'liq muammolarini shifokorlarga bormasdan, faqat diniy rasm-rusumlar orqali hal qilishda.",
          "Insonlarni jamiyatdagi tengsizlikka ko'nishga majburlash va ularni faqatgina taqdirga tan berish ruhida tarbiyalashda.",
        ],
        correct: 1,
      },
      {
        q: "Islom sivilizatsiyasi markazi va Imom Buxoriy xalqaro ilmiy-tadqiqot markazining tashkil etilishidan ko'zlangan asosiy maqsad nima?",
        options: [
          "Diniy adabiyotlarni xorijga eksport qilish va mintaqada diniy kitob savdosini rivojlantirish.",
          "Islom dinining insonparvarlik mohiyatini ilmiy asosda tadqiq etish va boy madaniy merosni xalqaro miqyosda targ'ib qilish.",
          "Faqatgina din xizmatchilari uchun malaka oshirish kurslarini tashkil etish va ularni imtihondan o'tkazish.",
          "Mintaqadagi barcha tarixiy obidalarni diniy tashkilotlar tasarrufiga o'tkazish va ulardan foydalanish tartibini belgilash.",
        ],
        correct: 1,
      },
      {
        q: "O‘zbekistonda dinlararo totuvlikning ramzi sifatida qabul qilingan 'O‘zbekiston — umumiy uyimiz' g‘oyasining mazmuni nima?",
        options: [
          "Mamlakatda faqat bitta millat va bitta din vakillari yashashi kerakligi haqidagi g'oya.",
          "Millati va dinidan qat'i nazar barcha fuqarolarning tinch-totuv yashashi va mamlakat ravnaqi yo'lida birlashishi.",
          "Turli din vakillarining o'z madaniyatidan voz kechib, umumiy bir madaniyatga bo'ysunishi haqidagi tushuncha.",
          "Barcha diniy bayramlarni bitta umumiy kalendar asosida nishonlash va diniy farqlarni inkor etish g'oyasi.",
        ],
        correct: 1,
      },
      {
        q: "Diniy bayramlar va marosimlarda milliy an'analarning uyg'unlashishi qanday ijtimoiy natija beradi?",
        options: [
          "Diniy qoidalarning buzilishiga va dinning o'z asl qiyofasini yo'qotishiga olib keladi.",
          "Dinning xalqchil bo'lishiga, ma'naviy qadriyatlarning avloddan-avlodga tabiiy o'tishiga va ijtimoiy birdamlikka xizmat qiladi.",
          "Aholi o'rtasida ortiqcha sarf-xarajatlarning ko'payishiga va iqtisodiy qiyinchiliklarning yuzaga kelishiga sabab bo'ladi.",
          "Diniy va dunyoviy odamlar o'rtasida tushunmovchiliklar kelib chiqishiga va jamiyatning tabaqalanishiga olib keladi.",
        ],
        correct: 1,
      },
      {
        q: "Islomda axloqiy tarbiyaning jamiyat barqarorligidagi o'rni nimalarda ko'rinadi?",
        options: [
          "Faqatgina kattalarga hurmat va kichiklarga izzat ko'rsatish kabi umumiy qoidalarni targ'ib qilishda.",
          "Insonning xulq-atvorini ichki nazorat (vijdon va iymon) orqali tartibga solishda va jinoyatchilikning oldini olishda.",
          "Insonlarni barcha ijtimoiy faollikdan to'xtatish va ularni faqatgina shaxsiy ma'naviy poklanishga yo'naltirishda.",
          "Jamiyatda faqatgina diniy qonunlar bilan ish yuritishga va dunyoviy qonunlarni inkor etishga chorlashda.",
        ],
        correct: 1,
      },
      {
        q: "Diniy sohadagi xalqaro hamkorlikning terrorizmga qarshi kurashdagi ahamiyati nimada?",
        options: [
          "Barcha davlatlarning harbiy salohiyatini birlashtirish va diniy guruhlarga qarshi faqat kuch ishlatish choralarini qo'llash.",
          "Mafkuraviy bo'shliqni to'ldirish, tajriba almashish va 'jaholatga qarshi ma'rifat' bilan kurashish strategiyasini ishlab chiqishda.",
          "Xorijiy diniy tashkilotlarning mahalliy ishlariga aralashishiga yo'l ochish va ularning ko'rsatmalarini bajarishda.",
          "Diniy sohadagi hamkorlik orqali faqatgina iqtisodiy foyda ko'rish va qurol-yarog' savdosini nazorat qilishda.",
        ],
        correct: 1,
      },
    ]),
  },

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
};
