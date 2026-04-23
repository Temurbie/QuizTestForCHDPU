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
  },
  {
    id: 153,
    savol: ' ',
    img: "1.png",
    javob: [
      {
        matn: 'A',
        correct: true,
      },
      {
        matn: 'B',
        correct: false,
      },
      {
        matn: 'C',
        correct: false,
      },
      {
        matn: 'D',
        correct: false,
      }
    ]
  },
  {
    id: 154,
    savol: ' ',
    img: "154.png",
    javob: [
      {
        matn: 'A',
        correct: false,
      },
      {
        matn: 'B',
        correct: false,
      },
      {
        matn: 'C',
        correct: true,
      },
      {
        matn: 'D',
        correct: false,
      }
    ]
  },
    {
    id: 155,
    savol: ' ',
    img: "155.png",
    javob: [
      {
        matn: 'A',
        correct: false,
      },
      {
        matn: 'B',
        correct: false,
      },
      {
        matn: 'C',
        correct: true,
      },
      {
        matn: 'D',
        correct: false,
      }
    ]
  },
   {
    id: 156,
    savol: ' ',
    img: "156.png",
    javob: [
      {
        matn: 'A',
        correct: false,
      },
      {
        matn: 'B',
        correct: false,
      },
      {
        matn: 'C',
        correct: false,
      },
      {
        matn: 'D',
        correct: true,
      }
    ]
  },
  {
    id: 157,
    savol: "3 ta o’nlik, 5 ta birlik, 8 ta yuzlikdan tashkil topgan sonni toping.",
    javob: [
      {
        matn: "358",
        correct: false,
      },
      {
        matn: "835",
        correct: true,
      },
      {
        matn: "385",
        correct: false,
      },
      {
        matn: "853",
        correct: false,
      }
    ]
  },

   {
    id: 158,
    savol: ' ',
    img: "158.png",
    javob: [
      {
        matn: 'A',
        correct: true ,
      },
      {
        matn: 'B',
        correct: false,
      },
      {
        matn: 'C',
        correct: false,
      },
      {
        matn: 'D',
        correct: false,
      }
    ]
  },

  {
    id: 159,
    savol: "Boshlang’ich matematika kursi tarkibi qanday materiallarni o’z ichiga oladi?",
    javob: [
      {
        matn: "vazifalar, tenglamalar, miqdorlar",
        correct: false,
      },
      {
        matn: "algebraik, geometrik, miqdorlar",
        correct: false,
      },
      {
        matn: "o‘nlik, yuzlik, minglik",
        correct: false,
      },
      {
        matn: "arifmetik, algebraik va geometrik",
        correct: true,
      }
    ]
  },
  {
    id: 160,
    savol: "8 ga bo’lganda bo’linma 15, qoldiq 4 chiqadigan sonni toping.",
    javob: [
      {
        matn: "68",
        correct: false,
      },
      {
        matn: "124",
        correct: true,
      },
      {
        matn: "27",
        correct: false,
      },
      {
        matn: "47",
        correct: false,
      }
    ]
  },
    {
    id: 161,
    savol: "O‘qitish usuli bu...",
    javob: [
      {
        matn: "tashkiliy qism, o’tilganlarni takrorlash; yangi bilimlarni o'zlashtirish; ko'nikma va malakalarni shakllantirish; uy vazifasi va darsni umumlashtirish",
        correct: true,
      },
      {
        matn: "o’tilganlarni takrorlash; yangi bilimlarni o'zlashtirish; ko'nikma va malakalarni shakllantirish; mavzuga oid adabiyotlar bilan tanishish",
        correct: false,
      },
      {
        matn: "o’tilganlarni takrorlash; ko'nikma va malakalarni shakllantirish; zarur ko‘rgazmali qurollar ishlab chiqarish",
        correct: false,
      },
      {
        matn: "yangi bilimlarni o'zlashtirish; ko'nikma va malakalarni shakllantirish; mavzuga oid adabiyotlar bilan tanishish",
        correct: false,
      }
    ]
  },
  {
    id: 162,
    savol: "Boshlang’ich matematika kursi tarkibi qanday materiallarni o’z ichiga oladi?",
    javob: [
      {
        matn: "vazifalar, tenglamalar, miqdorlar",
        correct: false,
      },
      {
        matn: "algebraik, geometrik, miqdorlar",
        correct: false,
      },
      {
        matn: "o‘nlik, yuzlik, minglik",
        correct: false,
      },
      {
        matn: "arifmetik, algebraik va geometrik",
        correct: true,
      }
    ]
  },
  {
    id: 163,
    savol: "8 ga bo’lganda bo’linma 15, qoldiq 4 chiqadigan sonni toping.",
    javob: [
      {
        matn: "68",
        correct: false,
      },
      {
        matn: "124",
        correct: true,
      },
      {
        matn: "27",
        correct: false,
      },
      {
        matn: "47",
        correct: false,
      }
    ]
  },
  {
    id: 164,
    savol: "O'quvchilarning darsdan tashqari vaqtida tashkil qilinadigan, dastur bilan bog'liq bo'lgan material asosida ixtiyoriylik tamoyiliga asoslangan mashg'ulotlar deganda nima tushuniladi?",
    javob: [
      {
        matn: "ekskursiya",
        correct: false,
      },
      {
        matn: "sinfdan tashqari ish",
        correct: true,
      },
      {
        matn: "sinfdan ichidagi ish",
        correct: false,
      },
      {
        matn: "to'garak",
        correct: false,
      }
    ]
  },
  {
    id: 165,
    savol: "To‘garak ishini qaysi sinfdan tashkil etish maqsadga muvofiq?",
    javob: [
      {
        matn: "1-sinfning 1-yarmidan",
        correct: false,
      },
      {
        matn: "2-sinfning 2-yarmidan",
        correct: false,
      },
      {
        matn: "1-sinfning 2-yarmidan",
        correct: true,
      },
      {
        matn: "2-sinfning 1-yarmidan",
        correct: false,
      }
    ]
  },
  {
    id: 166,
    savol: "To’g’ri to’rtburchakning bir tomoni 7 dm ga teng bo’lib, u qo’shni tomondan 50 cm qisqa bo’lsa, to’g’ri to’rtburchakning perimetrini toping.",
    javob: [
      {
        matn: "27 dm",
        correct: false,
      },
      {
        matn: "29 dm",
        correct: true,
      },
      {
        matn: "114 cm",
        correct: false,
      },
      {
        matn: "57 dm",
        correct: false,
      }
    ]
  },
  {
    id: 167,
    savol: "Matematik viktorinalar bu",
    javob: [
      {
        matn: "Matematik tanlovlar",
        correct: false,
      },
      {
        matn: "Matematik olimpiyadalar",
        correct: true,
      },
      {
        matn: "Zakovat o’yinlari",
        correct: false,
      }
    ]
  },
  {
    id: 168,
    savol: "..................... - gazetalardan farqli ravishda faqat o'quvchilarga yechish uchun berilgan masalalar va savollardan iborat bo'ladi. Javoblar yozma tarzda ma’lum vaqt ichida o'qituvchi tomonidan g'olib o'quvchi aniqlanib, e'lon qilinadi.",
    javob: [
      {
        matn: "Matematik viktorinalar",
        correct: true,
      },
      {
        matn: "Matematik tanlovlar",
        correct: false,
      },
      {
        matn: "Matematik olimpiyadalar",
        correct: false,
      },
      {
        matn: "Zakovat o’yinlari",
        correct: false,
      }
    ]
  },
  {
    id: 169,
    savol: "Matematikada didaktik materiallar necha turga bo‘linadi?",
    javob: [
      {
        matn: "1 ta",
        correct: false,
      },
      {
        matn: "2 ta",
        correct: false,
      },
      {
        matn: "3 ta",
        correct: true,
      },
      {
        matn: "4 ta",
        correct: false,
      }
    ]
  },
  {
    id: 170,
    savol: "Boshlang‘ich sinflarda o‘tiladigan asosiy miqdorlar to‘g‘ri ko‘rsatilgan qatorni toping?",
    javob: [
      {
        matn: "Uzunlik, massa, hajm, vaqt",
        correct: true,
      },
      {
        matn: "Baho, qiymat, narx",
        correct: false,
      },
      {
        matn: "Sekund, minut, yuza",
        correct: false,
      },
      {
        matn: "Hammasi to’g’ri",
        correct: false,
      }
    ]
  },
  {
    id: 171,
    savol: "To‘g‘ri munosabatni belgilang:",
    javob: [
      {
        matn: "5 t 800 kg - 2 t 500 kg < 7 t 500 kg - 4 t 300 kg",
        correct: false,
      },
      {
        matn: "1 sr 30 kg + 140 kg > 5 sr 90 kg - 2 sr 60 kg",
        correct: false,
      },
      {
        matn: "5 kg 700 g - 2 kg 400 g = 1 kg 200 g + 2 kg 200 g",
        correct: false,
      },
      {
        matn: "1 kg 300 g + 3 kg 400 g < 4 kg 500 g + 1 kg 300 g",
        correct: true,
      }
    ]
  },
  {
    id: 172,
    savol: "7 t 500 kg ni kilogramda ifodalang",
    javob: [
      {
        matn: "7500 kg",
        correct: true,
      },
      {
        matn: "750 kg",
        correct: false,
      },
      {
        matn: "75 kg",
        correct: false,
      },
      {
        matn: "75000 kg",
        correct: false,
      }
    ]
  },
  {
    id: 173,
    savol: "Kvadratning tomoni 15 dm ga teng bo’lsa, yuzasini toping.",
    javob: [
      {
        matn: "225 dm²",
        correct: true,
      },
      {
        matn: "60 dm²",
        correct: false,
      },
      {
        matn: "30 dm²",
        correct: false,
      },
      {
        matn: "150 dm²",
        correct: false,
      }
    ]
  },
  {
    id: 174,
    savol: "Asosiy miqdorlarni o‘rgatishdagi eng muhim vazifalardan biri bu?",
    javob: [
      {
        matn: "o‘lchov asboblari bn tanishtirish",
        correct: false,
      },
      {
        matn: "o‘lchov asboblari bilan tanishtirish, miqdorlarning birliklarini o‘rgatish",
        correct: true,
      },
      {
        matn: "miqdorlarning birliklarini o‘rgatish",
        correct: false,
      },
      {
        matn: "ko‘proq misol va masala o‘rgatish",
        correct: false,
      }
    ]
  },
  {
    id: 175,
    savol: "Baho, qiymat, narx tushunchalari qachon o‘zlashtirib boriladi?",
    javob: [
      {
        matn: "misollar yechish jarayonida",
        correct: true,
      },
      {
        matn: "mavzuning kirish qismida",
        correct: false,
      },
      {
        matn: "darsda o‘rgatilmaydi",
        correct: false,
      },
      {
        matn: "alohida mavzu bilan beriladi",
        correct: false,
      }
    ]
  },
  {
    id: 176,
    savol: "To’g’ri to’rtburchakning tomonlari 16 dm va 80 cm ga teng bo’lsa, to’rtburchak perimetrini toping.",
    javob: [
      {
        matn: "48 cm",
        correct: false,
      },
      {
        matn: "48 dm",
        correct: true,
      },
      {
        matn: "192 cm",
        correct: false,
      },
      {
        matn: "192 dm",
        correct: false,
      }
    ]
  },
  {
    id: 177,
    savol: "Dars ishlanmasi –",
    javob: [
      {
        matn: "o’qituvchi ijodkorligini aniqlovchi omil",
        correct: true,
      },
      {
        matn: "hamma bir xil shaklda yozishi shart",
        correct: false,
      },
      {
        matn: "darsni pedagogik, didaktik va uslubiy jihatdan rejalashtiruvchi",
        correct: false,
      },
      {
        matn: "loyihalashtiruvchi hujjat",
        correct: false,
      }
    ]
  },
   {
    id: 177,
    savol: "Dars rejasi –",
    javob: [
      {
        matn: "darsni pedagogik, didaktik va uslubiy jihatdan rejalashtiruvchi, loyihalashtiruvchi hujjat",
        correct: true,
      },
      {
        matn: "o’qituvchi ijodkorligini aniqlovchi omil",
        correct: false,
      },
      {
        matn: "xamma bir xil shaklda yozishi shart",
        correct: false,
      },
      {
        matn: "darsni pedagogik, didaktik va uslubiy jihatdan rejalashtiruvchi",
        correct: false,
      },
    ],
  },
  {
    id: 178,
    savol: "Matematika fanining o‘rganadigan ob’ekti ... iboratdir.",
    javob: [
      {
        matn: "fazoviy shakllar",
        correct: false,
      },
      {
        matn: "fazoviy shakllar va ular orasidagi miqdoriy munosabatlardan",
        correct: true,
      },
      {
        matn: "geometrik shakllar",
        correct: false,
      },
      {
        matn: "miqdoriy munosabatlardan",
        correct: false,
      },
    ],
  },
  {
    id: 179,
    savol: "“Metodika” grekcha so‘z bo‘lib, “metod” degani ... demakdir.",
    javob: [
      {
        matn: "Yo’l",
        correct: true,
      },
      {
        matn: "Usul",
        correct: false,
      },
      {
        matn: "O’rgataman",
        correct: false,
      },
      {
        matn: "O’qitish",
        correct: false,
      },
    ],
  },
  {
    id: 180,
    savol: "Matematika o’qitish metodikasi o‘zining tuzilish xususiyatiga ko‘ra shartli ravishda qanday bo‘limlarga bo‘linadi?",
    javob: [
      {
        matn: "Matematika o‘qitishning umumiy metodikasi",
        correct: false,
      },
      {
        matn: "Matematika o‘qitishning maxsus metodikasi",
        correct: false,
      },
      {
        matn: "Matematika o‘qitishning aniq metodikasi",
        correct: false,
      },
      {
        matn: "Barchasi to’g’ri",
        correct: true,
      },
    ],
  },
  {
    id: 181,
    savol: "1-sinf o‘quvchilarining bilimlarini aniqlash va tenglashtirish vazifasi nima orqali amalga oshiriladi?",
    javob: [
      {
        matn: "O‘qituvchi ma’lum tartibda o‘quvchilar bilimini maxsus daftarga hisobga olib boradi",
        correct: true,
      },
      {
        matn: "O‘qituvchi o‘quvchilar ota onasini yordamga chaqiradi",
        correct: false,
      },
      {
        matn: "Testlar asosida",
        correct: false,
      },
      {
        matn: "Yozma ish asosida",
        correct: false,
      },
    ],
  },
   {
    id: 182,
    savol: "Matematika o‘qitish vositalariga:",
    javob: [
      { matn: "darsliklar va qo‘llanmalar", correct: false },
      { matn: "ko‘rsatmali qo‘llanmalar", correct: false },
      { matn: "o‘qitishning texnik vositalari (O’TV) kiradi", correct: false },
      { matn: "Barchasi kiradi", correct: true },
    ],
  },
  {
    id: 183,
    savol:
      "..... asosiy xususiyati shundaki, u dastur talabini ochishi, uni konkretlashtirishi, dasturda ko‘rsatilgan savollar qanday darajada qaralishini o‘zida aks ettirishi kerak.",
    javob: [
      { matn: "Darslikning", correct: true },
      { matn: "Badiiy kitob", correct: false },
      { matn: "DTS", correct: false },
      { matn: "Uslubiy qo’llanmalar", correct: false },
    ],
  },
  {
    id: 184,
    savol:
      "Matematika fanining ta'limiy maqsadi o‘qituvchidan nimalarni talab qiladi?",
    javob: [
      {
        matn:
          "o‘quvchilarga matematik bilimlar tizimidan, bilim, malaka ko‘nikma berish, haqiqiy olamni matematik metodlar bilan o‘rganish",
        correct: false,
      },
      {
        matn:
          "o‘quvchilarning og‘zaki va yozma nutqlarini o‘stirishni, uning sifatli bo‘lishini ta'minlash",
        correct: false,
      },
      {
        matn:
          "o‘quvchilarga matematikadan shunday bilimlar berishni ta'minlashi kerakki, bu bilimlar orqali, faol bilish faoliyati orqali, bilim, malaka, ko‘nikmalari ortib borsin",
        correct: false,
      },
      {
        matn: "Barcha javoblar to’g’ri",
        correct: true,
      },
    ],
  },
  {
    id: 185,
    savol:
      "..... qisqa muddat ichida hajmi bo‘yicha eng ko‘p ma'lumotlarni berish, o‘quvchilar oldiga muammolar qo‘yish, ularni hal qilish yo‘llarini ko‘rsatish imkonini beradi.",
    javob: [
      { matn: "Barcha metodlar", correct: false },
      { matn: "Og‘zaki metod", correct: true },
      { matn: "Ko‘rsatmali metod", correct: false },
      { matn: "Amaliy metodlar", correct: false },
    ],
  },
  {
    id: 186,
    savol:
      "..... o‘quvchilarga kuzatishlar asosida bilimlar olish imkonini beradi. Kuzatish hissiy tafakkurning faol shaklidir.",
    javob: [
      { matn: "Barcha metodlar", correct: false },
      { matn: "Og‘zaki metod", correct: false },
      { matn: "Ko‘rsatmali metod", correct: true },
      { matn: "Amaliy metodlar", correct: false },
    ],
  },
  {
    id: 187,
    savol:
      "Malaka va ko‘nikmalarni shakllantirish va mukammalashtirish jarayoni bilan bog‘liq bo‘lgan metodlar o‘qitishning ... hisoblanadi",
    javob: [
      { matn: "Barcha metodlar", correct: false },
      { matn: "Og‘zaki metod", correct: false },
      { matn: "Ko‘rsatmali metod", correct: false },
      { matn: "Amaliy metodlar", correct: true },
    ],
  },
  {
    id: 188,
    savol:
      ".... deb biror amalni, shu amalni o‘zlashtirish yoki mustahkamlash maqsadida rejali ravishda tashkil qilingan takroriy bajarishga aytiladi.",
    javob: [
      { matn: "misol", correct: false },
      { matn: "mashq", correct: true },
      { matn: "masala", correct: false },
      { matn: "jadval", correct: false },
    ],
  },
  {
    id: 189,
    savol: "Matematika darslarida o’quvchilar bilimlari qanday aniqlanadi?",
    javob: [
      { matn: "Og’zaki va yozma", correct: true },
      { matn: "Faqat og’zaki", correct: false },
      { matn: "Faqat yozma", correct: false },
      { matn: "Test", correct: false },
    ],
  },
  {
    id: 190,
    savol:
      "Uy ishlarini berishda quyidagi fikrlarning qaysi biri to’g’ri?",
    javob: [
      { matn: "1,2,3", correct: false },
      { matn: "1,3,5", correct: false },
      { matn: "2,4,5,6", correct: false },
      { matn: "Hammasi to’g’ri", correct: true },
    ],
  },
  {
    id: 191,
    savol: "(5-3)+2 bu ifoda qanday nomlanadi?",
    javob: [
      { matn: "Qo’shish", correct: false },
      { matn: "Ayirish", correct: false },
      { matn: "Ayirmaga sonni qo’shish", correct: true },
      { matn: "Yig’indi", correct: false },
    ],
  },
  {
    id: 192,
    savol:
      "Oz komplektli maktablarda matematika darslari qanday tashkil qilinadi?",
    javob: [
      {
        matn:
          "Darsning 1/3 qismida o’quvchilar mustaqil ishlashiga to’g’ri keladi",
        correct: true,
      },
      {
        matn:
          "Darsning 1/2 qismida o’quvchilar mustaqil ishlashiga to’g’ri keladi",
        correct: false,
      },
      {
        matn:
          "Oddiy maktablarniki kabi bosqichlar ketma-ketligiga amal qilinadi",
        correct: false,
      },
      {
        matn: "Hamma sinfga bir xil mavzu o’tiladi",
        correct: false,
      },
    ],
  },
  {
    id: 193,
    savol:
      "AB kesma orasida 5 ta N, M, L, S, T nuqtalar qo’yilgan. Shu nuqtalar orqali nechta kesma hosil qilish mumkin?",
    javob: [
      { matn: "30", correct: false },
      { matn: "5", correct: false },
      { matn: "15", correct: true },
      { matn: "7", correct: false },
    ],
  },
  {
    id: 194,
    savol: "Kompetensiya — ...",
    javob: [
      { matn: "bilim", correct: false },
      { matn: "ko‘nikma va malaka", correct: false },
      { matn: "shaxsiy sifatlar majmui", correct: false },
      {
        matn:
          "bilim, ko‘nikma, malaka va shaxsiy sifatlar majmui",
        correct: true,
      },
    ],
  },
  {
    id: 195,
    savol:
      "..... deganda ta’lim oluvchilarni faollashtiruvchi va mustaqil fikrlashga undovchi, ta’lim jarayonining markazida ta’lim oluvchi bo’lgan metodlar tushuniladi.",
    javob: [
      { matn: "Darslik", correct: false },
      { matn: "Interfaol metodlar", correct: true },
      { matn: "O’quv reja", correct: false },
      { matn: "O’quv qo’llanma", correct: false },
    ],
  },
  {
    id: 196,
    savol:
      "“T-jadval” interfaol grafik organayzerni qaysi dars turida qo’llash maqsadga muvofiq?",
    javob: [
      { matn: "Ma’ruza mashg’ulotlarida", correct: true },
      { matn: "Seminar mashg’ulotlarida", correct: false },
      { matn: "Amaliy mashg’ulotlarda", correct: false },
      { matn: "Mustaqil ta’limda", correct: false },
    ],
  },
  {
    id: 197,
    savol:
      "1 + m < 14 tengsizlikni yechimi bo’ladigan nechta ikki xonali natural son bor?",
    javob: [
      { matn: "12 ta", correct: false },
      { matn: "2 ta", correct: false },
      { matn: "3 ta", correct: true },
      { matn: "4 ta", correct: false },
    ],
  },
  {
    id: 198,
    savol:
      "256 598 102 sonining 10 dan birlar xonasida qaysi raqam turibdi?",
    javob: [
      { matn: "2", correct: false },
      { matn: "0", correct: true },
      { matn: "8", correct: false },
      { matn: "10", correct: false },
    ],
  },
  {
    id: 199,
    savol: "3 ga bo’linish qoidasini ayting.",
    javob: [
      {
        matn:
          "Raqamlar yig’indisi 3 ga bo’lingan son 3 ga bo’linadi",
        correct: true,
      },
      {
        matn:
          "Oxirgi raqam 3 ga bo’lingan son 3 ga bo’linadi",
        correct: false,
      },
      {
        matn:
          "Oxirgi ikki raqami 3 ga bo’lingan son 3 ga bo’linadi",
        correct: false,
      },
      {
        matn: "Bunday qoida mavjud emas",
        correct: false,
      },
    ],
  },
  {
    id: 200,
    savol:
      "Kesma uzunligi tushunchasi dastlab o’quvchilarga qay tarzda tushuntiriladi?",
    javob: [
      { matn: "Lineyka bilan o’lchash orqali", correct: false },
      { matn: "Metrlab o’lchash orqali", correct: false },
      { matn: "Sm lab o’lchash orqali", correct: false },
      {
        matn:
          "Predmetlarni uzunligi bo’yicha taqqoslash asosida kiritiladi",
        correct: true,
      },
    ],
  },
  {
    id: 201,
    savol: "34 ta yuzlik nechta birlikdan iborat?",
    javob: [
      { matn: "340", correct: false },
      { matn: "34000", correct: false },
      { matn: "3400", correct: true },
      { matn: "340000", correct: false },
    ],
  },
  {
    id: 202,
    savol: "Kabisa yili nechta kun?",
    javob: [
      { matn: "365", correct: false },
      { matn: "363", correct: false },
      { matn: "367", correct: false },
      { matn: "366", correct: true },
    ],
  },
  {
    id: 203,
    savol:
      "Katta tanaffus 30 minut davom etdi, kirishga 11:45 da qo’ng’iroq chalindi. Katta tanaffusga chiqish qachon bo’lgan?",
    javob: [
      { matn: "11:15", correct: true },
      { matn: "12:15", correct: false },
      { matn: "12:00", correct: false },
      { matn: "12:15", correct: false },
    ],
  },
  {
    id: 204,
    savol:
      "Xalqaro sistemada asosiy birlik qilib qanday vaqt birligi olingan?",
    javob: [
      { matn: "Soat", correct: false },
      { matn: "Sekund", correct: true },
      { matn: "Minut", correct: false },
      { matn: "Millisekund", correct: false },
    ],
  },
  {
    id: 205,
    savol: ' ',
    img: "205.png",
    javob: [
      {
        matn: 'A',
        correct: false ,
      },
      {
        matn: 'B',
        correct: false,
      },
      {
        matn: 'C',
        correct: true,
      },
      {
        matn: 'D',
        correct: false,
      }
    ]
  },
  //metematika tugadi
  {
    id: 206,
    savol: "\"Shoh G’oziy\" hikoyati Navoiyning qaysi dostonidan olingan?",
    javob: [
      { matn: "\"Hayratul-abror\"", correct: true },
      { matn: "\"Farhod va Shirin\"", correct: false },
      { matn: "\"Layli va Majnun\"", correct: false },
      { matn: "«Sabbai Sayyor»", correct: false },
    ],
  },
  {
    id: 207,
    savol: "\"Egri va to’g’ri” ertagida qanday ijobiy fazilat ulug’lanadi?",
    javob: [
      { matn: "Ezgulik", correct: false },
      { matn: "Adolat", correct: false },
      { matn: "Razolat", correct: false },
      { matn: "To’g’rilik", correct: true },
    ],
  },
  
  {
    id: 208,
    savol: "\"Susambil\" ertagida bo’rilar nazdida Eshon kim edi?",
    javob: [
      { matn: "Xo’roz", correct: false },
      { matn: "Eshak", correct: true },
      { matn: "Ho’kiz", correct: false },
      { matn: "Arilar", correct: false },
    ],
  },
  {
    id: 209,
    savol: "Shamol to’xtatish marosimida ijro etilgan qo’shiqning nomini ayting?",
    javob: [
      { matn: "Sust xotin", correct: false },
      { matn: "Choy momo", correct: true },
      { matn: "Yo, haydar", correct: false },
      { matn: "Yo, ramazon", correct: false },
    ],
  },
  {
    id: 210,
    savol:
      "Sarvi gulning tagida so’ldi gul netmoq kerak? Sarvdin tobut yasab guldan kafan etmoq kerak? Satri kimning qalamiga mansub?",
    javob: [
      { matn: "Navoiy, X.Boyqaro", correct: true },
      { matn: "Lutfiy, Durbek", correct: false },
      { matn: "Atoyi, Sakkokiy", correct: false },
      { matn: "Turdi, Maxmur", correct: false },
    ],
  },

  {
    id: 211,
    savol:
      "Go’rug’li asrandi o’g’li Hasanxonni qaysi shahardan olib kelgan?",
    javob: [
      { matn: "Vayangandan", correct: true },
      { matn: "Chambildan", correct: false },
      { matn: "Eram bog’idan", correct: false },
      { matn: "Isfaxondan", correct: false },
    ],
  },
  {
    id: 212,
    savol:
      "\"Alpomish\" dostonidan olingan parcha kimning gapi: \"Maslahat bermaymiz, Boysaribeyga osilmaymiz Boybo’rining dorila\"",
    javob: [
      { matn: "Yortiboy", correct: true },
      { matn: "Qultoy", correct: false },
      { matn: "Qaldirg’och", correct: false },
      { matn: "Qorajon", correct: false },
    ],
  },
  {
    id: 213,
    savol:
      "Qaysi janr inson ruhiy kechinmalarini chuqur, dardli aks ettiradi?",
    javob: [
      { matn: "Marsiya", correct: true },
      { matn: "Yor-yor", correct: false },
      { matn: "Lapar", correct: false },
      { matn: "Kelin salom", correct: false },
    ],
  },
  {
    id: 214,
    savol:
      "\"Uch og’a-ini botirlar\" ertagida kim: \"uzum shinnisidan qonning hidi kelyapti, chunki podsholar odam qonidan ham qo’rqmaydilar\" degan?",
    javob: [
      { matn: "Kenja botir", correct: true },
      { matn: "Ota", correct: false },
      { matn: "Ona", correct: false },
      { matn: "To’ng’ich botir", correct: false },
    ],
  },
  {
    id: 215,
    savol: "Eposning asosiy janrlari?",
    javob: [
      {
        matn: "hikoya, qissa, ertak, roman",
        correct: true,
      },
      {
        matn: "ertak, hikoya, afsona, drama",
        correct: false,
      },
      {
        matn: "doston, qissa, topishmoq, qit’a",
        correct: false,
      },
      {
        matn: "masnaviy, latifa, askiya, qasida",
        correct: false,
      },
    ],
  },
  {
    id: 216,
    savol:
      "Dehqon mehnatiga to’g’ri baho bergan, bug’doyni yaratgan mehnatkashni ulug’lagan asarni toping?",
    javob: [
      { matn: "Qutadg’u-bilik", correct: true },
      { matn: "Avesto", correct: false },
      { matn: "Navoiy", correct: false },
      { matn: "Hibatul-haqoyiq", correct: false },
    ],
  },
  {
    id: 217,
    savol:
      "G’.G’ulom nechanchi yil bolalarga bag’ishlangan she’r yozishni boshladi?",
    javob: [
      { matn: "1923 yildan", correct: true },
      { matn: "1922 yildan", correct: false },
      { matn: "1924 yildan", correct: false },
      { matn: "1925 yildan", correct: false },
    ],
  },
  {
    id: 218,
    savol:
      "\"Hunarni asrabon netgumdir oxir Olib tufroqqamu ketgumdir oxir\" so’zlari qaysi qahramon nutqida bor?",
    javob: [
      { matn: "Farhod", correct: true },
      { matn: "Shopur", correct: false },
      { matn: "Bahrom", correct: false },
      { matn: "Xusrav", correct: false },
    ],
  },
  {
    id: 219,
    savol:
      "«Baqqolning maymunidek Kim ko’ringanga ajuva bo’lib yurma...» («Shum bola») Shum bolaga xayrixoh bu nutqni kim aytgan?",
    javob: [
      { matn: "Hoji bobo", correct: true },
      { matn: "Hindi sarrof", correct: false },
      { matn: "Sariboy", correct: false },
      { matn: "Omon", correct: false },
    ],
  },
  {
    id: 220,
    savol:
      "Xalq latifalari yo’lida hikoya yozgan o’zbek adiblari qaysi javobda keltirilgan?",
    javob: [
      { matn: "G’.G’ulom", correct: true },
      { matn: "A.Qodiriy", correct: false },
      { matn: "Cho’lpon", correct: false },
      { matn: "A.Qahhor", correct: false },
    ],
  },
  {
    id: 221,
    savol: "G’.G’ulom bolalar uchun yaratgan asarlari qaysi javobda keltirilgan?",
    javob: [
      {
        matn: "«Bilib qo’yki seni vatan kutadi», «Bari seniki», «Shum bola»",
        correct: true,
      },
      {
        matn: "«Shum bola», «Bolalik», «Nortojining kurak tishi»",
        correct: false,
      },
      {
        matn: "«Shum bola», «Bari seniki», «O’tmishdan ertaklar»",
        correct: false,
      },
      {
        matn: "«Tirilgan murda», «Sehrli qalpoqcha», «Shum bola»",
        correct: false,
      },
    ],
  },
  {
    id: 222,
    savol:
      "«Shum bola» qissasida ko’kterak bozorida pulini o’g’irlatgan «jabrdiyda» kim edi?",
    javob: [
      { matn: "Sulton", correct: true },
      { matn: "Husnibiy", correct: false },
      { matn: "Omon", correct: false },
      { matn: "Yo’ldosh", correct: false },
    ],
  },
  {
    id: 223,
    savol:
      "O’z hikoyalarida xalq maqollariga eng ko’p murojaat qiluvchi adib kim?",
    javob: [
      { matn: "A.Qahhor", correct: true },
      { matn: "O’.Hoshimov", correct: false },
      { matn: "S. Ahmad", correct: false },
      { matn: "G’.G’ulom", correct: false },
    ],
  },
  {
    id: 224,
    savol:
      "H.Olimjonning «Oygul bilan Baxtiyor», «Semurg’, Parizod yoki Bunyod» adabiy ertaklari mazmunan qanday asarlar?",
    javob: [
      { matn: "Liro-epik", correct: true },
      { matn: "Epik", correct: false },
      { matn: "Lirik", correct: false },
      { matn: "Syujetsiz", correct: false },
    ],
  },
  {
    id: 225,
    savol:
      "H.Olimjonning «Oygul bilan Baxtiyor» dostonining yozilishiga sabab bo’lgan ertakni belgilang.",
    javob: [
      { matn: "«Malikai Husnobod»", correct: true },
      { matn: "«Guliqahqah»", correct: false },
      { matn: "«Zumrad va Qimmat»", correct: false },
      { matn: "«Muqbil tosh otar»", correct: false },
    ],
  },
  {
    id: 226,
    savol:
      "X. To’xtaboevning «Sehrli qalpoqcha» qissasida Hoshimjon Ro’zievga maslahat bergan shoir kim?",
    javob: [
      { matn: "Jo’ra Juman", correct: true },
      { matn: "Mamarasul Bolta", correct: false },
      { matn: "Saydullo aka", correct: false },
      { matn: "Erkin Hamid", correct: false },
    ],
  },
  {
    id: 227,
    savol: "A. Avloniy she’rlari berilgan qatorni aniqlang.",
    javob: [
      { matn: "«Bahor keldi», «Bulbul», «Bola ila gul»", correct: true },
      { matn: "«Bari seniki», «Tongotar qo’shig’i», «Bulbul», «Sen etim emassan»", correct: false },
      { matn: "«Bari seniki», «Siz mening yoshligimsiz», «Bahor keldi», «Bulbul»", correct: false },
      { matn: "«Tong yulduzi», «Binafsha», «Navbahor», «Kapalak»", correct: false },
    ],
  },
  {
    id: 228,
    savol:
      "A. Avloniyning yoshlarni maorif madaniyatga chorlovchi, yaramas xulq-odatlarni tanqid qiluvchi darsligini aniqlang.",
    javob: [
      { matn: "«Adabiyot yohud milliy she’rlar»", correct: true },
      { matn: "«Ikkinchi muallim»", correct: false },
      { matn: "«O’qish kitobi»", correct: false },
      { matn: "«Turkiy guliston yohud axloq»", correct: false },
    ],
  },
  {
    id: 229,
    savol:
      "A.Avloniyning boshlang’ich sinf o’quvchilari hayotidan olib yozilgan she’rlarini belgilang.",
    javob: [
      { matn: "«Maktab bolasi»", correct: true },
      { matn: "«Yolg’onchi cho’pon»", correct: false },
      { matn: "«Bulbul»", correct: false },
      { matn: "«Bola ila gul»", correct: false },
    ],
  },
  {
    id: 230,
    savol: "A.Avloniy necha yoshdan boshlab she’rlar yoza boshlagan?",
    javob: [
      { matn: "14 yoshdan", correct: true },
      { matn: "10 yoshdan", correct: false },
      { matn: "11 yoshdan", correct: false },
      { matn: "12 yoshdan", correct: false },
    ],
  },
  {
    id: 231,
    savol:
      "Xalq pedagogikasida A.Avloniyning qaysi kitoblari katta rol o’ynagan?",
    javob: [
      {
        matn:
          "«Birinchi muallim», «Alifbe», «Ikkinchi muallim», «O’qish kitobi»",
        correct: true,
      },
      {
        matn:
          "«O’qish kitobi», «Alifbe», «Maktab Gulistoni», «Birinchi muallim»",
        correct: false,
      },
      {
        matn:
          "«Ikkinchi muallim», «Alifbe», «Adabiyot yohud milliy she’rlar», «O’qish kitobi»",
        correct: false,
      },
      { matn: "Hammasi to’g’ri", correct: false },
    ],
  },
  {
    id: 232,
    savol: "Zafar Diyorning birinchi she’rlar to’plami?",
    javob: [
      { matn: "«Qo’shiqlar»", correct: true },
      { matn: "«Binafsha»", correct: false },
      { matn: "«Kapalak»", correct: false },
      { matn: "«Navbahor»", correct: false },
    ],
  },
  {
    id: 233,
    savol:
      "Zafar Diyorning mehnat mavzuiga bag’ishlangan she’rini ko’rsating?",
    javob: [
      {
        matn: "«Kichkina bog’bon haqida doston»",
        correct: true,
      },
      { matn: "«Kel uchaylik Shimolga»", correct: false },
      { matn: "«Kitob, mening do’stimsan»", correct: false },
      { matn: "«Qutb qo’shig’i»", correct: false },
    ],
  },
  {
    id: 234,
    savol:
      "A.Navoiyning \"Orazin yopqach ko’zimdan to’kilur har lahza yosh\" g’azaliga kim umr bo’yi yozgan g’azallarini almashtirmoqchi bo’lgan?",
    javob: [
      { matn: "Lutfiy", correct: true },
      { matn: "Nizomiy", correct: false },
      { matn: "Atoyi", correct: false },
      { matn: "Sakkokiy", correct: false },
    ],
  },
  {
    id: 235,
    savol: "Q.Muhammadiy she’rlari berilgan qatorni toping?",
    javob: [
      { matn: "«A’lochi Sodiq», «Mening orzuim»", correct: true },
      { matn: "«Baxtli yoshlik», «Omonat»", correct: false },
      { matn: "«Orzu», «Qaldirg’och»", correct: false },
      { matn: "«Sening sovg’ang», «Orzu»", correct: false },
    ],
  },
  {
    id: 236,
    savol: "Q.Muhammadiyning «Etik» she’rining qahramoni?",
    javob: [
      { matn: "Solijon", correct: true },
      { matn: "Hoshimjon", correct: false },
      { matn: "Mamajon", correct: false },
      { matn: "Yodgor", correct: false },
    ],
  },
  {
    id: 237,
    savol:
      "O’ynashar diring-diring Deyishar: «Yuring-yuring» bayt muallifi kim?",
    javob: [
      { matn: "Q.Muhammadiy", correct: true },
      { matn: "Z.Diyor", correct: false },
      { matn: "G’.G’ulom", correct: false },
      { matn: "I.Muslim", correct: false },
    ],
  },
  {
    id: 238,
    savol:
      "Sh.Sa’dullaning ikkinchi jahon urushi davrida yaratgan to’plamlarini belgilang?",
    javob: [
      { matn: "«Shohista», «Sen nima qilding?», «Ona va bola»", correct: true },
      { matn: "«Ona va bola», «Yomg’ir yog’aloq», «Ozoda»", correct: false },
      { matn: "«Bizning bog’chamiz», «Kachal polvon», «Oilamiz»", correct: false },
      { matn: "«Laqma it», «Ayyor chumchuq», «Chol bilan bo’ri»", correct: false },
    ],
  },
  {
    id: 239,
    savol:
      "Angliyada qadimgi adabiyot tarafdorlari bilan yangi adabiyot tarafdorlari o’rtasidagi bahsga bag’ishlab Jonatan Svift qanday hajviy konflikt yozgan?",
    javob: [
      { matn: "Kitoblar jangi", correct: true },
      { matn: "Stella uchun yozilgan kundaliklar", correct: false },
      { matn: "Turli xil maqolalar", correct: false },
      { matn: "Gulliverning sayohatlari", correct: false },
    ],
  },
  {
    id: 240,
    savol:
      "G’.G’ulomning bolalar adabiyoti nasriy janrining yuksalishiga hissa qo’shgan asarlarini toping.",
    javob: [
      {
        matn: "«Yodgor», «Shum bola», «Tirilgan murda»",
        correct: true,
      },
      {
        matn: "«Sen etim emassan», «Yodgor», «Mening o’g’rigina bolam»",
        correct: false,
      },
      {
        matn: "«Shum bola», «Netay», «Barii seniki»",
        correct: false,
      },
      {
        matn: "«Siz mening yoshligimsiz», «Netay», «Yodgor»",
        correct: false,
      },
    ],
  },
  {
    id: 241,
    savol: "Daniyaning jahonga mashhur ertakchisi kim?",
    javob: [
      { matn: "X. Andersen", correct: true },
      { matn: "J. Svift", correct: false },
      { matn: "D. Defo", correct: false },
      { matn: "Sh. Perro", correct: false },
    ],
  },
  {
    id: 242,
    savol:
      "Ey, sen xalqning to’yg’izuvchisi, barakali, muqaddas daryo. Ushbu bayt muallifi kim?",
    javob: [
      { matn: "Nekrasov", correct: true },
      { matn: "Mayakovskiy", correct: false },
      { matn: "Pushkin", correct: false },
      { matn: "Marshak", correct: false },
    ],
  },
  {
    id: 243,
    savol:
      "Mavzu jihatidan «sehrli-fantastik» turkumiga kiruvchi ertaklarni belgilang.",
    javob: [
      {
        matn: "«Susambil», «Guliqahqah», «To’rt yalqov»",
        correct: true,
      },
      {
        matn: "«Tohir va Zuhra», «Uch og’ayni botirlar», «Zumrad va Qimmat»",
        correct: false,
      },
      {
        matn: "«Bo’ri bilan tulki», «Oygul bilan Baxtiyor», «Yozi bilan Zebo»",
        correct: false,
      },
      {
        matn: "«Ziyod Botir», «Malikai Husnobod», «Tuhmatga uchragan kelin»",
        correct: false,
      },
    ],
  },
  {
    id: 244,
    savol:
      "Quyidagi javoblardan qaysi birida xalq ertaklari tasnifi to’g’ri ko’rsatilgan?",
    javob: [
      {
        matn: "Sehrli-maishiy va hayvonlar haqidagi ertaklar",
        correct: true,
      },
      {
        matn: "Sehrli, maishiy, novella-ertaklar",
        correct: false,
      },
      {
        matn: "Hayvonlar haqidagi, sehrli va topishmoq ertaklar",
        correct: false,
      },
      {
        matn: "Maishiy, topishmoqli, novella-ertaklar",
        correct: false,
      },
    ],
  },
   {
    id: 245,
    savol:
      "Oybekning qaysi qissasida Hirotning tarixiy voqealari, shahzodalarning Shohruh vafotidan keyingi taxt uchun kurashlari va Alisherning bolalik yillari haqida hikoya qilinadi?",
    javob: [
      { matn: "«Alisherning yoshligi» qissasida", correct: true },
      { matn: "«Bolalik» qissasida", correct: false },
      { matn: "«Zafar va Zahro»", correct: false },
      { matn: "To’g’ri javob berilmagan", correct: false },
    ],
  },
  {
    id: 246,
    savol: "«Shoh Saltan haqida ertak» asarining muallifi kim?",
    javob: [
      { matn: "A.S. Pushkin", correct: true },
      { matn: "S.Ya. Marshak", correct: false },
      { matn: "Tolstoy", correct: false },
      { matn: "Aka-uka Grimmlar", correct: false },
    ],
  },
  {
    id: 247,
    savol:
      "J.Sviftning qaysi asari sayohatnoma bo‘lib, unda murakkab ruhiy va ijtimoiy-falsafiy muammolar ham yoritilgan?",
    javob: [
      { matn: "«Gulliverning sayohatlari»", correct: true },
      { matn: "«Kitoblar jangi»", correct: false },
      { matn: "«Bochka» ertagi", correct: false },
      { matn: "To’g’ri javob yo’q", correct: false },
    ],
  },
  {
    id: 248,
    savol:
      "J.Sviftning qaysi asariga Volter: «Svift o’g’illarga qamchi urganida, otasiga ham tegib ketadi» deb baho bergan?",
    javob: [
      { matn: "«Bochka» ertagi", correct: true },
      { matn: "«Gulliverning sayohatlari»", correct: false },
      { matn: "«Kitoblar jangi»", correct: false },
      { matn: "To’g’ri javob yo’q", correct: false },
    ],
  },
  {
    id: 249,
    savol: "«Ravshanjonning qo’li tilga kirdi» she’ri muallifi kim?",
    javob: [
      { matn: "Q. Muhammadiy", correct: true },
      { matn: "Z. Diyor", correct: false },
      { matn: "P. Mo’min", correct: false },
      { matn: "Oybek", correct: false },
    ],
  },
  {
    id: 250,
    savol:
      "Tabiat va fasllar kuychisi sifatida e’zozlangan shoir kim?",
    javob: [
      { matn: "Uyg’un", correct: true },
      { matn: "Q. Muhammadiy", correct: false },
      { matn: "Z. Diyor", correct: false },
      { matn: "P. Mo’min", correct: false },
    ],
  },
  {
    id: 251,
    savol:
      "Oybek nechanchi yildan boshlab Alisher Navoiy ijodini chuqur o’rganishga kirishdi?",
    javob: [
      { matn: "1928 yildan", correct: true },
      { matn: "1929 yildan", correct: false },
      { matn: "1927 yildan", correct: false },
      { matn: "1926 yildan", correct: false },
    ],
  },
  {
    id: 252,
    savol:
      "Jambil va Jurjon xonlari, Darxon, Tarlon obrazlari H.Olimjonning qaysi asarida keltirilgan?",
    javob: [
      { matn: "«Malikai Husnobod» ertagi", correct: false },
      { matn: "«Oygul bilan Baxtiyor»", correct: true },
      { matn: "«Hulkarning she’ri»", correct: false },
      { matn: "«Vatan» she’ri", correct: false },
    ],
  },
  {
    id: 253,
    savol:
      "H.Olimjonning qaysi dostonida mehnatkashlarning ozodlik uchun kurashi va ularning yengilmas irodasi haqida tasavvur hosil bo’ladi?",
    javob: [
      { matn: "«Oygul bilan Baxtiyor»", correct: true },
      { matn: "«Malikai Husnobod» ertagi", correct: false },
      { matn: "«Semurg’ yoki Parizod va Bunyod»", correct: false },
      { matn: "To’g’ri javob yo’q", correct: false },
    ],
  },
  {
    id: 254,
    savol: "Qaysi shoir «Baxt va shodlik kuychisi» deya e’tirof etiladi?",
    javob: [
      { matn: "H.Olimjon", correct: true },
      { matn: "Q. Muhammadiy", correct: false },
      { matn: "Z. Diyor", correct: false },
      { matn: "P. Mo’min", correct: false },
    ],
  },
  {
    id: 255,
    savol:
      "H.Olimjonning qaysi asarida Xolvoy yolg’onchi, xasis boy timsolida gavdalanadi?",
    javob: [
      { matn: "«Yolg’onchining jazosi» ertak-dostonida", correct: true },
      { matn: "«Qizaloqning o’limi»", correct: false },
      { matn: "«O’g’irlangan husn»", correct: false },
      { matn: "«Inson»", correct: false },
    ],
  },
  {
    id: 256,
    savol:
      "Qaysi bolalar shoiri she’rlarida bolalarga qarata «g’oyat quvonardim bo’lolsa she’rim, qadrdon do’stingiz va ulfatingiz» deb orzu qilgan?",
    javob: [
      { matn: "Uyg’un", correct: true },
      { matn: "H.Olimjon", correct: false },
      { matn: "Q. Muhammadiy", correct: false },
      { matn: "Z. Diyor", correct: false },
    ],
  },
  {
    id: 257,
    savol:
      "«Yolg’onchining jazosi» ertak-dostonining syujet chizig’i Navoiying qaysi hikoyasiga o’xshab ketadi?",
    javob: [
      { matn: "«Sher va durroj»", correct: true },
      { matn: "«Xotam toyi»", correct: false },
      { matn: "«Shoh G’oziy»", correct: false },
      { matn: "To’g’ri javob berilmagan", correct: false },
    ],
  },
  {
    id: 258,
    savol:
      "Rus bolalar adabiyotida kichkintoylar uchun katta she’riyat yaratgan, taniqli tarjimon va dramaturg kim?",
    javob: [
      { matn: "S. Ya. Marshak", correct: true },
      { matn: "J. Svift", correct: false },
      { matn: "A.S. Pushkin", correct: false },
      { matn: "Tolstoy", correct: false },
    ],
  },
  {
    id: 259,
    savol:
      "Chinliklar uni «Adab ul-muluk», mochinliklar «Amin ul-mamlakat» deb atashadi. Bu asar qaysi?",
    javob: [
      { matn: "«Qutadg’u bilig»", correct: true },
      { matn: "«Qobusnoma»", correct: false },
      { matn: "«Boburnoma»", correct: false },
      { matn: "«Xamsa»", correct: false },
    ],
  },
  {
    id: 260,
    savol: "Hamzaning taxallusi?",
    javob: [
      { matn: "Nihoniy", correct: true },
      { matn: "Tong yulduzi", correct: false },
      { matn: "Julqunboy", correct: false },
      { matn: "Ovsar", correct: false },
    ],
  },
  {
    id: 261,
    savol: "Hamza qachon devon chop etadi va she’rlarini belgilang.",
    javob: [
      { matn: "1905 yil 214 she’r", correct: true },
      { matn: "1906 yil 215 she’r", correct: false },
      { matn: "1907 yil 216 she’r", correct: false },
      { matn: "1908 yil 217 she’r", correct: false },
    ],
  },
  {
    id: 262,
    savol:
      "Qaysi olim «Qutadg’u bilig»ni ommabop qilib o’zbekchaga o’girgan?",
    javob: [
      { matn: "B. To’xliev", correct: true },
      { matn: "Q. Yo’ldoshev", correct: false },
      { matn: "Mirtemir", correct: false },
      { matn: "Qayum Karimov", correct: false },
    ],
  },
  {
    id: 263,
    savol:
      "«Qutadg’u bilig»ni baytma-bayt ilmiy tarjima qilgan kim?",
    javob: [
      { matn: "Qayum Karimov", correct: true },
      { matn: "B. To’xliev", correct: false },
      { matn: "Mirtemir", correct: false },
      { matn: "To’g’ri javob ko’rsatilmagan", correct: false },
    ],
  },
  {
    id: 264,
    savol: "«Qutadg’u bilig»ning 31-bobi nimaga bag’ishlangan?",
    javob: [
      { matn: "Rahbar ma’naviyati", correct: true },
      { matn: "Odob-axloq", correct: false },
      { matn: "Do’stlik", correct: false },
      { matn: "Mehmondorchilik", correct: false },
    ],
  },
  {
    id: 265,
    savol:
      "«Qutadg’u bilig»da beklik mustahkam bo’lishi uchun nimalar zarurligi aytilgan?",
    javob: [
      {
        matn:
          "Kuchli lashkar, ko’p boylik, badavlat xalq, adolatli siyosat",
        correct: true,
      },
      {
        matn: "Ko’p boylik, ulfatchilik, do’stlik, kuchli lashkar",
        correct: false,
      },
      {
        matn:
          "Rahbar ma’naviyati, odamgarchilik, do’stlik, ko’p boylik",
        correct: false,
      },
      { matn: "To’g’ri javob berilmagan", correct: false },
    ],
  },
  {
    id: 266,
    savol:
      "O’zi xunuk, gapi bemaza odamlar qurbaqaga o’xshaydi. Bu Navoiying qaysi asaridan olingan?",
    javob: [
      { matn: "«Mahbub ul qulub»", correct: true },
      { matn: "«Hayrat ul abror»", correct: false },
      { matn: "«Farhod va Shirin»", correct: false },
      { matn: "«Muhokamat ul avzon»", correct: false },
    ],
  },
  {
    id: 267,
    savol:
      "Alisher Navoiyga berilgan: «Turk tilining o’lgan jasadiga Masih nafasi bilan ruh kiritdi...» ta’rif muallifi kim?",
    javob: [
      { matn: "H. Boyqaro", correct: true },
      { matn: "Jomiy", correct: false },
      { matn: "Lutfiy", correct: false },
      { matn: "Bobur", correct: false },
    ],
  },
  {
    id: 268,
    savol: "«Mudbir» so’zining ma’nosi to’g’ri berilgan qatorni toping.",
    javob: [
      { matn: "Baxtsiz", correct: true },
      { matn: "Cho’pon", correct: false },
      { matn: "Baxtli", correct: false },
      { matn: "Omadli", correct: false },
    ],
  },
  {
    id: 269,
    savol:
      "«Hayrat ul-abror»dan olingan misralarda Navoiy kimni tariflagan?",
    javob: [
      { matn: "Jomiyni", correct: true },
      { matn: "H. Boyqaroni", correct: false },
      { matn: "Lutfiyni", correct: false },
      { matn: "Boburni", correct: false },
    ],
  },
  {
    id: 270,
    savol:
      "Esib keldi Sharqdan bahorning yeli, Jahon ko’rki-chun osdi firdavs yo’li. Ushbu misralar qaysi asardan olingan?",
    javob: [
      { matn: "«Qutadg’u bilig»", correct: true },
      { matn: "«Mahbub ul qulub»", correct: false },
      { matn: "«Hayrat ul abror»", correct: false },
      { matn: "«Farhod va Shirin»", correct: false },
    ],
  },
  {
    id: 271,
    savol:
      "«Qutadg’u bilig»dan: «kishilar qo’li ochiq bo’ladi, ko’nglini xudo berganidan ham keng tutadi». Bu parchada qaysi ijtimoiy tabaqa nazarda tutilgan?",
    javob: [
      { matn: "Dehqonlar", correct: true },
      { matn: "Ovchilar", correct: false },
      { matn: "Sozandalar", correct: false },
      { matn: "Muallimlar", correct: false },
    ],
  },
  {
    id: 272,
    savol: "“Oqbura to’lqinlarida” she’ri kimning qalamiga mansub?",
    javob: [
      { matn: "Tursunboy Adashboev", correct: true },
      { matn: "H. Olimjon", correct: false },
      { matn: "Q. Muhammadiy", correct: false },
      { matn: "Z. Diyor", correct: false },
    ],
  },
  {
    id: 273,
    savol:
      "Anvar Obidjonning “Siz yozgan maktublar” turkumidagi she’rlarida qanday poetik obrazlar keltirilgan?",
    javob: [
      {
        matn:
          "Bolalar topqirligi va fikrlash doirasini o’stirishga qaratilgan poetik obrazlar",
        correct: true,
      },
      {
        matn:
          "Ta’lim-tarbiya hamda ma’naviyat masalalari mujassam poetik obrazlar",
        correct: false,
      },
      {
        matn: "Obrazlilikning shakl bilan uyg’unligi",
        correct: false,
      },
      { matn: "To’g’ri javob ko’rsatilmagan", correct: false },
    ],
  },
  {
    id: 274,
    savol:
      "Istiqlol davri bolalar adabiyotining qaysi adibi “Siz eshitmagan qo’shiqlar” turkumidagi she’r muallifi?",
    javob: [
      { matn: "Z. Isomiddinov", correct: true },
      { matn: "Abdusaid Ko’chimov", correct: false },
      { matn: "Dilshod Rajabov", correct: false },
      { matn: "Abduruhmon Akbar", correct: false },
    ],
  },
  {
    id: 275,
    savol:
      "G’.G’ulom «Shum bola» asari avvalgi nashrida asar nomini qanday atagan?",
    javob: [
      { matn: "«Dovdirash»", correct: true },
      { matn: "«Qiyomat»", correct: false },
      { matn: "«Bemor»", correct: false },
      { matn: "«Ovsar»", correct: false },
    ],
  },
  {
    id: 276,
    savol:
      "“Qasoskorning oltin boshi”, “Besh bolali yigitcha” asarlari muallifi kim?",
    javob: [
      { matn: "H. To’xtaboev", correct: true },
      { matn: "Tursunboy Adashboev", correct: false },
      { matn: "H. Olimjon", correct: false },
      { matn: "Oybek", correct: false },
    ],
  },
  {
    id: 277,
    savol:
      "G’afur G’ulom haqida: “Zamonlar o’tib, kelajakda jahon poeziyasining tarixi yaratilsa...” degan fikr kimning qalamiga mansub?",
    javob: [
      { matn: "O. Sharafiddinov", correct: true },
      { matn: "Oybek", correct: false },
      { matn: "A. Quljonov", correct: false },
      { matn: "Q. Yo’ldoshev", correct: false },
    ],
  },
  {
    id: 278,
    savol:
      "G’afur G’ulomning 1923 yilda matbuotda e’lon qilingan birinchi she’rini belgilang.",
    javob: [
      { matn: "“Go’zallik nimada?”", correct: true },
      { matn: "«Vaqt»", correct: false },
      { matn: "«Sog’inish»", correct: false },
      { matn: "«Kuzatish»", correct: false },
    ],
  },
  {
    id: 279,
    savol:
      "G’afur G’ulomning o’zbek xalqining o’tmishdagi og’ir hayoti tasvirlangan, qarovsiz bolalar mavzusidagi asarini belgilang.",
    javob: [
      { matn: "“Shum bola”", correct: true },
      { matn: "“Netay”", correct: false },
      { matn: "“Tirilgan murda”", correct: false },
      { matn: "“Yodgor”", correct: false },
    ],
  },
  {
    id: 280,
    savol:
      "G’afur G’ulom umrining so’ngida qanday nomlangan hikoyalar to’plamini nashr etdi?",
    javob: [
      { matn: "“Gilos danagidan tasbeh”", correct: true },
      { matn: "“Mening o’g’rigina bolam”", correct: false },
      { matn: "“Hasan kayfiy”", correct: false },
      { matn: "“Afandi o’lmaydigan bo’ldi”", correct: false },
    ],
  },
  {
    id: 281,
    savol:
      "Bir kilo xolis paxta chit bo’lib to’qilguncha... Misralar muallifini belgilang.",
    javob: [
      { matn: "G’. G’ulom", correct: true },
      { matn: "H. Olimjon", correct: false },
      { matn: "Q. Muhammadiy", correct: false },
      { matn: "Z. Diyor", correct: false },
    ],
  },
  {
    id: 282,
    savol:
      "Oybekning 60-yillarda yaratilgan asarlarini belgilang.",
    javob: [
      { matn: "“Davrim jarohati” va “Bolalik”", correct: true },
      { matn: "“Zafar va Zahro” va “Haqgo’ylar”", correct: false },
      { matn: "“Qutlug’ qon” va “Navoiy”", correct: false },
      { matn: "“Temur” va “Bobur”, “Bolalik”", correct: false },
    ],
  },
  {
    id: 283,
    savol: "Oybekning qaysi dostoni tugallanmay qolgan?",
    javob: [
      { matn: "“Temur” va “Bobur”", correct: true },
      { matn: "“Zafar va Zahro”", correct: false },
      { matn: "“Haqgo’ylar”", correct: false },
      { matn: "“Nur qidirib”", correct: false },
    ],
  },
  {
    id: 284,
    savol:
      "1909 yil 12 dekabrda Jizzaxda tug’ilgan, 4 yoshida yetim qolgan adib kim?",
    javob: [
      { matn: "H. Olimjon", correct: true },
      { matn: "Oybek", correct: false },
      { matn: "Q. Muhammadiy", correct: false },
      { matn: "Z. Diyor", correct: false },
    ],
  },
  {
    id: 285,
    savol:
      "H. Olimjonning «Oygul bilan Baxtiyor» dostoni negizida qaysi ertak mujassamlashgan?",
    javob: [
      { matn: "«Malikai Husnobod» ertagi", correct: true },
      { matn: "“Uch og’a-ini botirlar”", correct: false },
      { matn: "“Zumrad va Qimmat”", correct: false },
      { matn: "To’g’ri javob berilmagan", correct: false },
    ],
  },
  {
    id: 286,
    savol:
      "«Ofeliyaning o’limi», «Daryo tiniq...», «Eng gullagan yoshlik chog’imda» she’rlar muallifi kim?",
    javob: [
      { matn: "H. Olimjon", correct: true },
      { matn: "Oybek", correct: false },
      { matn: "Q. Muhammadiy", correct: false },
      { matn: "Z. Diyor", correct: false },
    ],
  },
  {
    id: 287,
    savol:
      "Oybekning qaysi asari Hamza nomidagi Davlat mukofotiga sazovor bo’lgan?",
    javob: [
      { matn: "«Bolalik» qissasi", correct: true },
      { matn: "“Zafar va Zahro”", correct: false },
      { matn: "“Haqgo’ylar”", correct: false },
      { matn: "“Nur qidirib”", correct: false },
    ],
  },
  {
    id: 288,
    savol: "A. Oripov qachon “O’zbekiston Qahramoni” unvonini oldi?",
    javob: [
      { matn: "1998 yil", correct: true },
      { matn: "1997 yil", correct: false },
      { matn: "1996 yil", correct: false },
      { matn: "1995 yil", correct: false },
    ],
  },
  {
    id: 289,
    savol: "“Hayrat ul abror” xotimasi necha bob?",
    javob: [
      { matn: "2 bob", correct: true },
      { matn: "3 bob", correct: false },
      { matn: "4 bob", correct: false },
      { matn: "5 bob", correct: false },
    ],
  },
  {
    id: 290,
    savol:
      "Oybekning «Bolalik» qissasi nechanchi yil qanday mukofotga sazovor bo’lgan?",
    javob: [
      {
        matn: "Hamza nomidagi Davlat mukofotiga (1963)",
        correct: true,
      },
      { matn: "Nobel mukofotiga (1964)", correct: false },
      { matn: "Qodiriy nomidagi mukofotga", correct: false },
      { matn: "To’g’ri javob ko’rsatilmagan", correct: false },
    ],
  },
  {
    id: 291,
    savol: "«Zarbulmasal»da qanday badiiy san’at qo’llanilgan?",
    javob: [
      { matn: "«Irsolul masal»", correct: true },
      { matn: "Tazod", correct: false },
      { matn: "Talmeh", correct: false },
      { matn: "Saj", correct: false },
    ],
  },

  {
    id: 292,
    savol: "G’afur G’ulomning ijodiy o’sishiga eng ko’p samarali ta’sir ko’rsatgan rus adiblari qatorini ko’rsating.",
    javob: [
      { matn: "Maksim Gorkiy va V.V.Mayakovskiy", correct: true },
      { matn: "A.S.Pushkin, M.Yu.Lermontov", correct: false },
      { matn: "N.A.Nekrasov, L.N.Tolstoy", correct: false },
      { matn: "A.P.Chexov, M.Yu.Lermontov", correct: false },
    ],
  },
  {
    id: 293,
    savol: "G’afur G’ulom 1923 yildan to 1930 yilgacha qancha she’r, hikoya, ocherk, doston, feleton yozgan?",
    javob: [
      { matn: "Besh yuzga yaqin", correct: true },
      { matn: "To’rt yuzga yaqin", correct: false },
      { matn: "Uch yuzga yaqin", correct: false },
      { matn: "Ikki yuzga yaqin", correct: false },
    ],
  },
  {
    id: 294,
    savol: "“Chorbozorchi”, “Soat”, “Jo’rabo’za” hikoyalar muallifi kim?",
    javob: [
      { matn: "G’afur G’ulom", correct: true },
      { matn: "H.Olimjon", correct: false },
      { matn: "Oybek", correct: false },
      { matn: "Uyg’un", correct: false },
    ],
  },
  {
    id: 295,
    savol: "Jo’ra, Saodat va Mehri obrazlari G’.G’ulomning qaysi asari qahramonlari?",
    javob: [
      { matn: "“Yodgor” qissasi", correct: true },
      { matn: "“Chorbozorchi”", correct: false },
      { matn: "“Soat”", correct: false },
      { matn: "“Jo’rabo’za”", correct: false },
    ],
  },
  {
    id: 296,
    savol: "1905 yil 16 yanvarda Toshkentning eski shaharida to’quvchi oilasida tug’ilgan adibni belgilang.",
    javob: [
      { matn: "Oybek", correct: true },
      { matn: "G’afur G’ulom", correct: false },
      { matn: "H.Olimjon", correct: false },
      { matn: "Q.Muhammadiy", correct: false },
    ],
  },
  {
    id: 297,
    savol: "«Bola Alisher» qissasining muallifi kim?",
    javob: [
      { matn: "Oybek", correct: true },
      { matn: "G’afur G’ulom", correct: false },
      { matn: "H.Olimjon", correct: false },
      { matn: "Uyg’un", correct: false },
    ],
  },
  {
    id: 298,
    savol: "Qaysi adib 30-yillarda yozilgan maqolalari bilan adabiyotshunoslik rivojiga katta hissa qo’shdi?",
    javob: [
      { matn: "Oybek", correct: true },
      { matn: "G’afur G’ulom", correct: false },
      { matn: "H.Olimjon", correct: false },
      { matn: "Uyg’un", correct: false },
    ],
  },
  {
    id: 299,
    savol: "«Hayratul-abror»ning nechanchi maqolati rostgo’ylik, halollik va to’g’rilikka bag’ishlangan?",
    javob: [
      { matn: "o’ninchi maqolati", correct: true },
      { matn: "sakkizinchi maqolati", correct: false },
      { matn: "ettinchi maqolati", correct: false },
      { matn: "oltinchi maqolati", correct: false },
    ],
  },
  {
    id: 300,
    savol: "Alisher Navoiyning qaysi dostonida hoqon elning uch yillik xirojidan voz kechadi?",
    javob: [
      { matn: "«Farhod va Shirin»", correct: true },
      { matn: "«Sab’ai sayyor»", correct: false },
      { matn: "«Layli va Majnun»", correct: false },
      { matn: "«Saddi Iskandariy»", correct: false },
    ],
  },
  {
    id: 301,
    savol: "«To’ymadingmi, Qaradaryo» qo’shig’i qaysi turkumga kiradi va kim (nima) ning tilidan aytilgan?",
    javob: [
      { matn: "O’rim qo’shig’i, arpa, bug’doy tilidan", correct: true },
      { matn: "Turey-turey qo’shig’i, echki tilidan", correct: false },
      { matn: "Churiyalar sovliq tilidan", correct: false },
      { matn: "Churiyalar, echki tilidan", correct: false },
    ],
  },
  {
    id: 302,
    savol: "«Choy momo» qaysi tangri sharafiga aytilgan?",
    javob: [
      { matn: "Zardushtiylarning shamol tangrisi – «Chuy momo» sharafiga aytilgan", correct: true },
      { matn: "Otashparastlarning olov tangrisi «Choy momo» sharafiga", correct: false },
      { matn: "Otashparastlarning yomg’ir tangrisi «Chuy momo» sharafiga aytilgan", correct: false },
      { matn: "Zardushtiylarning quyosh tangrisi «Chuy momo» sharafiga", correct: false },
    ],
  },
  
]