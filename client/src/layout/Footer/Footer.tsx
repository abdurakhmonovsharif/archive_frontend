import { useContext, useState } from "react"
import { ThemeContext } from "../../context/theme.context"
import { Button, Image, Input } from "antd"
import { Link } from "react-router-dom"
import Logo from '../../assets/img/photo_2024-10-05_16-52-36.jpg'
import { categories } from "../../data/categories"
import { MdOutlineArrowOutward } from "react-icons/md"
import { contacts } from "../../data/contact"
import { IoIosSend } from "react-icons/io";
export const Footer = () => {
    const { isDarkMode } = useContext(ThemeContext)
    console.log(isDarkMode)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const onHoverIcon = (index: number) => {
        setHoveredIndex(index);
    };
    // return <footer>
    //     <div
    //      className={`${isDarkMode ? "bg-black" : "bg-[#264DB1]"} py-3`}
    //      >
    //         <div className="container">

    //         </div>
    //      </div>
    // </footer>
    return <footer className="bg-archive_primary dark:bg-archive_bg_dark text-white py-16  dark:border-t dark:border-gray-200 ">
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
                    {contacts.icons.map((el, i) => (
                        <Link
                            key={i}
                            to={"/"}
                            onMouseMove={() => onHoverIcon(i)}
                            onMouseLeave={() => onHoverIcon(contacts.icons.length)}
                        >
                            <div
                                className={`
                                ${hoveredIndex === i ? "bg-[#252c3f]" : isDarkMode?"bg-archive_bg_dark":"bg-[#4465BA]"}
                                w-[28px] h-[24px] rounded-md p-0.5 flex justify-center items-center duration-300`}>
                                <img src={el.icon} alt="svg"/>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>

                {/* Middle Column */}
                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-medium">Havolalar</h3>
                        <ul className="space-y-2 text-gray-300">
                            {categories.map((item, index) =>
                                <li key={index}><Link to="#" className="hover:text-white">{item.title}</Link></li>
                            )}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-medium">Manzil</h3>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                100043, Toshkent shahri, Chilonzor ko`chasi, 2 uy
                                <Link target="_blank" to={"https://yandex.uz/maps/-/CHEgY2NC"} className='flex mt-2 items-center gap-x-2 text-baseduration-300'>
                                    <span className="text-white">Xaritadan ko'rish</span>
                                    <MdOutlineArrowOutward />
                                </Link>
                            </p>
                            <p>info@nauz.uz</p>
                            <p>
                                +998 71 230 47 66
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <h3 className="text-xl font-medium">Yangliliklardan xabardor bo'lish</h3>
                    <p className="text-gray-300">
                        Elektron pochta manzilingizni kiritgan holda yangiliklar va maslahatlar bilan to'g'ridan to'g'ri
                        tanishing
                    </p>
                    <div className="flex">
                        <Input
                            placeholder="Elektron pochta manzilingi"
                            className="flex-grow mr-2 bg-white/10 border-white/20 focus-within:!outline-none  focus:!outline-none text-black placeholder:text-gray-400"
                        />
                        <Button
                            type="primary"
                            icon={<IoIosSend color="#000"/>}
                            className="bg-white text-blue-600 focus-within:bg-archive_primary active:bg-archive_primary *: hover:bg-gray-100"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            {/* <div className="mt-16 pt-8 border-t border-white/20 flex justify-between items-center">
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
            </div> */}
        </div>
    </footer>
}