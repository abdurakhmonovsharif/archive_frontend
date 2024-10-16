interface Lang {
  label: string;
  value: string;
  img: string;
  label_selected:string
}


export const language: Lang[] = [
  {
    label: "O‘zbekcha",
    value: "uz",
    img: "https://cdn-icons-png.flaticon.com/512/197/197416.png",
    label_selected:"O‘zb"
  },
  {
    label: "Русский",
    value: "ru",
    img: "https://cdn-icons-png.flaticon.com/512/197/197408.png",
    label_selected:"Рус"

  },
  {
    label: "Ўзбекча",
    value: "kr_uz",
    img: "https://cdn-icons-png.flaticon.com/512/197/197416.png",
    label_selected:"Ўзб"
    
  },
  {
    label: "English",
    value: "en",
    img: "https://cdn-icons-png.flaticon.com/512/197/197374.png",
    label_selected:"Eng"

  },
];


