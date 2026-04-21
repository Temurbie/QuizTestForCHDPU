interface IJavob {
    matn: string;
    correct: boolean;
}

export interface ITest {
    id: number
    savol: string;
    javob: IJavob[]; 
}

export const DATATEST : ITest[] = [
    {
        id : 1,
        savol : 'Hozirgi zamon boshlan gʻich ta’limida tarbiya jarayonining zamonaviy omillari mavjud b oʻ lib, ularni  quyidagi ikki turda tasavvur qilish mumkin. Ular qaysilar?',
        javob : [{
            matn : 'real sharoitlar va imkoniyatlarni hisobga olish; tarbiya jarayonini amlga oshirish resurslarini aniqlash ', correct : false,
        },
        {
            matn : 'bola   tarbiyasida   oilaga   pedagogi k - metodologik   yordam   k oʻ rsatish ;  boshlan gʻ ich   ta ’ limda   tarbiyaning  maqsadli va t oʻgʻ ri tashkil qilinganligi', correct: false
        },
        {
            matn : 'an ’ naviy sharoitlarda tarbiya jarayonini amalga oshirish; ijtimoiy murakkab sharoitlarda tarbiya jarayonini  amalga oshirish.', correct : true
        },
        {
            matn : 't oʻgʻ ri javob y oʻ q', correct: false
        }
    ]
    },
    {
        id: 2,
        savol: 'Boshlangʻich taʼlimda tarbiya jarayonining zamonaviy omillari metodologiyasini tashkil qiluvchilar qaysi qatorda toʻgʻri koʻrsatilgan?',
        javob: [
      {
        matn: 'shaxs va jamiyatning boshlangʻich taʼlimdan manfaatdorligi',
        correct: true,
      },
      {
        matn: 'bolani jismoniy oʻstirish va estetik ongini shakllantirish',
        correct: false,
      },
      {
        matn: 'bola tarbiyasida oilaga pedagogik-metodologik yordam koʻrsatish',
        correct: false,
      },
      {
        matn: 'boshlangʻich taʼlimda tarbiyaning maqsadli va toʻgʻri tashkil qilinganligi',
        correct: false,
      }
    ]
    },
    {
    id: 3,
    savol: 'Boshlangʻich taʼlimida tarbiyani amalga oshirishning samaradorligini baholashga doir yagona yondashuv bu ...?',
    javob: [
      {
        matn: 'boshlangʻich taʼlimda tarbiya jarayoni konkret modelga ega',
        correct: false,
      },
      {
        matn: 'boshlangʻich taʼlimda tarbiyani amalga oshirishning samaradorligini baholashga doir yagona yondashuv yoʻq',
        correct: true,
      },
      {
        matn: 'boshlangʻich taʼlimda tarbiyaning maqsadli va toʻgʻri tashkil qilinganligi',
        correct: false,
      },
      {
        matn: 'boshlangʻich taʼlim bitiruvchisining ijtimoiylashganligi',
        correct: false,
      }
    ]
    },
    {
    id: 4,
    savol: 'Indikator – bu...?',
    javob: [
      {
        matn: 'boshlangʻich taʼlimni moliyalashtirish darajasi',
        correct: false,
      },
      {
        matn: 'boshlangʻich sinf oʻquvchilarining oʻzlashtirish darajasi',
        correct: false,
      },
      {
        matn: 'muayyan holat yoki darajani baholash belgilari',
        correct: true,
      },
      {
        matn: 'boshlangʻich taʼlimni rivojlantirish strategiyasi',
        correct: false,
      }
    ]
  },
  {
    id: 5,
    savol: 'Yaponiyada boshlangʻich taʼlim necha yilni tashkil qiladi?',
    javob: [
      {
        matn: '4 yil',
        correct: false,
      },
      {
        matn: '5 yil',
        correct: false,
      },
      {
        matn: '6 yil',
        correct: true,
      },
      {
        matn: '7 yil',
        correct: false,
      }
    ]
  },
   {
    id: 6,
    savol: 'Yevropa mamlakatlarining boshlangʻich taʼlimida asosiy umumiyliklar mavjudligi qaysi qatorda toʻgʻri koʻrsatilgan?',
    javob: [
      {
        matn: 'boshlangʻich taʼlim boʻyicha hamkorlikning keng yoʻlga qoʻyilganligi',
        correct: true,
      },
      {
        matn: 'algoritmik daraja (oʻquvchilarning mavzuni xotirasida yaxshi saqlab qolishi)',
        correct: false,
      },
      {
        matn: 'evristik daraja (oʻquvchilarning mavzuni toʻliq oʻzlashtirishi va yangi bilimga ega boʻlishi)',
        correct: false,
      },
      {
        matn: 'toʻgʻri javob yoʻq',
        correct: false,
      }
    ]
  },
  {
    id: 7,
    savol: 'Nechanchi asrdan boshlab taʼlimda “demokratiya”, yaʼni xalqchillik, oshkoralik va tenglik maʼnolarini ifodalovchi demokratizm tushunchasi keng qoʻllanila boshlandi?',
    javob: [
      {
        matn: 'XIX asr',
        correct: false,
      },
      {
        matn: 'XX asr',
        correct: true,
      },
      {
        matn: 'XXI asr',
        correct: false,
      },
      {
        matn: 'XVIII asr',
        correct: false,
      }
    ]
  },
  {
    id: 8,
    savol: '“Yaxshi odam boʻlish uchun mashqlarga va inson tabiatiga eʼtibor berish kerak, shu jihatdan tarbiya insonni qayta paydo qiladi” jumlasi kimga tegishli?',
    javob: [
      {
        matn: 'Aristotel',
        correct: false,
      },
      {
        matn: 'Demokrit',
        correct: true,
      },
      {
        matn: 'Komenskiy',
        correct: false,
      },
      {
        matn: 'Sh. Mirziyoyev',
        correct: false,
      }
    ]
  },
  {
    id: 9,
    savol: '“Qoʻying, oʻquvchi oʻz bilganini gapirsin va uning xotirasi gapirmasin” jumlasi kimga tegishli?',
    javob: [
      {
        matn: 'Komenskiy',
        correct: false,
      },
      {
        matn: 'Demokrit',
        correct: false,
      },
      {
        matn: 'I. Karimov',
        correct: false,
      },
      {
        matn: 'Seneka',
        correct: true,
      }
    ]
  },
  {
    id: 10,
    savol: 'Amerika Qoʻshma Shtatlarida “Insonparvarlik pedagogikasi” yoʻnalishi qachon paydo boʻlgan?',
    javob: [
      {
        matn: 'XIX asrning 50–60-yillarida',
        correct: false,
      },
      {
        matn: 'XV asrning 50–60-yillarida',
        correct: false,
      },
      {
        matn: 'XXI asrning 50–60-yillarida',
        correct: false,
      },
      {
        matn: 'XX asrning 50–60-yillarida',
        correct: true,
      }
    ]
  },
  {
    id: 11,
    savol: 'Boshlangʻich taʼlimda tarbiya jarayonini demokratlashtirib borish tarbiyaning qaysi usuliga asoslanadi?',
    javob: [
      {
        matn: 'demokratik',
        correct: true,
      },
      {
        matn: 'ijtimoiy',
        correct: false,
      },
      {
        matn: 'shaxslararo',
        correct: false,
      },
      {
        matn: 'institutsional',
        correct: false,
      }
    ]
  },
  {
    id: 12,
    savol: 'Pedagogik tajribalarda tarbiya darajalari amaliy sinovdan oʻtgan boʻlib, ular qaysilar?',
    javob: [
      {
        matn: 'ijtimoiy, institutsional, shaxslararo',
        correct: false,
      },
      {
        matn: 'ijtimoiy, institutsional, ijtimoiy-psixologik, shaxslararo',
        correct: true,
      },
      {
        matn: 'institutsional, shaxslararo, demokratik, insonparvarlik',
        correct: false,
      },
      {
        matn: 'demokratik, insonparvarlik, ijtimoiy, psixologik',
        correct: false,
      }
    ]
  },
  {
    id: 13,
    savol: 'Tarbiya jarayonining qaysi darajasiga koʻra, boshlangʻich sinf oʻquvchilari tarbiyasi ijtimoiy guruhlar, jamoatchilik vakillari va maktab jamoasi yordami asosida tashkil etilishi kerak?',
    javob: [
      {
        matn: 'shaxslararo daraja',
        correct: false,
      },
      {
        matn: 'ijtimoiy daraja',
        correct: false,
      },
      {
        matn: 'ijtimoiy-psixologik daraja',
        correct: true,
      },
      {
        matn: 'barchasi toʻgʻri',
        correct: false,
      }
    ]
  },
  {
    id: 14,
    savol: 'Boshlangʻich taʼlimda tarbiya jarayonini demokratlashtirish necha variantda amalga oshiriladi?',
    javob: [
      {
        matn: '1',
        correct: false,
      },
      {
        matn: '2',
        correct: true,
      },
      {
        matn: '3',
        correct: false,
      },
      {
        matn: '4',
        correct: false,
      }
    ]
  },
  {
    id: 15,
    savol: '“Tenglar ichida teng” tamoyili nimalar asosida amalga oshiriladi?',
    javob: [
      {
        matn: 'oʻqituvchi va oʻquvchining qiziqishlari, manfaatlari va majburiyatlari',
        correct: true,
      },
      {
        matn: 'oʻqituvchi demokratik qadriyatlarga mos rivojlanayotgan va oʻz imkoniyatlarini namoyon etayotgan ilgʻor oʻquvchilarni ragʻbatlantiradi',
        correct: false,
      },
      {
        matn: 'oʻquvchining qiziqishlari, manfaatlari va majburiyatlari asosida',
        correct: false,
      },
      {
        matn: 'oʻqituvchi qatʼiyatlik tamoyiliga amal qilishi shart',
        correct: false,
      }
    ]
  },
  {
    id: 16,
    savol: 'Boshlangʻich taʼlimda tarbiya jarayonining zamonaviy omillari metodologiyasi toʻgʻri koʻrsatilgan qatorni toping.',
    javob: [
      {
        matn: 'boshlangʻich taʼlimning majburiyligi; shaxs va jamiyatning boshlangʻich taʼlimdan manfaatdorligi',
        correct: false,
      },
      {
        matn: 'real sharoitlar va imkoniyatlarni hisobga olish; tarbiya jarayonini amalga oshirish resurslarini aniqlash',
        correct: false,
      },
      {
        matn: 'taʼlim tarixida boshlangʻich taʼlimning tajribaga ega ekanligi; boshlangʻich taʼlimning jahon taʼlim tizimida muhim oʻrin tutishi',
        correct: false,
      },
      {
        matn: 'boshlangʻich taʼlimning majburiyligi; shaxs va jamiyatning boshlangʻich taʼlimdan manfaatdorligi; taʼlim tarixida boshlangʻich taʼlimning tajribaga ega ekanligi; boshlangʻich taʼlimning jahon taʼlim tizimida muhim oʻrin tutishi',
        correct: true,
      }
    ]
  },
  {
    id: 17,
    savol: 'Innovatsion pedagogik loyiha – bu...?',
    javob: [
      {
        matn: 'tasdiqlangan yangicha asosdagi oʻquv loyihasi',
        correct: false,
      },
      {
        matn: 'qabul qilingan va qismlarga ajratilgan yangi pedagogik gʻoyalar hamda fikrlar',
        correct: true,
      },
      {
        matn: 'pedagogik yangiliklarning vujudga kelishi, ularning jadal oʻzlashtirilishi va amaliyotga tatbiq qilinishi',
        correct: false,
      },
      {
        matn: 'tizimlashtirilgan yangi oʻquv jarayoni prognoztikasi va maʼlumotlar majmui',
        correct: false,
      }
    ]
  },
  {
    id: 18,
    savol: 'Tizimlashtirilgan yangi oʻquv jarayoni prognoztikasi va maʼlumotlar majmui – bu...?',
    javob: [
      {
        matn: 'Innovatsion taʼlim',
        correct: false,
      },
      {
        matn: 'Innovatsion oʻqitish',
        correct: false,
      },
      {
        matn: 'Innovatsion pedagogik loyiha',
        correct: false,
      },
      {
        matn: 'Innovatsion pedagogik gʻoya',
        correct: true,
      }
    ]
  },
  {
    id: 19,
    savol: 'Talaba tomonidan oʻquv faoliyatining barcha turlari – maʼruza, amaliy, seminar va boshqalarning soatlar hajmi – bu ...?',
    javob: [
      {
        matn: 'oʻqish yuklamasi',
        correct: true,
      },
      {
        matn: 'taʼlim natijalari',
        correct: false,
      },
      {
        matn: 'kredit toʻplash',
        correct: false,
      },
      {
        matn: 'kredit',
        correct: false,
      }
    ]
  },
  {
    id: 20,
    savol: 'Quyidagi jumlalar hozirgi zamon jahon pedagogikasining nechanchi innovatsion tipiga tegishli? (boshlangʻich taʼlimning maqsadi, mazmuni, vositalari, metodlari va texnologiyalari)',
    javob: [
      {
        matn: 'birinchi tipiga',
        correct: true,
      },
      {
        matn: 'ikkinchi tipiga',
        correct: false,
      },
      {
        matn: 'uchinchi tipiga',
        correct: false,
      },
      {
        matn: 'toʻrtinchi tipiga',
        correct: false,
      }
    ]
  },
  {
    id: 21,
    savol: 'Mazkur innovatsion maktab Shveysariya, Avstriya va Rossiyada tashkil etilgan boʻlib, unda asosiy eʼtibor oʻquvchilarda mehnat koʻnikmasini shakllantirishga qaratiladi. Ushbu fikrlar qaysi maktabga tegishli?',
    javob: [
      {
        matn: 'Erkin boshlangʻich taʼlim maktabi',
        correct: false,
      },
      {
        matn: 'Mehnat boshlangʻich taʼlim maktabi',
        correct: true,
      },
      {
        matn: 'Ochiq boshlangʻich taʼlim maktabi',
        correct: false,
      },
      {
        matn: 'Yillik yangi boshlangʻich taʼlim maktabi',
        correct: false,
      }
    ]
  },
  {
    id: 22,
    savol: 'Ochiq boshlangʻich taʼlim maktabiga tegishli qatorni toping.',
    javob: [
      {
        matn: 'Mazkur innovatsion maktab AQShda tashkil etilgan boʻlib, u butun yil davomida faoliyat yuritadi. Oʻquvchilar har 45 kundan keyin 2 hafta taʼtilga chiqishadi',
        correct: false,
      },
      {
        matn: 'Bu innovatsion maktab Buyuk Britaniyada tashkil etilgan boʻlib, unda oʻquv rejalari va dasturlari oʻqituvchilar tomonidan individual ishlab chiqiladi. Asosiy eʼtibor oʻquvchilarning ijodiy fikrlashiga qaratiladi',
        correct: true,
      },
      {
        matn: 'Mazkur innovatsion maktab Shveysariya, Avstriya va Rossiyada tashkil etilgan boʻlib, unda asosiy eʼtibor mehnat koʻnikmasiga qaratiladi',
        correct: false,
      },
      {
        matn: 'Bu innovatsion maktab Germaniyada tashkil etilgan boʻlib, u internat koʻrinishida faoliyat yuritadi',
        correct: false,
      }
    ]
  },
  {
    id: 23,
    savol: 'Oliy pedagogik taʼlim jarayonida boʻlajak boshlangʻich sinf oʻqituvchilarining innovatsion koʻnikmalarini shakllantirish uchun nimalarga ahamiyat berish maqsadga muvofiqdir?',
    javob: [
      {
        matn: 'Innovatsion bilim berish',
        correct: false,
      },
      {
        matn: 'Innovatsion fikrlashga oʻrgatish',
        correct: false,
      },
      {
        matn: 'Innovatsion metodologiya bilan qurollantirish',
        correct: false,
      },
      {
        matn: 'Barcha javoblar toʻgʻri',
        correct: true,
      }
    ]
  },
  {
    id: 24,
    savol: 'Qaysi yondashuvga koʻra, oliy pedagogik taʼlim jarayonida boʻlajak boshlangʻich sinf oʻqituvchilariga innovatsiyalarni aniqlash, ijodiy fikrlash va yangilik yaratish oʻrgatiladi?',
    javob: [
      {
        matn: 'Innovatsion bilim berish',
        correct: false,
      },
      {
        matn: 'Innovatsion fikrlashga oʻrgatish',
        correct: true,
      },
      {
        matn: 'Innovatsion metodologiya bilan qurollantirish',
        correct: false,
      },
      {
        matn: 'Innovatsion gʻoyalar asosida darslarni tashkil qilish',
        correct: false,
      }
    ]
  },
  {
    id: 25,
    savol: 'ESPRIT – bu...?',
    javob: [
      {
        matn: 'bu xalqaro dasturga muvofiq Yevropa Ittifoqiga kiruvchi barcha mamlakatlarning oʻqituvchilari yagona oʻquv dasturi asosida tayyorlanishi kerak',
        correct: false,
      },
      {
        matn: 'mazkur xalqaro loyihaga koʻra, barcha shaxslar boshlangʻich sinfdan boshlab xorijiy tillarni oʻrganishi kerak',
        correct: false,
      },
      {
        matn: 'bu xalqaro dasturga muvofiq Sharqiy Yevropa mamlakatlarining taʼlim tizimi muvofiqlashtirib boriladi',
        correct: false,
      },
      {
        matn: 'bu xalqaro loyiha Yevropa universitetlarida amal qiladi va taʼlim hamda ilmiy muassasalar uchun yangi axborot texnologiyalarini ishlab chiqish bilan shugʻullanadi',
        correct: true,
      }
    ]
  },
  {
    id: 26,
    savol: 'Boshlangʻich sinf oʻqituvchilarining innovatsion faoliyatini baholash asoslarini qanday belgilash mumkin?',
    javob: [
      {
        matn: 'oʻqituvchining yangicha fikrlashi va mudom yangiliklarga intilishi',
        correct: false,
      },
      {
        matn: 'oʻqituvchining yangicha fikrlashi va mudom yangiliklarga intilishi; oʻqituvchining axborot texnologiyalaridan xabardorligi va ularni qoʻllay olishi',
        correct: true,
      },
      {
        matn: 'oʻqituvchining axborot texnologiyalaridan xabardorligi va ularni qoʻllay olishi',
        correct: false,
      },
      {
        matn: 'innovatsion-kasbiy faoliyatga intiluvchi oʻqituvchilarni aniqlash va ularga metodologik yordam berish',
        correct: false,
      }
    ]
  },
  {
    id: 27,
    savol: 'Pedagogik tajribalarda oʻqituvchilarning innovatsion faoliyatini baholash mezonlarining asoslari nimalardan iborat?',
    javob: [
      {
        matn: 'boshlangʻich taʼlimga yangiliklarning kiritilish koʻlami; boshlangʻich taʼlimga kiritilgan yangiliklar darajasi',
        correct: true,
      },
      {
        matn: 'oʻqituvchining ITdan xabardorligi va darslarni yangicha oʻtishi',
        correct: false,
      },
      {
        matn: 'oʻqituvchining yangicha fikrlashi va yangilikka intilishi',
        correct: false,
      },
      {
        matn: 'oʻqituvchining yangicha yondashuvlari maktab jamoasi tomonidan eʼtirof etilishi',
        correct: false,
      }
    ]
  },
  {
    id: 28,
    savol: 'Boshlangʻich taʼlim fanlari va mavzulari doimiy yangilanib borishi qaysi mezonga tegishli?',
    javob: [
      {
        matn: 'Boshlangʻich taʼlimga yangiliklarning kiritilish koʻlami',
        correct: false,
      },
      {
        matn: 'Boshlangʻich taʼlimga kiritilgan yangiliklar darajasi',
        correct: true,
      },
      {
        matn: 'Boshlangʻich taʼlimga kiritilgan yangilikning vaqti',
        correct: false,
      },
      {
        matn: 'Oʻqituvchining yondashuvlari jamoa tomonidan eʼtirof etilishi',
        correct: false,
      }
    ]
  },
  {
    id: 29,
    savol: 'Mahorat darslarining evristik darajasi orqali oʻquvchilar nimaga erishadi?',
    javob: [
      {
        matn: 'oʻquvchilarning mavzuni toʻliq oʻzlashtirishi va yangi bilimga ega boʻlishi',
        correct: true,
      },
      {
        matn: 'mavzuni xotirada yaxshi saqlashi',
        correct: false,
      },
      {
        matn: 'yangi oʻqituvchini qabul qilishi',
        correct: false,
      },
      {
        matn: 'faollikning ortishi',
        correct: false,
      }
    ]
  },
  {
    id: 30,
    savol: 'Boshlangʻich taʼlimda tarbiya tushunchasi nimani ifodalaydi?',
    javob: [
      {
        matn: '6–7 yoshli bolalarga bepul taʼlim berish',
        correct: false,
      },
      {
        matn: 'boshlangʻich sinf oʻquvchilarini madaniyat va qadriyatlar olamiga olib kirish',
        correct: true,
      },
      {
        matn: 'zamonaviy texnologiyalarni joriy etish',
        correct: false,
      },
      {
        matn: 'ilmiy dunyoqarashni kengaytirish',
        correct: false,
      }
    ]
  },
  {
    id: 31,
    savol: 'Mahorat darsi – bu...?',
    javob: [
      {
        matn: 'darslarni ketma-ketlikda tashkil etish',
        correct: false,
      },
      {
        matn: 'tayyor koʻnikmalarga tayanib, mavzuni noanʼanaviy usullar bilan oʻtish',
        correct: true,
      },
      {
        matn: 'anʼanaviy usullar bilan oʻtish',
        correct: false,
      },
      {
        matn: 'ilmiy-uslubiy metodlarni qoʻllash',
        correct: false,
      }
    ]
  },
  {
    id: 32,
    savol: 'Maktab-laboratoriya usulini joriy etishdagi tashkiliy ishlar qaysi qatorda?',
    javob: [
      {
        matn: 'ichki va tashqi nazorat',
        correct: false,
      },
      {
        matn: 'oʻrganish, tadbiq etish, yangilash',
        correct: false,
      },
      {
        matn: 'hamkorlik, aniqlik, monitoring',
        correct: false,
      },
      {
        matn: 'kelishuv, yoʻnalish, monitoring',
        correct: true,
      }
    ]
  },
  {
    id: 33,
    savol: 'Boshlangʻich taʼlimda klaster usulini joriy etishning asosiy metodlari qaysilar?',
    javob: [
      {
        matn: 'uzviylik, hamkorlik, samaradorlik',
        correct: true,
      },
      {
        matn: 'klaster, aqliy hujum, uzviylik',
        correct: false,
      },
      {
        matn: 'mahoratlilik, onglilik',
        correct: false,
      },
      {
        matn: 'hamkorlik',
        correct: false,
      }
    ]
  },
  {
    id: 34,
    savol: 'Oʻqitishning maqsad va omillarini bir butun tarzda birlashtirib baholash jarayoni – bu...?',
    javob: [
      {
        matn: 'Innovatsiya',
        correct: false,
      },
      {
        matn: 'Integratsiya',
        correct: true,
      },
      {
        matn: 'Kompetensiya',
        correct: false,
      },
      {
        matn: 'Malaka',
        correct: false,
      }
    ]
  },
  {
    id: 35,
    savol: 'Boshlangʻich taʼlimda klaster usulining asosiy maqsadi nimalardan iborat?',
    javob: [
      {
        matn: 'boshlangʻich taʼlim fanlarini oʻzaro bogʻliqlik va uygʻunlikda oʻqitish',
        correct: false,
      },
      {
        matn: 'boshlangʻich sinf oʻquvchilariga mavzular, darslar va oʻquv fanlarini oʻqituvchilar, oʻquvchilar, maktab jamoasi hamda mutaxassislar ishtirokida hamkorlikda amalga oshirish',
        correct: true,
      },
      {
        matn: 'boshlangʻich taʼlim mavzularini chuqurlashtirilgan va kengaytirilgan maʼlumotlar asosida oʻtish',
        correct: false,
      },
      {
        matn: 'boshlangʻich taʼlim darslarini anʼanaviy va noanʼanaviy mashgʻulotlar shaklida tashkil etish',
        correct: false,
      }
    ]
  },
  {
    id: 36,
    savol: 'Boshlangʻich taʼlimda klaster usulining asosiy vazifalari koʻrsatilgan qatorni toping.',
    javob: [
      {
        matn: 'dars jarayonida mavzularni ketma-ketlikda amalga oshirish',
        correct: false,
      },
      {
        matn: 'darslarni ketma-ketlikda tashkil qilish',
        correct: false,
      },
      {
        matn: 'boshlangʻich taʼlim mavzularini chuqurlashtirilgan va kengaytirilgan maʼlumotlar asosida oʻtish',
        correct: true,
      },
      {
        matn: 'boshlangʻich taʼlimni undan manfaatdorlar bilan amalga oshirish',
        correct: false,
      }
    ]
  },
  {
    id: 37,
    savol: 'Hamkorlik metodi tushunchasiga taʼrif bering.',
    javob: [
      {
        matn: 'boshlangʻich taʼlimda integratsiya asosida dars tashkil etish',
        correct: false,
      },
      {
        matn: 'mavzularni ketma-ketlikda amalga oshirish',
        correct: false,
      },
      {
        matn: 'mavzularni mustaqil oʻrganish',
        correct: false,
      },
      {
        matn: 'boshlangʻich taʼlimni undan manfaatdorlar bilan amalga oshirish',
        correct: true,
      }
    ]
  },
  {
    id: 38,
    savol: '“Samaradorlik metodi”ga taʼrif bering.',
    javob: [
      {
        matn: 'boshlangʻich taʼlimning mavzulari, darslari va tarbiya jarayonini kutilgan darajada amalga oshirish',
        correct: true,
      },
      {
        matn: 'boshlangʻich taʼlimni undan manfaatdorlar bilan amalga oshirish',
        correct: false,
      },
      {
        matn: 'mavzularni ketma-ketlikda oʻtish',
        correct: false,
      },
      {
        matn: 'integratsion darslarni tashkil etish',
        correct: false,
      }
    ]
  },
  {
    id: 39,
    savol: '“Integratsion dars” tushunchasiga taʼrif bering.',
    javob: [
      {
        matn: 'mavzularni kompyuter texnologiyalari asosida oʻtish',
        correct: false,
      },
      {
        matn: 'mavzularni va mashgʻulotlarni hamkorlikda, mutaxassislar ishtirokida oʻquvchilar faolligida oʻtish',
        correct: true,
      },
      {
        matn: 'mavzularni mutaxassislar bilan oʻtish',
        correct: false,
      },
      {
        matn: 'darslarni auksion tarzda tashkil etish',
        correct: false,
      }
    ]
  },
  {
    id: 40,
    savol: 'Kredit-modul tizimi qaysi yildan buyon Yevropa taʼlim tizimiga tatbiq etilmoqda?',
    javob: [
      {
        matn: '1890-yildan',
        correct: false,
      },
      {
        matn: '1869-yildan',
        correct: true,
      },
      {
        matn: '1896-yildan',
        correct: false,
      },
      {
        matn: '1898-yildan',
        correct: false,
      }
    ]
  },
  {
    id: 41,
    savol: 'Boshl ang ‘ ich ta’lim pedagogikasining tarkiblarini boshlang ‘ ich ta’limda nimalar  tashkil qiladi ?',
    javob: [
      {
        matn: 'mavzuga kirish, yoritish, mustahkamlash va yakunlash bosqichlari',
        correct: false,
      },
      {
        matn: 'mavzular va mashgʻulotlarni hamkorlikda, mutaxassislar ishtirokida oʻquvchilar faolligida oʻtish',
        correct: false,
      },
      {
        matn: 'bilim berish jarayoni,  o ‘ qitish didaktikasi va tarbiya nazariyasi',
        correct: true,
      },
      {
        matn: 'boshlangʻich taʼlimni klaster usulida tashkil etish',
        correct: false,
      }
    ]
  },
  {
    id: 42,
    savol: 'Boshlangʻich taʼlimda innovatsiya deganda nima tushuniladi?',
    javob: [
      {
        matn: 'masofaviy taʼlim xizmatlari majmui',
        correct: false,
      },
      {
        matn: 'boshlangʻich taʼlim jarayoniga olib kiriladigan yangi gʻoyalar, usullar, tushunchalar, qoidalar va texnologiyalarni ifodalaydi',
        correct: true,
      },
      {
        matn: 'darslarni hamkorlikda oʻtish',
        correct: false,
      },
      {
        matn: 'klaster usulida dars tashkil etish',
        correct: false,
      }
    ]
  },
  {
    id: 43,
    savol: 'Kredit toʻplash deganda nimani tushunasiz?',
    javob: [
      {
        matn: 'oʻquv yuklamasining oʻlchov birligi',
        correct: false,
      },
      {
        matn: 'akademik mobillik dasturi',
        correct: false,
      },
      {
        matn: 'taʼlim elementlarini oʻzlashtirish va yutuqlarga erishish natijasida kredit birliklarini toʻplash',
        correct: true,
      },
      {
        matn: 'malaka hujjati beruvchi muassasa',
        correct: false,
      }
    ]
  },
  {
    id: 44,
    savol: 'Kredit deganda nimani tushunasiz?',
    javob: [
      {
        matn: 'kredit birliklarini toʻplash jarayoni',
        correct: false,
      },
      {
        matn: 'taʼlim toʻgʻrisidagi hujjat beruvchi muassasa',
        correct: false,
      },
      {
        matn: 'akademik mobillik kelishuvi',
        correct: false,
      },
      {
        matn: 'talaba tomonidan muayyan fan boʻyicha oʻzlashtirilgan oʻquv yuklamasining oʻlchov birligi',
        correct: true,
      }
    ]
  },
  {
    id: 45,
    savol: 'Kredit-modul tizimida 1 kredit oʻrtacha necha akademik soatga teng?',
    javob: [
      {
        matn: '25–30',
        correct: true,
      },
      {
        matn: '30–35',
        correct: false,
      },
      {
        matn: '20–25',
        correct: false,
      },
      {
        matn: '25–35',
        correct: false,
      }
    ]
  },
  {
    id: 46,
    savol: 'Masofaviy taʼlim texnologiyasi qanday imkoniyatlarga ega?',
    javob: [
      {
        matn: 'dars faoliyatini umumiylashtiradi',
        correct: false,
      },
      {
        matn: 'bilish faoliyatini mustaqil tashkil etish sharoitlarini beradi',
        correct: true,
      },
      {
        matn: 'mustaqil fikrlashni oshiradi',
        correct: false,
      },
      {
        matn: 'dars samaradorligini oshiradi',
        correct: false,
      }
    ]
  },
  {
    id: 47,
    savol: 'Integratsiya tushunchasiga taʼrif bering.',
    javob: [
      {
        matn: 'yunoncha soʻz boʻlib, bogʻliqlik, yaxlitlik, butunlik',
        correct: false,
      },
      {
        matn: 'lotincha soʻz boʻlib, hamkorlik',
        correct: false,
      },
      {
        matn: 'lotincha soʻz boʻlib, bogʻliqlik, yaxlitlik, butunlik',
        correct: true,
      },
      {
        matn: 'birgalikda, hamkorlikda',
        correct: false,
      }
    ]
  },
  {
    id: 48,
    savol: 'Integratsiya atamasiga taʼrif bering.',
    javob: [
      {
        matn: 'oʻquv fanlarining ixchamlashuvi',
        correct: false,
      },
      {
        matn: 'dars samaradorligini mustahkamlash',
        correct: false,
      },
      {
        matn: 'dars jarayonida yangicha metodlardan foydalanish',
        correct: false,
      },
      {
        matn: 'oʻquv fanlarining oʻzaro bogʻliqligi',
        correct: true,
      }
    ]
  },
  {
    id: 49,
    savol: 'Boshlangʻich taʼlimda mahorat darslarini tashkil etish bilan qaysi darajalarda oʻzlashtirishga erishiladi?',
    javob: [
      {
        matn: 'tanishuv, algoritmik, evristik',
        correct: true,
      },
      {
        matn: 'tanishuv, moslashuv, algoritmik',
        correct: false,
      },
      {
        matn: 'moslashuv, aniqlash, kuzatuv',
        correct: false,
      },
      {
        matn: 'kuzatuv, tanishuv, moslashuv',
        correct: false,
      }
    ]
  },
  {
    id: 50,
    savol: 'Mahorat darslarining tanishuv darajasi orqali oʻquvchilar nimaga erishadilar?',
    javob: [
      {
        matn: 'oʻquvchilarning darsda oʻzaro birligi va faolligi ortadi',
        correct: false,
      },
      {
        matn: 'oʻquvchilar yangi mavzu va yangi oʻqituvchini qabul qiladi',
        correct: true,
      },
      {
        matn: 'mavzuni xotirada yaxshi saqlaydi',
        correct: false,
      },
      {
        matn: 'mavzuni toʻliq oʻzlashtiradi',
        correct: false,
      }
    ]
  },
  {
    id: 51,
    savol: 'Mahorat darslarining algoritmik darajasi orqali oʻquvchilar nimaga erishadilar?',
    javob: [
      {
        matn: 'oʻquvchilarning mavzuni toʻliq oʻzlashtirishi va yangi bilimga ega boʻlishi',
        correct: false,
      },
      {
        matn: 'oʻquvchilarning darsda oʻzaro birligi va faolligi ortishi',
        correct: false,
      },
      {
        matn: 'oʻquvchilarning mavzuni xotirasida yaxshi saqlab qolishi',
        correct: true,
      },
      {
        matn: 'oʻquvchilarning yangi mavzu va yangi oʻqituvchini qabul qilishi',
        correct: false,
      }
    ]
  },
  {
    id: 52,
    savol: 'Sharqiy Yevropa mamlakatlarining taʼlim tizimi muvofiqlashtirib boriladigan xalqaro dastur qaysi?',
    javob: [
      {
        matn: 'LINGVA',
        correct: false,
      },
      {
        matn: 'EVRIKA',
        correct: true,
      },
      {
        matn: 'ERAZMUS',
        correct: false,
      },
      {
        matn: 'ESPRIT',
        correct: false,
      }
    ]
  },
  {
    id: 53,
    savol: 'Yevropa mintaqasida amal qiladigan va oliy taʼlim muassasalari hamkorligini amalga oshiruvchi dastur qaysi?',
    javob: [
      {
        matn: 'TEMPUS',
        correct: true,
      },
      {
        matn: 'EVRIKA',
        correct: false,
      },
      {
        matn: 'ESPRIT',
        correct: false,
      },
      {
        matn: 'LINGVA',
        correct: false,
      }
    ]
  },
  {
    id: 54,
    savol: 'Barcha shaxslar boshlangʻich sinfdan boshlab xorijiy tillarni oʻrganishi kerak degan xalqaro loyiha qaysi?',
    javob: [
      {
        matn: 'TEMPUS',
        correct: false,
      },
      {
        matn: 'EVRIKA',
        correct: false,
      },
      {
        matn: 'ESPRIT',
        correct: false,
      },
      {
        matn: 'LINGVA',
        correct: true,
      }
    ]
  },
  {
    id: 55,
    savol: 'Yevropa Ittifoqiga kiruvchi mamlakatlar oʻqituvchilari yagona oʻquv dasturi asosida tayyorlanishi kerak bo‘lgan dastur qaysi?',
    javob: [
      {
        matn: 'ERAZMUS',
        correct: true,
      },
      {
        matn: 'EVRIKA',
        correct: false,
      },
      {
        matn: 'ESPRIT',
        correct: false,
      },
      {
        matn: 'LINGVA',
        correct: false,
      }
    ]
  },
  {
    id: 56,
    savol: 'GPA nima?',
    javob: [
      {
        matn: 'har bir fan moduliga ajratilgan kreditlar miqdori',
        correct: false,
      },
      {
        matn: 'har bir fan boʻyicha taʼlim oluvchining toʻplagan bali',
        correct: false,
      },
      {
        matn: 'taʼlim oluvchining dastur boʻyicha oʻzlashtirgan ballarining oʻrtacha qiymati',
        correct: true,
      },
      {
        matn: 'kredit modul tizimi',
        correct: false,
      }
    ]
  },
  {
    id: 57,
    savol: 'Talaba bakalavriatda oʻqish muddati 4 yil boʻlganda qancha kredit toʻplashi kerak?',
    javob: [
      {
        matn: '180',
        correct: false,
      },
      {
        matn: '120',
        correct: false,
      },
      {
        matn: '200',
        correct: false,
      },
      {
        matn: '240',
        correct: true,
      }
    ]
  },
  {
    id: 58,
    savol: 'Magistraturada oʻqish muddati 2 yil boʻlganda qancha kredit toʻplash kerak?',
    javob: [
      {
        matn: '180',
        correct: false,
      },
      {
        matn: '120',
        correct: true,
      },
      {
        matn: '200',
        correct: false,
      },
      {
        matn: '240',
        correct: false,
      }
    ]
  },
  {
    id: 59,
    savol: 'Boshlangʻich taʼlimda masofaviy taʼlim texnologiyasidan foydalanish nechta shaklga ega?',
    javob: [
      {
        matn: '3',
        correct: false,
      },
      {
        matn: '2',
        correct: true,
      },
      {
        matn: '4',
        correct: false,
      },
      {
        matn: 'shaklga ega emas',
        correct: false,
      }
    ]
  },
  {
    id: 60,
    savol: 'Rivojlangan davlatlar deganda nimani tushunasiz?',
    javob: [
      {
        matn: 'tipik va innovatsion taʼlim tizimidan voz kechgan davlatlar',
        correct: false,
      },
      {
        matn: 'davlat iqtisodiyotida siyosiy yoʻnalish ustunlik qilgan davlatlar',
        correct: false,
      },
      {
        matn: 'ijtimoiy rivojlanishda milliy modelga ega boʻlgan davlatlar',
        correct: true,
      },
      {
        matn: 'bozor iqtisodiyotiga asoslanmagan davlatlar',
        correct: false,
      }
    ]
  }
]