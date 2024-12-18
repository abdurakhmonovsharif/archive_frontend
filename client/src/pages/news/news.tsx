import NewsList from "../../components/common/news/newsList"
import PageTitle from "../../components/common/pageTitle/pageTitle"

const News = () => {
  const breadcrumbs = [
    { title: "Asosiy sahifa", link: "/" },
    { title: "Yangiliklar" },
  ];
  return (
    <div>
      <PageTitle
        title="Yangiliklar"
        breadcrumbs={breadcrumbs}
        />
      <div className="container">
        <NewsList variant="COL" count={6} isPagination={true} />
      </div>
    </div>
  )
}

export default News