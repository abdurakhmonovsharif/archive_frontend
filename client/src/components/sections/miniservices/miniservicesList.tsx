import { Card, Col, Row, Typography } from "antd"
import { miniservices } from "./constants"
import { useState } from "react"
const { Title } = Typography

const MiniservicesList = () => {
    const [hoveredIndex, setHoveredIndex] = useState(miniservices.length)

    return (
        <Row gutter={16}>
            {miniservices.map((service, index) => (
                <Col
                    span={8}
                    key={index}
                    onMouseLeave={() => setHoveredIndex(miniservices.length)}
                    onMouseMove={() => setHoveredIndex(index)}
                >
                    <Card
                        hoverable
                        bodyStyle={{paddingTop:13,paddingBottom:13}}
                        className="hover:bg-archive_primary  duration-500 ease-in-out transition-all "
                    >
                        <div className="w-full flex items-center gap-x-3">
                            <div
                                className={` bg-[#ebeef84d] w-[70px] h-[70px] rounded-full flex items-center justify-center  transition-colors duration-500 ease-in-out`}
                            >
                                {service.icon(index === hoveredIndex ? "#FFF" : "#254DAF")}
                            </div>
                            <Title  className={`mt-2 ${index === hoveredIndex?"!text-white":"text-black"} `} level={3}>
                                {service.label}
                            </Title>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default MiniservicesList
