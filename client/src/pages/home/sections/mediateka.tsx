import {SectionTitle} from "../../../components/sections/sectionTitle/sectionTitle.tsx";
import {MediaList} from "../../../components/sections/mediateka/mediaList.tsx";

export const Mediateka = () => {
    return <section className={"container"}>
        <SectionTitle title={"Mediateka"}/>
        <MediaList/>
    </section>;
};
