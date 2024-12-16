import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../../../layout/Header/Header.tsx";
import {Footer} from "../../../layout/Footer/Footer.tsx";
import Partners from "./partners.tsx";
import {Hero} from "./hero.tsx";
import {StatisticInfo} from "./statisticInfo.tsx";
import {Mediateka} from "./mediateka.tsx";
import News from "./news.tsx";
import Miniservices from "./miniservices.tsx";

export const DefaultComponent = () => {
    return <main>
        <Hero/>
        <Partners/>
        <News/>
        <Miniservices/>
        <StatisticInfo/>
        <Mediateka/>
    </main>

}
export const MainHome = () => {
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    );
};
