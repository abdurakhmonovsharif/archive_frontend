import { Col, Pagination, Row } from "antd"
import { demoNews } from "./constants"
import NewsCard from "./newsCard"
import React from "react"
interface INewsList {
    count: number,
    isPagination?: boolean,
    variant: "COL" | "ROW"
}

const NewsList = ({ count, isPagination, variant }: INewsList) => {
    const gutter = variant === "COL" ? 1 : 16;
    const colSpan = variant === "COL" ? 24 : 8; // For COL, full-width card, for ROW, 3 cards per row

    return (
        <React.Fragment>
            <Row gutter={gutter}>
                {demoNews.slice(0, count).map((news, index) => (
                    <Col
                        xs={24}
                        sm={12}
                        md={colSpan} // Adjust based on variant
                        lg={colSpan} // Adjust based on variant
                        key={index}>
                        <NewsCard variant={variant} {...news} />
                    </Col>
                ))}
            </Row>
            {isPagination && (
                <Pagination className="flex w-full justify-center py-3" defaultCurrent={1} total={demoNews.length} />
            )}
        </React.Fragment>
    )
}

export default NewsList
