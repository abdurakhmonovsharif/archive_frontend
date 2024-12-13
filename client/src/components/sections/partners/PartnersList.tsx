import {partners} from "./constants.tsx";
import {Card} from "antd";

const PartnersList = () => {
    return partners.map((partner) => <Card >
        <Card.Meta title={partner.label} avatar={partner.image}/>
    </Card>)
}
export default PartnersList;