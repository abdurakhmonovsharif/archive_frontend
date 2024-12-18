import { SectionTitle } from '../../../components/common/sectionTitle/sectionTitle'
import { Link } from 'react-router-dom'
import { MdOutlineArrowOutward } from "react-icons/md";
import NewsList from '../../../components/common/news/newsList';
import { ROUTES } from '../../../constants/router';

const News = () => {
  return (
    <div className='container '>
      <div className='flex items-center justify-between pr-1'>
        <SectionTitle title='Yangiliklar' />
        <Link to={ROUTES.news}>
          <div className='flex items-center gap-x-2 text-baseduration-300'>
            <span className="text-archive_primary">Barchasi</span>
            <MdOutlineArrowOutward />
          </div>
        </Link>
      </div>
      <NewsList variant="ROW" count={3} />
    </div>
  )
}

export default News