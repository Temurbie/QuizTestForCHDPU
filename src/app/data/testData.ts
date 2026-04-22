interface IJavob {
    matn: string;
    correct: boolean;
}

export interface ITest {
    id: number
    savol: string;
    img?: string
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
  },
   {
    id: 61,
    savol: 'Boshlangʻich taʼlimni integratsion baholash xususiyati nima?',
    javob: [
      {
        matn: 'bilimlarni tizimli oʻzlashtirish',
        correct: false,
      },
      {
        matn: 'har bir fanni kutilgan darajada oʻzlashtirish',
        correct: false,
      },
      {
        matn: 'oʻzlashtirishni amaliyotda qoʻllay olish',
        correct: false,
      },
      {
        matn: 'boshlangʻich taʼlimni tashkil etish sharoitlari, asoslari, samaradorligi va pedagoglar bilan taʼminlanganlik darajasi',
        correct: true,
      }
    ]
  },
  {
    id: 62,
    savol: 'Bilim nima?',
    javob: [
      {
        matn: 'eng toʻgʻri, tajribadan oʻtgan va koʻpchilik tomonidan eʼtirof etilgan tushunchalar, gʻoyalar hamda fikrlar majmui',
        correct: true,
      },
      {
        matn: 'muayyan bilimlar, axloqiy koʻnikmalar va xatti-harakat qobiliyatlariga ega boʻlish',
        correct: false,
      },
      {
        matn: 'boshlangʻich sinf oʻqituvchilarining oʻquv-biluv tushunchasi',
        correct: false,
      },
      {
        matn: 'lotincha soʻz boʻlib, aqliy layoqat maʼnosini anglatadi',
        correct: false,
      }
    ]
  },
  {
    id: 63,
    savol: 'Boshlangʻich taʼlimni berishning asosiy shakli nima?',
    javob: [
      {
        matn: 'maktab',
        correct: false,
      },
      {
        matn: 'dars',
        correct: true,
      },
      {
        matn: 'tarbiya',
        correct: false,
      },
      {
        matn: 'oʻqitish jarayoni',
        correct: false,
      }
    ]
  },
  {
    id: 64,
    savol: 'Innovatsion texnologiya nima?',
    javob: [
      {
        matn: 'pedagogik taraqqiyotni taʼminlashga qaratilgan yangi tashkiliy faollik vositalari, usullari va metodlari',
        correct: true,
      },
      {
        matn: 'yangicha oʻqitish tizimi',
        correct: false,
      },
      {
        matn: 'yangi oʻquv jarayoni prognozi',
        correct: false,
      },
      {
        matn: 'yangicha oʻquv loyihasi',
        correct: false,
      }
    ]
  },
  {
    id: 65,
    savol: 'Innovatsion oʻqitish nima?',
    javob: [
      {
        matn: 'pedagogik taraqqiyot vositalari',
        correct: false,
      },
      {
        matn: 'yangicha oʻqitish tizimi hamda oʻquvchi va talabalarni yangi texnologiyalar asosida oʻqitish jarayoni',
        correct: true,
      },
      {
        matn: 'yangi oʻquv jarayoni prognozi',
        correct: false,
      },
      {
        matn: 'oʻquv loyihasi',
        correct: false,
      }
    ]
  },
  {
    id: 66,
    savol: 'Erkin boshlangʻich taʼlim innovatsion maktabi qaysi davlatda tashkil etilgan?',
    javob: [
      {
        matn: 'Finlandiya',
        correct: false,
      },
      {
        matn: 'Germaniya',
        correct: true,
      },
      {
        matn: 'Xitoy',
        correct: false,
      },
      {
        matn: 'Fransiya',
        correct: false,
      }
    ]
  },
  {
    id: 67,
    savol: 'Mehnat boshlangʻich taʼlim maktabi qaysi davlatlarda tashkil etilgan?',
    javob: [
      {
        matn: 'Germaniya, Rossiya, Finlandiya',
        correct: false,
      },
      {
        matn: 'Avstriya, Germaniya, Xitoy',
        correct: false,
      },
      {
        matn: 'Avstriya, Shvetsariya, Rossiya',
        correct: true,
      },
      {
        matn: 'Buyuk Britaniya, Germaniya, Amerika',
        correct: false,
      }
    ]
  },
  {
    id: 68,
    savol: 'Ochiq boshlangʻich taʼlim maktabi qaysi davlatda tashkil etilgan?',
    javob: [
      {
        matn: 'Shvetsariya',
        correct: false,
      },
      {
        matn: 'Germaniya',
        correct: false,
      },
      {
        matn: 'Yaponiya',
        correct: false,
      },
      {
        matn: 'Buyuk Britaniya',
        correct: true,
      }
    ]
  },
  {
    id: 69,
    savol: 'Yillik yangi boshlangʻich taʼlim maktabi qaysi davlatda tashkil etilgan?',
    javob: [
      {
        matn: 'AQSh',
        correct: true,
      },
      {
        matn: 'Shvetsariya',
        correct: false,
      },
      {
        matn: 'Finlandiya',
        correct: false,
      },
      {
        matn: 'Xitoy',
        correct: false,
      }
    ]
  },
  {
    id: 70,
    savol: 'Oʻzbekiston Respublikasida nechta Oliy taʼlim muassasalari ECTS kredit-modul tizimiga oʻtgan?',
    javob: [
      {
        matn: '30 ta',
        correct: false,
      },
      {
        matn: '33 ta',
        correct: true,
      },
      {
        matn: '36 ta',
        correct: false,
      },
      {
        matn: '38 ta',
        correct: false,
      }
    ]
  },
   {
    id: 71,
    savol: 'Masofaviy taʼlim texnologiyasi qanday imkoniyatlarga ega?',
    javob: [
      {
        matn: 'bilish faoliyatini mustaqil tashkil etish sharoitlarini beradi',
        correct: false,
      },
      {
        matn: 'masofaviy taʼlim oʻqish va oʻqitish jarayoniga ijobiy yondashuvni taʼminlaydi',
        correct: false,
      },
      {
        matn: 'pedagogik jarayonning maqsadi sifatida taʼlim oluvchiga aniq yoʻnalish beradi',
        correct: false,
      },
      {
        matn: 'barcha javoblar toʻgʻri',
        correct: true,
      }
    ]
  },
  {
    id: 72,
    savol: 'Masofaviy taʼlimning oʻquv materiallarini tayyorlash nechta blokka boʻlinadi?',
    javob: [
      {
        matn: '3 ta',
        correct: false,
      },
      {
        matn: '6 ta',
        correct: false,
      },
      {
        matn: '5 ta',
        correct: true,
      },
      {
        matn: '4 ta',
        correct: false,
      }
    ]
  },
  {
    id: 73,
    savol: 'Masofaviy taʼlimning oʻquv materiallarini tayyorlashning kommunikativ bloki nima?',
    javob: [
      {
        matn: 'oʻquv materiallarini taʼlim oluvchilarga yoʻnaltirilgan tarzda tayyorlovchi manba',
        correct: true,
      },
      {
        matn: 'taʼlim oluvchilarning oʻzlashtirishini nazorat qilib boruvchi manba',
        correct: false,
      },
      {
        matn: 'taʼlim oluvchi va taʼlim beruvchilarning muloqotini taʼminlovchi manba',
        correct: false,
      },
      {
        matn: 'oʻquv materiallarini nazariy, didaktik va amaliy tarzda tayyorlash',
        correct: false,
      }
    ]
  },
  {
    id: 74,
    savol: 'Masofaviy taʼlimda nazoratni amalga oshiruvchi blok nima?',
    javob: [
      {
        matn: 'oʻquv materiallarini taʼlim oluvchilarga yoʻnaltirish',
        correct: false,
      },
      {
        matn: 'taʼlim oluvchilarning oʻzlashtirishini nazorat qilib boruvchi manba',
        correct: true,
      },
      {
        matn: 'muloqotni taʼminlash',
        correct: false,
      },
      {
        matn: 'nazariy va amaliy materiallarni tayyorlash',
        correct: false,
      }
    ]
  },
  {
    id: 75,
    savol: 'Oʻzbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Taʼlim sifatini nazorat qilish inspeksiyasi xususiy maktablarni har necha yilda tekshiradi?',
    javob: [
      {
        matn: '5 yil',
        correct: false,
      },
      {
        matn: '2 yil',
        correct: false,
      },
      {
        matn: '3 yil',
        correct: true,
      },
      {
        matn: '4 yil',
        correct: false,
      },
      
    ]
  },
   {
    id: 76,
    savol: 'Muayyan holat yoki darajani baholash — bu ...?',
    javob: [
      {
        matn: 'Indikator',
        correct: true,
      },
      {
        matn: 'Oʻquv reja',
        correct: false,
      },
      {
        matn: 'Innovatsiya',
        correct: false,
      },
      {
        matn: 'Koʻnikma',
        correct: false,
      }
    ]
  },
  {
    id: 77,
    savol: 'Boshlangʻich taʼlimni integratsion baholash nechta xususiyatga ega boʻladi?',
    javob: [
      {
        matn: '4 ta',
        correct: true,
      },
      {
        matn: '5 ta',
        correct: false,
      },
      {
        matn: '3 ta',
        correct: false,
      },
      {
        matn: '7 ta',
        correct: false,
      }
    ]
  },
  {
    id: 78,
    savol: 'Germaniyada boshlangʻich taʼlimni tashkil etishda qaysi fanlarning ustuvorligiga duch kelamiz?',
    javob: [
      {
        matn: 'Psixologiyaning',
        correct: false,
      },
      {
        matn: 'Gumanitar fanlarning',
        correct: true,
      },
      {
        matn: 'Maktabgacha taʼlimning',
        correct: false,
      },
      {
        matn: 'Tarbiya fanining',
        correct: false,
      }
    ]
  },
  {
    id: 79,
    savol: 'Braziliya boshlangʻich taʼlim gʻoyasiga qaysi davlat modeli taʼsir koʻrsatgan?',
    javob: [
      {
        matn: 'Fransiya',
        correct: false,
      },
      {
        matn: 'Finlandiya',
        correct: false,
      },
      {
        matn: 'Ispaniya',
        correct: true,
      },
      {
        matn: 'Amerika',
        correct: false,
      }
    ]
  },
  {
    id: 80,
    savol: 'Kanada boshlangʻich taʼlim tizimida qaysi davlat tizimi aks etgan?',
    javob: [
      {
        matn: 'Ispaniya',
        correct: false,
      },
      {
        matn: 'AQSh',
        correct: true,
      },
      {
        matn: 'Finlandiya',
        correct: false,
      },
      {
        matn: 'Fransiya',
        correct: false,
      }
    ]
  },
  {
    id: 81,
    savol: 'Osiyo qitʼasidagi rivojlangan mamlakatlar boshlangʻich taʼlimida qaysi davlat taʼsiri kuchli?',
    javob: [
      {
        matn: 'Amerika',
        correct: false,
      },
      {
        matn: 'Kanada',
        correct: false,
      },
      {
        matn: 'Ispaniya',
        correct: false,
      },
      {
        matn: 'Rossiya',
        correct: true,
      }
    ]
  },
  {
    id: 82,
    savol: 'Hozirgi zamon boshlangʻich taʼlimining sifat va samaradorligini baholashda qaysi darslarning ahamiyati katta?',
    javob: [
      {
        matn: 'Mahorat darsining',
        correct: true,
      },
      {
        matn: 'Ochiq darslarning',
        correct: false,
      },
      {
        matn: 'toʻgʻri javob yoʻq',
        correct: false,
      },
      {
        matn: 'Anʼanaviy darslarning',
        correct: false,
      }
    ]
  },
  {
    id: 83,
    savol: 'Tanishuv darajasi – bu ...?',
    javob: [
      {
        matn: 'Oʻquvchilarning yangi mavzuni qabul qilishi',
        correct: false,
      },
      {
        matn: 'Oʻquvchilarning yangi oʻqituvchini qabul qilishi',
        correct: false,
      },
      {
        matn: 'Oʻquvchilarning yangi mavzuni va yangi oʻqituvchini qabul qilishi',
        correct: true,
      },
      {
        matn: 'Yangi bilimga ega boʻlish',
        correct: false,
      }
    ]
  },
  {
    id: 84,
    savol: 'Oʻquvchilarning mavzuni xotirasida yaxshi saqlab qolishi – bu ...?',
    javob: [
      {
        matn: 'Tanishuv darajasi',
        correct: false,
      },
      {
        matn: 'Evristik daraja',
        correct: false,
      },
      {
        matn: 'toʻgʻri javob yoʻq',
        correct: false,
      },
      {
        matn: 'Algoritmik daraja',
        correct: true,
      }
    ]
  },
  {
    id: 85,
    savol: 'Oʻquvchilarning mavzuni toʻliq oʻzlashtirishi va yangi bilimga ega boʻlishi – bu ...?',
    javob: [
      {
        matn: 'Algoritmik daraja',
        correct: false,
      },
      {
        matn: 'Evristik daraja',
        correct: true,
      },
      {
        matn: 'Tanishuv darajasi',
        correct: false,
      },
      {
        matn: 'toʻgʻri javob yoʻq',
        correct: false,
      }
    ]
  },
   {
    id: 86,
    savol: 'Taʼlim elementlarini oʻzlashtirish va boshqa yutuqlarga erishish natijasida taqdim etiladigan kredit birliklarini toʻplash – bu ...?',
    javob: [
      {
        matn: 'kredit',
        correct: false,
      },
      {
        matn: 'kreditlarni berish',
        correct: false,
      },
      {
        matn: 'kredit toʻplash',
        correct: true,
      },
      {
        matn: 'kreditlarni koʻchirish',
        correct: false,
      }
    ]
  },
  {
    id: 87,
    savol: 'Toshkent viloyatidagi umumiy oʻrta taʼlim maktablarida nechta “Maktab-laboratoriya” tajriba-sinov maydonchalari tashkil etilgan?',
    javob: [
      {
        matn: '30 ta',
        correct: false,
      },
      {
        matn: '25 ta',
        correct: true,
      },
      {
        matn: '20 ta',
        correct: false,
      },
      {
        matn: '10 ta',
        correct: false,
      }
    ]
  },
  {
    id: 88,
    savol: 'Boshlangʻich taʼlimda “Maktab-laboratoriya” usulini joriy etishda nechta tashkiliy ish amalga oshiriladi?',
    javob: [
      {
        matn: '3 ta',
        correct: true,
      },
      {
        matn: '4 ta',
        correct: false,
      },
      {
        matn: '8 ta',
        correct: false,
      },
      {
        matn: '2 ta',
        correct: false,
      }
    ]
  },
  {
    id: 89,
    savol: 'Klaster tushunchasi qaysi mamlakatlarda ishlab chiqarish aloqalarini yoʻlga qoʻyish mazmunida qoʻllaniladi?',
    javob: [
      {
        matn: 'Gʻarb',
        correct: true,
      },
      {
        matn: 'Sharq',
        correct: false,
      },
      {
        matn: 'Osiyo',
        correct: false,
      },
      {
        matn: 'toʻgʻri javob yoʻq',
        correct: false,
      }
    ]
  },
  {
    id: 90,
    savol: 'Oʻqitishning klaster usuli nechta tamoyilga asoslanadi?',
    javob: [
      {
        matn: '2 ta',
        correct: false,
      },
      {
        matn: '4 ta',
        correct: false,
      },
      {
        matn: '3 ta',
        correct: true,
      },
      {
        matn: '6 ta',
        correct: false,
      }
    ]
  },
  {
    id: 91,
    savol: 'Boshlangʻich taʼlimni tashkil qilishning klaster usuli vazifalari nechta?',
    javob: [
      {
        matn: '5 ta',
        correct: true,
      },
      {
        matn: '3 ta',
        correct: false,
      },
      {
        matn: '7 ta',
        correct: false,
      },
      {
        matn: '6 ta',
        correct: false,
      }
    ]
  },
  {
    id: 92,
    savol: 'Hozirgi zamon boshlangʻich taʼlimida oʻqitishning klaster usulini joriy etish uchun asosiy metodlar nechta?',
    javob: [
      {
        matn: '3 ta',
        correct: true,
      },
      {
        matn: '2 ta',
        correct: false,
      },
      {
        matn: '4 ta',
        correct: false,
      },
      {
        matn: '5 ta',
        correct: false,
      }
    ]
  },
  {
    id: 93,
    savol: 'Boshlangʻich taʼlim mavzulari, darslari va oʻquv fanlarini ketma-ketlikda amalga oshirishga asoslanadigan metod – bu ...?',
    javob: [
      {
        matn: 'Uzviylik metodi',
        correct: true,
      },
      {
        matn: 'Hamkorlik metodi',
        correct: false,
      },
      {
        matn: 'Samaradorlik metodi',
        correct: false,
      },
      {
        matn: 'toʻgʻri javob yoʻq',
        correct: false,
      }
    ]
  },
  {
    id: 94,
    savol: 'Boshlangʻich taʼlimni undan manfaatdorlar bilan amalga oshirishga asoslanadigan metod – bu ...?',
    javob: [
      {
        matn: 'Samaradorlik metodi',
        correct: false,
      },
      {
        matn: 'Hamkorlik metodi',
        correct: true,
      },
      {
        matn: 'Uzviylik metodi',
        correct: false,
      },
      {
        matn: 'toʻgʻri javob yoʻq',
        correct: false,
      }
    ]
  },
  {
    id: 95,
    savol: 'Integratsion darsning auksion turi qanday tashkil etiladi?',
    javob: [
      {
        matn: 'mutaxassislar ishtirokida oʻtkaziladi',
        correct: false,
      },
      {
        matn: 'kompyuter texnologiyasiga asoslanadi',
        correct: false,
      },
      {
        matn: 'auksion tarzda tashkil etiladi',
        correct: true,
      },
      {
        matn: 'koʻrgazmalilik va anʼanaviylikka asoslanadi',
        correct: false,
      }
    ]
  },
  {
    id: 96,
    savol: 'Integratsion dars turlarining hamkorlik dars turi qanday shaklda tashkil etiladi?',
    javob: [
      {
        matn: 'integratsion darsning bu turi muayyan mavzularni mutaxassislarning ishtirokida oʻtkazishga asoslanadi',
        correct: true,
      },
      {
        matn: 'integratsion darsning bu turi koʻp hollarda kompyuter texnologiyasiga asoslanadi',
        correct: false,
      },
      {
        matn: 'integratsion darsning bu turi auktsion tarzda tashkil etiladi',
        correct: false,
      },
      {
        matn: 'integratsion darsning bu turi koʻrgazmalilik va anʼanaviylikka asoslanadi',
        correct: false,
      }
    ]
  },
  {
    id: 97,
    savol: 'Integratsion dars turlari nechta?',
    javob: [
      {
        matn: '3 ta',
        correct: true,
      },
      {
        matn: '2 ta',
        correct: false,
      },
      {
        matn: '4 ta',
        correct: false,
      },
      {
        matn: '6 ta',
        correct: false,
      }
    ]
  },
  {
    id: 98,
    savol: 'Mavzularni va mashgʻulotlarni hamkorlikda, mutaxassislar ishtirokida va oʻquvchilar faolligida oʻtish jarayoni – bu ...?',
    javob: [
      {
        matn: 'Auksion dars',
        correct: false,
      },
      {
        matn: 'Integratsion dars',
        correct: true,
      },
      {
        matn: 'Hamkorlik darsi',
        correct: false,
      },
      {
        matn: 'Toʻgʻri javob yoʻq',
        correct: false,
      }
    ]
  },
  {
    id: 99,
    savol: 'Taʼlim olish natijalariga koʻra talaba tomonidan muayyan fan boʻyicha oʻzlashtirilgan oʻquv yuklamasining oʻlchov birligi – bu ...?',
    javob: [
      {
        matn: 'kredit',
        correct: true,
      },
      {
        matn: 'oʻqish yuklamasi',
        correct: false,
      },
      {
        matn: 'kredit toʻplash',
        correct: false,
      },
      {
        matn: 'Toʻgʻri javob yoʻq',
        correct: false,
      }
    ]
  },
  {
    id: 100,
    savol: 'Oʻzbekistonda masofaviy taʼlim texnologiyasi qaysi yildan boshlab qoʻllanilgan?',
    javob: [
      {
        matn: '1978-yildan',
        correct: false,
      },
      {
        matn: '1970-yildan',
        correct: false,
      },
      {
        matn: '1980-yildan',
        correct: true,
      },
      {
        matn: '1990-yildan',
        correct: false,
      }
    ]
  },
  {
    id: 101,
    savol: "To’g’ri burchakli uchburchakning kichik tomonlari 3 dm, 4 dmga teng bo’lsa uchburchak yuzasini toping.",
    javob: [
        {
            matn: "12 dm2",
            correct: false
        },
        {
            matn: "6 dm2",
            correct: true
        },
        {
            matn: "7 dm2",
            correct: false
        },
        {
            matn: "14 dm2",
            correct: false
        }
    ]
},
{
    id: 102,
    savol: "Tenglamani ildizini toping:(1835-y):9+1709 = 1824",
    javob: [
        {
            matn: "800",
            correct: true
        },
        {
            matn: "700",
            correct: false
        },
        {
            matn: "500",
            correct: false
        },
        {
            matn: "100",
            correct: false
        }
    ]
},
{
    id: 103,
    savol: "Katakchalar o’rnida qaysi son turishi kerak? ⅕ tonna = ? kilogramm",
    javob: [
        {
            matn: "20",
            correct: false
        },
        {
            matn: "200",
            correct: true
        },
        {
            matn: "50",
            correct: false
        },
        {
            matn: "500",
            correct: false
        }
    ]
},
{
    id: 104,
    savol: '54 m matodan 18 ta bir xil erkaklar paltosi tikildi. 72 m shunday matodan nechta palto tikish mumkin?',
    javob: [
      {
        matn: '24',
        correct: true,
      },
      {
        matn: '12',
        correct: false,
      },
      {
        matn: '36',
        correct: false,
      },
      {
        matn: '18',
        correct: false,
      }
    ]
  },
  {
    id: 105,
    savol: 'Matematika soʻzining lugʻaviy maʼnosi nima?',
    javob: [
      {
        matn: 'Grekcha “mathema” soʻzidan olingan boʻlib, “fanlarni bilish” demakdir',
        correct: true,
      },
      {
        matn: 'Grekcha “mathema” soʻzidan olingan boʻlib, “qiziqish” demakdir',
        correct: false,
      },
      {
        matn: 'Grekcha “mathema” soʻzidan olingan boʻlib, “tushunish” demakdir',
        correct: false,
      },
      {
        matn: 'Lotincha “mathem” soʻzidan olingan boʻlib, “fikrlash” demakdir',
        correct: false,
      }
    ]
  },
  {
    id: 106,
    savol: 'Katakchalar o’rnida qaysi son turishi kerak? 1/3 sutka = ? soat',
    javob: [
      {
        matn: '12',
        correct: false,
      },
      {
        matn: '8',
        correct: true,
      },
      {
        matn: '3',
        correct: false,
      },
      {
        matn: '24',
        correct: false,
      }
    ]
  },
  {
    id: 107,
    savol: 'Katakchalar o’rnida qaysi son turishi kerak? 7/10 minut = ? sekund',
    javob: [
      {
        matn: '42',
        correct: true,
      },
      {
        matn: '17',
        correct: false,
      },
      {
        matn: '7',
        correct: false,
      },
      {
        matn: '10',
        correct: false,
      }
    ]
  },
  {
    id: 108,
    savol: 'Qaralayotgan sonlar, arifmetik misollar, masalarning o’xshash va farqli alomatlarini ajratish nima deyiladi?',
    javob: [
      {
        matn: 'Analiz metodi',
        correct: false,
      },
      {
        matn: 'Sintez metodi',
        correct: false,
      },
      {
        matn: 'Taqqoslash usuli',
        correct: true,
      },
      {
        matn: 'Analitik usul',
        correct: false,
      }
    ]
  },
  {
    id: 109,
    savol: 'Matematika fanidan sinfdan tashqari ishlarda matematik o’yinlar orqali o’qituvchi qanday natijaga erishadi?',
    javob: [
      {
        matn: 'o’quvchilarning mantiqiy fikrlashiga',
        correct: true,
      },
      {
        matn: 'misollarni yechishga harakat qilishga',
        correct: false,
      },
      {
        matn: 'o’quvchilar matematikadan yangi bilimlar olishga',
        correct: false,
      },
      {
        matn: 'ulgurmagan masalalarni yechishga',
        correct: false,
      }
    ]
  },
  {
    id: 110,
    savol: 'Umumiy bilimlar asosida yangi xususiy bilimlarni olishdan iborat usul?',
    javob: [
      {
        matn: 'Deduksiya',
        correct: true,
      },
      {
        matn: 'Induksiya',
        correct: false,
      },
      {
        matn: 'Analogiya',
        correct: false,
      },
      {
        matn: 'Sintez metodi',
        correct: false,
      }
    ]
  },
  {
    id: 111,
    savol: '8 - x > 5 tengsizlikni qanoatlantiruvchi nechta natural son mavjud?',
    javob: [
      {
        matn: '3 ta',
        correct: false,
      },
      {
        matn: '2 ta',
        correct: true,
      },
      {
        matn: '4 ta',
        correct: false,
      },
      {
        matn: 'cheksiz ko’p',
        correct: false,
      }
    ]
  },
  {
    id: 112,
    savol: 'Matematika o‘qitish metodikasi eng avvalo qaysi fan bilan uzviy bog‘liq?',
    javob: [
      {
        matn: 'Matematika',
        correct: true,
      },
      {
        matn: 'Psixologiya',
        correct: false,
      },
      {
        matn: 'Pedagogika',
        correct: false,
      },
      {
        matn: 'Hammasi to‘g‘ri',
        correct: false,
      }
    ]
  },
  {
    id: 113,
    savol: 'Kub yasash uchun 480 dm sim ishlatilgan bo‘lsa, kubning qirrasini toping.',
    javob: [
      {
        matn: '120 dm',
        correct: false,
      },
      {
        matn: '80 dm',
        correct: false,
      },
      {
        matn: '60 dm',
        correct: false,
      },
      {
        matn: '40 dm',
        correct: true,
      }
    ]
  },
  {
    id: 114,
    savol: 'Hisoblang $$8\frac{3}{7} + 3\frac{5}{7}$$',
    javob: [
      {
        matn: '$$12\frac{1}{7}',
        correct: true,
      },
      {
        matn: '$$12\frac{8}{7}',
        correct: false,
      },
      {
        matn: '$$11\frac{1}{7}',
        correct: false,
      },
      {
        matn: '$$12\frac{8}{7}',
        correct: false,
      }
    ]
  },
  {
    id: 115,
    savol: 'Ko‘paytirish va bo‘lish jadvali qaysi sinfda o‘rgatiladi?',
    javob: [
      {
        matn: '1-sinfda',
        correct: false,
      },
      {
        matn: '2-sinfda',
        correct: true,
      },
      {
        matn: '3-sinfda',
        correct: false,
      },
      {
        matn: '4-sinfda',
        correct: false,
      }
    ]
  },
    {
    id: 116,
    savol: 'Paralelopiopedning hajmini toping',
    img: 'kvadrat.png',
    javob: [
      {
        matn: '135 sm3',
        correct: true,
      },
      {
        matn: '135 dm3',
        correct: false,
      },
      {
        matn: '170 sm3',
        correct: false,
      },
      {
        matn: '170 dm3',
        correct: false,
      }
    ]
  },
    {
    id: 117,
    savol: 'Matematika metodikasi haqidagi tushuncha birinchi bo‘lib kimning qaysi asarida bayon qilingan?',
    javob: [
      {
        matn: 'G. Pestalosi “Sonni ko‘rgazmali o‘rganish”',
        correct: true,
      },
      {
        matn: 'Al-Xorazmiy “Al jabr va al-muqobila”',
        correct: false,
      },
      {
        matn: 'Abu Rayhon Beruniy “Hindiston”',
        correct: false,
      },
      {
        matn: 'Abu Ali Ibn Sino “Tib qonunlari”',
        correct: false,
      }
    ]
  },
  {
    id: 118,
    savol: '....... bilishning shunday yo‘li-ki, bunda o‘quvchining birlikdan umumiylikka, xususiy xulosadan umumiy xulosaga olib boradi. Qaysi metod ta’rifi?',
    javob: [
      {
        matn: 'Deduksiya',
        correct: false,
      },
      {
        matn: 'Induksiya',
        correct: true,
      },
      {
        matn: 'Analogiya',
        correct: false,
      },
      {
        matn: 'Sintez metodi',
        correct: false,
      }
    ]
  },
  {
    id: 119,
    savol: 'Qisqa shart tuzishdan maqsad?',
    javob: [
      {
        matn: 'masala yechimini topish tezlashadi',
        correct: false,
      },
      {
        matn: 'vaqt kam sarflanadi',
        correct: false,
      },
      {
        matn: 'qisqa yozuv shart emas',
        correct: false,
      },
      {
        matn: 'o‘quvchi masalani aniq mohiyatini tushunadi',
        correct: true,
      }
    ]
  },
  {
    id: 120,
    savol: '3 mm 1 cm ning qanday qismini tashkil qiladi?',
    javob: [
      {
        matn: '3 dan 1 qismi',
        correct: false,
      },
      {
        matn: '10 dan 3 qismi',
        correct: true,
      },
      {
        matn: '10 dan 1 qismi',
        correct: false,
      },
      {
        matn: '3 dan bir qismi',
        correct: false,
      }
    ]
  },
  {
    id: 121,
    savol: 'Boshlang‘ich sinflarda matematika darsi haftasiga necha soatni tashkil etadi?',
    javob: [
      {
        matn: '2 soat',
        correct: false,
      },
      {
        matn: '5 soat',
        correct: true,
      },
      {
        matn: '4 soat',
        correct: false,
      },
      {
        matn: '3 soat',
        correct: false,
      }
    ]
  },
  {
    id: 122,
    savol: 'Noma’lum sonni topishga yo‘naltirilgan ifoda?',
    javob: [
      {
        matn: 'Sonli ifoda',
        correct: false,
      },
      {
        matn: 'Tenglama',
        correct: true,
      },
      {
        matn: 'Harfiy ifoda',
        correct: false,
      },
      {
        matn: 'Misol',
        correct: false,
      }
    ]
  },
   {
    id: 123,
    savol: 'Boshlang‘ich sinflarda raqamlash metodikasi nimani nazarda tutadi?',
    javob: [
      {
        matn: 'doira, kvadrat, uchburchakni bir-biridan farq qila bilishlari va nomini ayta olishni',
        correct: false,
      },
      {
        matn: 'natural sonlar va nol haqidagi ma’lumotlarni o‘nlik, yuzlik, minglik, ko‘p xonali sonlar konsentrlari bo‘yicha kiritishni',
        correct: false,
      },
      {
        matn: 'Sonlarni taqqoslashni',
        correct: false,
      },
      {
        matn: 'miqdorlar yordamida narsalarni o‘zaro taqqoslashni',
        correct: true,
      }
    ]
  },
  {
    id: 124,
    savol: '10 ichida raqamlashni bilish natijasida o‘quvchilar nimalarga erishadilar?',
    javob: [
      {
        matn: '1 dan 10 gacha sonlar ketma-ketligini to‘la o‘zlashtirish',
        correct: false,
      },
      {
        matn: 'barchasi to‘g‘ri',
        correct: true,
      },
      {
        matn: 'narsalarni sanashni va sanash tartibi ko‘rsatilganda har bir narsaning tartib raqamini aytib bera olishi',
        correct: false,
      },
      {
        matn: 'sonlarning 1 dan 10 gacha har bir son qanday hosil bo‘lishini',
        correct: false,
      }
    ]
  },
  {
    id: 125,
    savol: '100 ichida sonlarni raqamlashni o‘rganishda o‘qituvchining vazifasi nimalardan iborat?',
    javob: [
      {
        matn: 'narsalarni bittalab, o‘ntalab va yuztalab guruhlarga birlashtirib yozish',
        correct: false,
      },
      {
        matn: 'sonlarni yuzliklardan, o‘nliklardan va birliklardan hosil qila olish',
        correct: false,
      },
      {
        matn: '100 ichida sonlarni o‘qish va yozishni hamda ularning natural sonlar qatorida kelishini',
        correct: false,
      },
      {
        matn: 'barchasi to‘g‘ri',
        correct: true,
      }
    ]
  },
  {
    id: 126,
    savol: 'Matematikada sonlarning o‘qilishi, yozilishi va ular ustida bajariladigan amallar tiliga nima deyiladi?',
    javob: [
      {
        matn: 'sanoq sistemalari',
        correct: true,
      },
      {
        matn: 'natural son',
        correct: false,
      },
      {
        matn: 'miqdor',
        correct: false,
      },
      {
        matn: 'son',
        correct: false,
      }
    ]
  },
  {
    id: 127,
    savol: 'Do‘konga 190 kg don keltirildi. Bulardan 43 kg no‘xat, loviya esa no‘xatdan 13 kg kam, qolgani guruch. Do‘konga qancha guruch keltirilgan?',
    javob: [
      {
        matn: '36',
        correct: false,
      },
      {
        matn: '117',
        correct: true,
      },
      {
        matn: '34',
        correct: false,
      },
      {
        matn: '77',
        correct: false,
      }
    ]
  },
  {
    id: 128,
    savol: 'Ikki bandargoh orasidagi masofa 84 km. Kema 28 km/soat tezlik bilan suzganda bu masofani necha soatda bosib o‘tadi?',
    javob: [
      {
        matn: '5',
        correct: false,
      },
      {
        matn: '2',
        correct: false,
      },
      {
        matn: '3',
        correct: true,
      },
      {
        matn: '4',
        correct: false,
      }
    ]
  },
  {
    id: 129,
    savol: 'Katta sonlarni o‘qish va esda saqlashni qulaylashtirish uchun ularning raqamlari nimalarga ajratiladi?',
    javob: [
      {
        matn: 'Xona birliklariga',
        correct: false,
      },
      {
        matn: 'Turga',
        correct: false,
      },
      {
        matn: 'Raqamga',
        correct: false,
      },
      {
        matn: 'Sinfga',
        correct: true,
      }
    ]
  },
  {
    id: 130,
    savol: 'Kvadratning tomoni 3 marta orttirilsa, yuzi necha marta ortadi?',
    javob: [
      {
        matn: '3 marta',
        correct: false,
      },
      {
        matn: '6 marta',
        correct: false,
      },
      {
        matn: '9 marta',
        correct: true,
      },
      {
        matn: 'o‘zgarmaydi',
        correct: false,
      }
    ]
  },
  {
    id: 131,
    savol: 'O‘quvchilar tafakkurini charxlashga yo‘naltirilgan masala turi?',
    javob: [
      {
        matn: 'Geometrik masala',
        correct: false,
      },
      {
        matn: 'Mantiqiy masala',
        correct: true,
      },
      {
        matn: 'Matnli masala',
        correct: false,
      },
      {
        matn: 'Arifmetik masala',
        correct: false,
      }
    ]
  },
  {
    id: 132,
    savol: 'To‘g‘ri to‘rtburchakning perimetri 24 cm ga teng. Uning bo‘yi 5 cm bo‘lsa, eni necha santimetrga teng?',
    javob: [
      {
        matn: '4 cm',
        correct: false,
      },
      {
        matn: '6 cm',
        correct: false,
      },
      {
        matn: '7 cm',
        correct: true,
      },
      {
        matn: '8 cm',
        correct: false,
      }
    ]
  },
  {
    id: 133,
    savol: '3,5 + 6,8 yig‘indini hisoblang.',
    javob: [
      {
        matn: '10,13',
        correct: false,
      },
      {
        matn: '9,13',
        correct: false,
      },
      {
        matn: '10,3',
        correct: true,
      },
      {
        matn: '9,3',
        correct: false,
      }
    ]
  },
  {
    id: 134,
    savol: 'Tomonining uzunligi 16 m bo‘lgan kvadrat shaklidagi maydonning atrofini bir marta aylanib chiqish uchun necha metr sim kerak bo‘ladi?',
    javob: [
      {
        matn: '24 m',
        correct: false,
      },
      {
        matn: '32 m',
        correct: false,
      },
      {
        matn: '64 m',
        correct: true,
      },
      {
        matn: '256 m',
        correct: false,
      }
    ]
  },
  {
    id: 135,
    savol: '7,2 - 4,5 ayirmani hisoblang.',
    javob: [
      {
        matn: '3,3',
        correct: false,
      },
      {
        matn: '3,7',
        correct: false,
      },
      {
        matn: '2,3',
        correct: false,
      },
      {
        matn: '2,7',
        correct: true,
      }
    ]
  },
  {
    id: 136,
    savol: '278 grammni o‘nli kasr ko‘rinishida ifodalang.',
    javob: [
      {
        matn: '0.278 kg',
        correct: true,
      },
      {
        matn: '2.78 kg',
        correct: false,
      },
      {
        matn: '0.278 g',
        correct: false,
      },
      {
        matn: '27.8 kg',
        correct: false,
      }
    ]
  },
  {
    id: 137,
    savol: 'Tengsizliklar turlarini ko‘rsating?',
    javob: [
      {
        matn: 'sonli va o‘zgaruvchili',
        correct: true,
      },
      {
        matn: 'Sonli',
        correct: false,
      },
      {
        matn: 'o‘zgaruvchili',
        correct: false,
      },
      {
        matn: 'o‘zgarmas',
        correct: false,
      }
    ]
  },
  {
    id: 138,
    savol: 'Sonlar va ular ustidagi amallarni belgilaydigan matematik simvollar (belgilar)ning ma’lum qoidalar bo‘yicha tuzilgan ketma-ketligi nima deb ataladi?',
    javob: [
      {
        matn: 'Tenglama',
        correct: false,
      },
      {
        matn: 'matematik ifoda',
        correct: true,
      },
      {
        matn: 'misol',
        correct: false,
      },
      {
        matn: 'Tengsizlik',
        correct: false,
      }
    ]
  },
  {
    id: 139,
    savol: '60 kilogrammni sentnerda ifodalang.',
    javob: [
      {
        matn: '6 q',
        correct: false,
      },
      {
        matn: '0,06 q',
        correct: false,
      },
      {
        matn: '0,6 q',
        correct: true,
      },
      {
        matn: '600 q',
        correct: false,
      }
    ]
  },
   {
    id: 140,
    savol: '',
    img: 'kasr.png  ',
    javob: [
      {
        matn: '6 q',
        correct: false,
      },
      {
        matn: '0,06 q',
        correct: false,
      },
      {
        matn: '0,6 q',
        correct: true,
      },
      {
        matn: '600 q',
        correct: false,
      }
    ]
  },
  {
    id: 141,
    savol: 'Uchburchakning har bir burchagi qirqilsa, qanday shakl hosil bo‘ladi?',
    javob: [
      {
        matn: 'aylana',
        correct: false,
      },
      {
        matn: 'uchburchak',
        correct: false,
      },
      {
        matn: 'romb',
        correct: false,
      },
      {
        matn: 'oltiburchak',
        correct: true,
      }
    ]
  },
  {
    id: 142,
    savol: 'Bog‘ga 170 tup oq olma, 2 marta ortiq qizil olma, oq va qizil olmalar birgalikda nechta bo‘lsa, ulardan 190 tup ortiq nok o‘tqazildi. Necha tup nok o‘tqazilgan?',
    javob: [
      {
        matn: '400 tup',
        correct: false,
      },
      {
        matn: '600 tup',
        correct: false,
      },
      {
        matn: '700 tup',
        correct: true,
      },
      {
        matn: '300 tup',
        correct: false,
      }
    ]
  },
  {
    id: 143,
    savol: 'Natural sonlar qanday yoziladi?',
    javob: [
      {
        matn: 'o‘ngdan chapga qarab',
        correct: false,
      },
      {
        matn: 'chapdan o‘ngga qarab',
        correct: true,
      },
      {
        matn: 'yuqoridan pastga qarab',
        correct: false,
      },
      {
        matn: 'pastdan yuqoriga qarab',
        correct: false,
      }
    ]
  },
  {
    id: 144,
    savol: 'Algoritm nima?',
    javob: [
      {
        matn: 'Son',
        correct: false,
      },
      {
        matn: 'Tenglama yechish',
        correct: false,
      },
      {
        matn: 'Bajariladigan ishni tartibini belgilash',
        correct: true,
      },
      {
        matn: 'misol yechish',
        correct: false,
      }
    ]
  },
  {
    id: 145,
    savol: 'Sanoq sistemasida berilgan sonning qiymati sonni tasvirlovchi raqamlarning egallagan o‘rniga bog‘liq bo‘ladi. Qaysi sanoq sistemasi haqida so‘z yuritilgan?',
    javob: [
      {
        matn: 'nopozitsion sanoq sistemasi',
        correct: false,
      },
      {
        matn: 'Pozitsion sanoq sistemasi',
        correct: true,
      },
      {
        matn: 'sonlar',
        correct: false,
      },
      {
        matn: 'hammasi to‘g‘ri',
        correct: false,
      }
    ]
  },
  {
    id: 146,
    savol: 'Qaysi mutafakkir sonlarni o‘nlik sanoq sistemasida xona birliklariga ajratib yozilishi mumkinligini ko‘rsatgan? To‘rt amalni bajarishda bunday yozuvdan foydalanishning afzalliklarini tushuntirib bergan.',
    javob: [
      {
        matn: 'Ibn Sino',
        correct: false,
      },
      {
        matn: 'Farobiy',
        correct: false,
      },
      {
        matn: 'Al Xorazmiy',
        correct: true,
      },
      {
        matn: 'Beruniy',
        correct: false,
      }
    ]
  },
  {
    id: 147,
    savol: 'Shunday xulosaki, bunda predmetlar ba’zi belgilarining o‘xshashligi bo‘yicha bu predmetlar boshqa belgilari bo‘yicha ham o‘xshash, degan taxminiy xulosa chiqariladi. Bu - ?',
    javob: [
      {
        matn: 'Deduksiya',
        correct: false,
      },
      {
        matn: 'Analogiya',
        correct: true,
      },
      {
        matn: 'Induksiya',
        correct: false,
      },
      {
        matn: 'Fikr',
        correct: false,
      }
    ]
  },
  {
    id: 148,
    savol: '100 ichida raqamlash nechta bosqichda o‘rgatiladi?',
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
    id: 149,
    savol: 'Uzunlik o‘lchov birliklarini toping',
    javob: [
      {
        matn: 'ga, ar, cm',
        correct: false,
      },
      {
        matn: 'cm, dm, m',
        correct: true,
      },
      {
        matn: 'm, dm, l',
        correct: false,
      },
      {
        matn: 'cm, kg, m',
        correct: false,
      }
    ]
  },
  {
    id: 150,
    savol: 'Yuza o‘lchov birliklarini toping',
    javob: [
      {
        matn: 'ga, ar',
        correct: true,
      },
      {
        matn: 'cm, dm, m',
        correct: false,
      },
      {
        matn: 'm, dm, l',
        correct: false,
      },
      {
        matn: 'cm, kg, m',
        correct: false,
      }
    ]
  },
  {
    id: 151,
    savol: 'Matematika o‘qitish o‘quvchilarni sabotlikka, tirishqoqlikka, puxtalikka, o‘z fikri va xulosalarini nazorat qila olishga erishish kerak” bu o‘qitishning qaysi maqsadiga tegishli?',
    javob: [
      {
        matn: 'Ta’limiy maqsad',
        correct: false,
      },
      {
        matn: 'Tarbiyaviy maqsad',
        correct: true,
      },
      {
        matn: 'Amaliy maqsad',
        correct: false,
      },
      {
        matn: 'Rivojlantiruvchi maqsad',
        correct: false,
      }
    ]
  },
  {
    id: 152,
    savol: 'Ilmiy-tadqiqot metodi bu-',
    javob: [
      {
        matn: 'o‘quv tarbiya ishining u yoki bu sohasidagi ishning qanday borayotganini o‘rganish uchun foydalaniladi.',
        correct: false,
      },
      {
        matn: 'maxsus tashkil qilingan tadqiqotchi tomonidan nazorat qilib turiladigan va tizimli ravishda o‘zgartirib turiladigan sharoitda o‘tkaziladi.',
        correct: false,
      },
      {
        matn: 'bu qonuniy bog‘lanishlarini, munosabatlarni, aloqalarni o‘rnatish va ilmiy nazariyalarni tuzish maqsadida ilmiy axborotlarni olish usullaridir.',
        correct: true,
      },
      {
        matn: 'Hammasi to‘g‘ri',
        correct: false,
      }
    ]
  }
  
]