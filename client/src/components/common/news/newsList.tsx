import { Col, Row } from "antd"
import { demoNews } from "./constants"
import NewsCard from "./newsCard"

const NewsList = () => {
    return (
        <Row gutter={16}>
            {demoNews.slice(0,3).map((news, index) => <Col span={8} key={index}>
                <NewsCard {...news} />
            </Col>)}
        </Row>
    )
}

export default NewsList