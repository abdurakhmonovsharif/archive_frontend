import { INews } from "../../../types/ITypes";

export const demoNews: INews[] = [
    {
      title: {
        en: "Breaking News",
        uz: `Joriy yilning 18-sentabrida “Oʻzarxiv” agentligi tomonidan “Manfaatlar toʻqnashuvi toʻgʻrisida”gi Oʻzbekiston Respublikasining Qonuni mohiyati va ahamiyatiga bagʻishlangan Oʻzbekiston Milliy arxivi xodimlari ishtirokida davra-suhbati oʻtkazildi.
`,
        kr_uz: "Соңғы Жаңалықтар",
        ru: "Последние Новости",
      },
      content: {
        en: "This is the content of the breaking news in English.",
        uz: "Bu so'nggi yangiliklarning o'zbekcha mazmuni.",
        kr_uz: "Бұл соңғы жаңалықтардың мазмұны.",
        ru: "Это содержание последних новостей на русском.",
      },
      info_id: 1,
      images: [
          "https://nauz.uz/medias/article/big/868/46646819-269b-4985-b99d-c910bb99e80d.jpg",
        "https://nauz.uz/medias/article/big/865/photo-5474177698881461946-y.jpg",
        "https://nauz.uz/medias/article/big/868/46646819-269b-4985-b99d-c910bb99e80d.jpg",

      ],
      show_on_homepage: true,
      show_on_slider: false,
      views_count: 150,
      author: "Author 1",
      document: ["document1.pdf"],
      _page: "page1",
      created_at: "2024-12-10T12:47:00.569Z",
      updated_at: "2024-12-02",
    },
    {
      title: {
        en: "Technology Update",
        uz: `O‘zMAda "Qatag‘on qurbonlari xotirasini yod yetish haftaligi" munosabati bilan bir qator tadbirlar bo‘lib o‘tdi`,
        kr_uz: "Технология Жаңартуы",
        ru: "Обновление Технологий",
      },
      content: {
        en: "Latest updates in the technology sector.",
        uz:`
<br/>
        
        <i>O‘zbekiston Respublikasi Prezidentining 2024-yil 19-iyuldagi “Siyosiy qatag‘on qurboni bo‘lgan yurtdoshlarimiz hayoti va faoliyatini o‘rganish, targ‘ib qilish hamda ularning xotirasini abadiylashtirish borasidagi ishlarni kengaytirish to‘g‘risida”gi PQ-270-son qarori hamda “Qatag‘on qurbonlari xotirasini yod etish haftaligi”ni o‘tkazish maqsadida O‘zbekiston Milliy arxivda yoshlar ishtirokida ma’naviy-ma’rifiy tadbir o‘tkazildi.</i>  
<br/>
<br/>

<strong>Ushbu tadbirda O‘zbekiston Milliy arxivi katta ilmiy xodimi, tarix fanlari doktori, professor M. Isakova tomonidan arxivda saqlanayotgan tarixiy hujjatlar asosida qiziqarli doklad tayyorlandi. Shuningdek, Usmon Nosirning shaxsiy fondidagi yozishmalar, xatlardan namunalar o‘qib eshittirildi.</strong>  
<br/>
<br/>

<p>Tadbir so‘nggida yosh arxivchi xodimlar tomonidan qatag‘on qurbonlari bo‘yicha berilgan savollarga yetarlicha javob oldilar.</p>`,
        kr_uz: "Технология саласындағы соңғы жаңалықтар.",
        ru: "Последние обновления в технологической сфере.",
      },
      info_id: 2,
      images: [
        "https://nauz.uz/medias/article/big/865/photo-5474177698881461946-y.jpg",
        "https://nauz.uz/medias/article/big/868/46646819-269b-4985-b99d-c910bb99e80d.jpg",
      ],
      show_on_homepage: false,
      show_on_slider: true,
      views_count: 250,
      author: "Author 2",
      document: ["document2.pdf"],
      _page: "page2",
      created_at: "2024-12-10T12:47:00.569Z",
      updated_at: "2024-12-02",
    },
    {
      title: {
        en: "Sports Highlights",
        uz: "Germaniyaning Erlangen va Nyurnbergdagi Fridrix-Aleksandr universiteti talabalari O‘zbekiston Milliy arxiviga tashrif buyurishdi.",
        kr_uz: "Спорт Жаңалықтары",
        ru: "Спортивные Новости",
      },
      content: {
        en: "Highlights of the recent sports events.",
        uz: "So'nggi sport voqealarining diqqatga sazovor joylari.",
        kr_uz: "Соңғы спорт оқиғаларының маңызды сәттері.",
        ru: "Основные моменты последних спортивных событий.",
      },
      info_id: 3,
      images: ["https://nauz.uz/medias/article/big/866/photo-5474556184284490107-y.jpg"],
      show_on_homepage: true,
      show_on_slider: true,
      views_count: 300,
      author: "Author 3",
      document: ["document3.pdf"],
      _page: "page3",
      created_at: "2024-12-10T12:47:00.569Z",
      updated_at: "2024-12-02",
    },
    {
      title: {
        en: "Health Tips",
        uz: "Salomatlik Maslahatlari",
        kr_uz: "Денсаулық Кеңестері",
        ru: "Советы По Здоровью",
      },
      content: {
        en: "Useful tips to maintain your health.",
        uz: "Salomatlikni saqlash bo'yicha foydali maslahatlar.",
        kr_uz: "Денсаулықты сақтау бойынша пайдалы кеңестер.",
        ru: "Полезные советы для поддержания здоровья.",
      },
      info_id: 4,
      images: ["https://nauz.uz/medias/article/big/862/1b78b87a-1ca5-4486-a6e3-94a3b155f86a.jpg"],
      show_on_homepage: true,
      show_on_slider: false,
      views_count: 180,
      author: "Author 4",
      document: ["document4.pdf"],
      _page: "page4",
      created_at: "2024-12-10T12:47:00.569Z",
      updated_at: "2024-12-02",
    },
    {
      title: {
        en: "Travel Guide",
        uz: "Sayohat Qo'llanmasi",
        kr_uz: "Саяхат Нұсқаулығы",
        ru: "Путеводитель",
      },
      content: {
        en: "Explore the best travel destinations.",
        uz: "Eng yaxshi sayohat joylarini o'rganing.",
        kr_uz: "Ең жақсы саяхат орындарын зерттеңіз.",
        ru: "Исследуйте лучшие места для путешествий.",
      },
      info_id: 5,
      images: ["https://nauz.uz/medias/article/big/868/46646819-269b-4985-b99d-c910bb99e80d.jpg"],
      show_on_homepage: false,
      show_on_slider: true,
      views_count: 220,
      author: "Author 5",
      document: ["document5.pdf"],
      _page: "page5",
      created_at: "2024-12-10T12:47:00.569Z",
      updated_at: "2024-12-02",
    },
    {
      title: {
        en: "Economic Insights",
        uz: "Iqtisodiy Tahlillar",
        kr_uz: "Экономикалық Талдаулар",
        ru: "Экономические Анализы",
      },
      content: {
        en: "In-depth analysis of economic trends.",
        uz: "Iqtisodiy tendentsiyalarni chuqur tahlil qilish.",
        kr_uz: "Экономикалық үрдістерді терең талдау.",
        ru: "Глубокий анализ экономических тенденций.",
      },
      info_id: 6,
      images: ["https://nauz.uz/medias/article/big/865/photo-5474177698881461946-y.jpg"],
      show_on_homepage: true,
      show_on_slider: false,
      views_count: 275,
      author: "Author 6",
      document: ["document6.pdf"],
      _page: "page6",
      created_at: "2024-12-10T12:47:00.569Z",
      updated_at: "2024-12-02",
    },
    {
      title: {
        en: "Education News",
        uz: "Ta'lim Yangiliklari",
        kr_uz: "Білім Жаңалықтары",
        ru: "Новости Образования",
      },
      content: {
        en: "Updates from the education sector.",
        uz: "Ta'lim sohasidagi yangiliklar.",
        kr_uz: "Білім саласындағы жаңалықтар.",
        ru: "Новости из сферы образования.",
      },
      info_id: 7,
      images: ["education1.jpg", "education2.jpg"],
      show_on_homepage: true,
      show_on_slider: true,
      views_count: 320,
      author: "Author 7",
      document: ["document7.pdf"],
      _page: "page7",
      created_at: "2024-12-10T12:47:00.569Z",
      updated_at: "2024-12-02",
    },
    {
      title: {
        en: "Entertainment Buzz",
        uz: "Ko'ngilochar Yangiliklar",
        kr_uz: "Көңіл көтеру Жаңалықтары",
        ru: "Развлекательные Новости",
      },
      content: {
        en: "Latest trends in the entertainment industry.",
        uz: "Ko'ngilochar sanoatidagi so'nggi tendentsiyalar.",
        kr_uz: "Көңіл көтеру индустриясындағы соңғы үрдістер.",
        ru: "Последние тенденции в индустрии развлечений.",
      },
      info_id: 8,
      images: ["entertainment1.jpg", "entertainment2.jpg"],
      show_on_homepage: false,
      show_on_slider: true,
      views_count: 190,
      author: "Author 8",
      document: ["document8.pdf"],
      _page: "page8",
      created_at: "2024-12-10T12:47:00.569Z",
      updated_at: "2024-12-02",
    },
]