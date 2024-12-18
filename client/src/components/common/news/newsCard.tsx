import {useContext} from 'react'
import {INews} from '../../../types/ITypes'
import {Card, Image, Typography} from 'antd'
import {LanguageContext} from '../../../context/language_context'
import {CiCalendar, CiClock1} from 'react-icons/ci'
import {AiOutlineEye} from 'react-icons/ai'
import {MdOutlineArrowOutward} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {ROUTES} from '../../../constants/router'

const {Title} = Typography

interface NewsCardProps {
    variant: "COL" | "ROW"
}

const NewsCard = ({title, created_at, views_count, images, variant, content, info_id}: INews & NewsCardProps) => {
    const {lang} = useContext(LanguageContext)
    return (
        variant === "COL" ?
            <Card
                className='rounded-xl border-0  p-3 md:flex-row  flex-col flex  xl:flex-row items-center  gap-x-3   my-2  duration-500 ease-in-out transition-all '
                bodyStyle={{
                    width: "100%",
                    paddingLeft: 3,
                    paddingRight: 3,
                    alignItems: "start",
                    display: "flex",
                    flexDirection: "column"
                }}
                cover={
                    <Image width={427} preview className='rounded-md  border !h-[279px]' src={images[0]}
                           alt={title[lang]}/>
                }>
                <div className='flex items-start  xl:h-[260px] gap-y-3 flex-col'>
                    <div className='space-y-2'>
                        <Title level={3} className='font-semibold line-clamp-2'>{title[lang]}</Title>
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
                    </div>
                    <div className='mt-3'>
                        <Title level={5} className=' !font-normal line-clamp-3'>{content[lang]}</Title>
                        <Link to={`${ROUTES.news}/${info_id}`}
                              className='flex mt-4 text-archive_primary hover:text-archive_primary transition-all duration-400 items-center gap-x-2 text-baseduration-300'>
                            <span className="text-lg  hover:ext-archive_primary text-archive_primary">Batafsil</span>
                            <MdOutlineArrowOutward/>
                        </Link>
                    </div>
                </div>
            </Card>
            :
            <Link to={`${ROUTES.news}/${info_id}`}>
                <Card hoverable
                      className='rounded-xl p-3   flex flex-col items-center my-2 !border-0 h-[365px] duration-500 ease-in-out transition-all '
                      bodyStyle={{
                          width: "100%",
                          paddingLeft: 3,
                          paddingRight: 3,
                          paddingBottom: 10,
                          alignItems: "start",
                          display: "flex",
                          flexDirection: "column"
                      }}
                      cover={
                          <Image height={230} preview={false} className='rounded-xl border !w-[420px]' src={images[0]}
                                 alt={title[lang]}/>
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
            </Link>
    )
}

export default NewsCard