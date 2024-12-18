import PageTitle from "../../components/common/pageTitle/pageTitle.tsx";
import {useParams} from "react-router-dom";
import {demoNews} from "../../components/common/news/constants.tsx";
import {useContext, useRef} from "react";
import {LanguageContext} from "../../context/language_context.tsx";
import {INews} from "../../types/ITypes.ts";
import ContentViewer from "../../components/common/contentViewer/contentViewer.tsx";

const NewsById = () => {
    const {lang} = useContext(LanguageContext);
    const {id} = useParams();
    const containerRef = useRef<HTMLDivElement>(null);
    const foundNews = demoNews.find((item) => item.info_id === Number(id)) as INews
    const breadcrumbs = [
        {title: "Asosiy sahifa", link: "/"},
        {title: "Yangiliklar", link: "/news",},
        {title: foundNews.title[lang],maxWidth:"50%"},
    ];
    return (
        <div ref={containerRef}>
            <PageTitle
                title={foundNews?.title[lang] || ""||""}
                breadcrumbs={breadcrumbs}
                printElement={containerRef}
            />
          <ContentViewer {...foundNews} />
        </div>
    )
}
export default NewsById