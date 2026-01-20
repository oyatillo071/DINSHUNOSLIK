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
};
