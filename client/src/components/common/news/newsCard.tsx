import  { useContext } from 'react'
import { INews } from '../../../types/ITypes'
import { Card, Image,Typography } from 'antd'
import { LanguageContext } from '../../../context/language_context'
import { CiCalendar, CiClock1 } from 'react-icons/ci'
import { AiOutlineEye } from 'react-icons/ai'
const {Title} =Typography

const NewsCard = ({ title, created_at, views_count, images }: INews) => {
    const { lang } = useContext(LanguageContext)
    return (
        <Card hoverable  className='rounded-xl p-3  flex flex-col items-center my-2 !border-0 w-[365px] h-[365px] duration-500 ease-in-out transition-all '
        bodyStyle={{width:"100%",paddingLeft:3,paddingRight:3,paddingBottom:10,alignItems:"start",display:"flex",flexDirection:"column"}}
        cover={
            <Image width={356} height={230} preview={false} className='rounded-xl' src={images[0]} alt={title[lang]} />
        }>
            <div className='flex items-center justify-start gap-x-4 w-full '>
                <div className='flex gap-x-1 items-center'>
                    <CiCalendar/>
                    <span>{created_at}</span>
                </div>
                <div className='flex gap-x-1 items-center'>
                    <CiClock1/>
                    <span>{created_at}</span>
                </div>
                <div className='flex gap-x-1 items-center'>
                    <AiOutlineEye/>
                    <span>{views_count}</span>
                </div>
            </div>
            <div className='mt-3'>
                <Title level={5} className='font-semibold line-clamp-2'>{title[lang]}</Title>
            </div>
        </Card>
    )
}

export default NewsCard