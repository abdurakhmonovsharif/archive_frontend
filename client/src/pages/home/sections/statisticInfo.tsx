import {SectionTitle} from "../../../components/sections/sectionTitle/sectionTitle.tsx";
import {statisticInformation} from "../../../components/sections/statisticInfo/constants.tsx";
import {StatisticInfoCard} from "../../../components/sections/statisticInfo/statisticInfoCard.tsx";

export const StatisticInfo = () => {

    return <section className={"container"}>
        {}
        <SectionTitle title={"Statistik ma'lumotlar"}/>
        <div className={"grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-4 "}>
            {
                statisticInformation.map(({label, count}) => <StatisticInfoCard key={label} label={label}
                                                                                count={count}/>)
            }
        </div>
    </section>;
};
