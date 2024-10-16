

interface Categories {
    title: string;
    url: string;
    children: string[]
}

export const categories: Categories[] = [
    { title: "Arxiv", url: "#", children: ["Arxiv haqida", "Rahbariyat", "Bo‘limlar", "Arxiv xizmatlari", "Bo‘sh ish o‘rinlari"] },
    { title: "Interaktiv xizmatlar", url: "#", children: ["Jismoniy shaxslar uchun", "Yuridik shaxslar uchun", "Arxiv ma'lumotnomasini berish", "Savol va javoblar", "Savol yo‘llash", "Etuk kengashi", "Narxnoma"] },
    { title: "Me’yoriy hujjatlar", url: "#", children: ["O‘zbekiston Respublikasi Qonunlari", "O‘zbekiston Respublikasi Prezidenti farmonlari va qarorlari", "O‘zbekiston Respublikasi Vazirlar Mahkamasi qarorlari", "Milliy arxiv tomonidan qabul qilingan ma’yoriy- huquqiy hujjatlar", "Davlat dasturlari", "Davlat arxivlarida xizmat ko‘rsatish darajasini baholash", "Me’yoriy uslubiy hujjatlar", "Raqamlashtirish boʻyicha uslubiy koʻrsatmalar"] },
    { title: "Matbuot markazi", url: "#", children: ["Yangiliklar", "Noyob arxiv hujjatlari", "Tadbirlar", "Fotogaleriya", "Videogaleriya",] },
    { title: "Bog‘lanish", url: "#", children: [] }
]