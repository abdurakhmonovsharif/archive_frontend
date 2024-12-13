import { useContext } from "react"
import { ThemeContext } from "../../context/theme.context"
import { Button, Image, Input } from "antd"
import { Link } from "react-router-dom"
import Logo from '../../assets/img/photo_2024-10-05_16-52-36.jpg'
export const Footer = () => {
    const {isDarkMode}=useContext(ThemeContext)
    // return <footer>
    //     <div
    //      className={`${isDarkMode ? "bg-black" : "bg-[#264DB1]"} py-3`}
    //      >
    //         <div className="container">

    //         </div>
    //      </div>
    // </footer>
    return <footer className="bg-[#2851B7] text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="w-16 h-16">
            <Image
              src={Logo}
              preview={false}
              alt="Logo"
              className="rounded-full"
              width={64}
              height={64}
            />
          </div>
          <h3 className="text-xl font-medium">
            Bizni ijtimoiy tarmoqlarda kuzatib boring
          </h3>
          <div className="flex space-x-4">
            <Link to="#" className="hover:opacity-80">
              <Image
                src="/placeholder.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </Link>
            <Link to="#" className="hover:opacity-80">
              <Image
                src="/placeholder.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </Link>
            <Link to="#" className="hover:opacity-80">
              <Image
                src="/placeholder.svg"
                alt="YouTube"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </Link>
            <Link to="#" className="hover:opacity-80">
              <Image
                src="/placeholder.svg"
                alt="Telegram"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </Link>
          </div>
        </div>

        {/* Middle Column */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Vazirlik</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="#" className="hover:text-white">Vazirlik haqida</Link></li>
              <li><Link to="#" className="hover:text-white">Yangiliklar</Link></li>
              <li><Link to="#" className="hover:text-white">Bo'sh ish o'rinlari</Link></li>
              <li><Link to="#" className="hover:text-white">Interaktiv xizmatlar</Link></li>
              <li><Link to="#" className="hover:text-white">Mediateka</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Manzil</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                100128, O'zbekiston Respublikasi, Toshkent shahri, Zulfiyaxonim ko'chasi, 3 - uy
              </p>
              <p>(1167)</p>
              <p>
                Devonxona +998 (71) 202-05-00 (134)
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Yangliliklardan xabardor bo'lish</h3>
          <p className="text-gray-300">
            Elektron pochta manzilingizni kiritgan holda yangiliklar va maslahatlar bilan to'g'ridan to'g'ri tanishing
          </p>
          <div className="flex">
            <Input
              placeholder="Elektron pochta manzilingi"
              className="flex-grow mr-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button
              type="primary"
              icon={""}
              className="bg-white text-blue-600 hover:bg-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 pt-8 border-t border-white/20 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <span>Sayt ma'lumotlaridan foydalanilganda manba ko'rsatilishi shart!</span>
          <span>Saytdagi barcha materiallardan quyidagi litsenziya bo'yicha foydalanish mumkin: Creative Commons Attribution 4.0 International.</span>
        </div>
        <div className="w-24">
          <Image
            src="/placeholder.svg"
            alt="Oscar Digital Agency"
            width={96}
            height={48}
            className="brightness-0 invert"
          />
        </div>
      </div>
    </div>
  </footer>
}