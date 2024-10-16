import FacebookIcon from "../assets/icons/facebook.svg";
import TelegrammIcon from "../assets/icons/telegramm.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

interface Contact {
  title: string;
  address: string;
  email: string;
  icons: { name: string, icon: string }[]
}

export const contacts: Contact = {

  title: "O‘zbekiston Milliy arxivi",
  address: "Chilonzor ko‘chasi 2-uy",
  email: "info@nauz.uz",
  icons: [
    { name: "facebook", icon: FacebookIcon },
    { name: "telegramm", icon: TelegrammIcon },
    { name: "youtube", icon: YoutubeIcon },
  ],

};

