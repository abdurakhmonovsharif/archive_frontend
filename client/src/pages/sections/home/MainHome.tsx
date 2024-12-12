import React from "react";
import {Header} from "../../../layout/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "../../../layout/Footer/Footer.tsx";
import {HeroSlider} from "../../../components/sections/slider/heroSlider/HeroSlider.tsx";
import Services from "../../../components/sections/services/Services.tsx";


export const DefaultComponent = () => {
    return <React.Fragment>
        <main>
            <section>
                <div className="container flex items-center gap-x-2">
                    <HeroSlider/>
                    <Services/>
                </div>
            </section>
        </main>
    </React.Fragment>
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
