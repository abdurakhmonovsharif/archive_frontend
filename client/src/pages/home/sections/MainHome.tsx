import React from "react";
import {Header} from "../../../layout/header";
import {Outlet} from "react-router-dom";
import {Footer} from "../../../layout/footer/Footer.tsx";
import {HeroSlider} from "../../../components/sections/slider/heroSlider/HeroSlider.tsx";
import Services from "../../../components/sections/services/Services.tsx";


export const DefaultComponent = () => {
    return <React.Fragment>
        <main>
            <section>
                <div
                    className="container grid md:grid-cols-2 grid-cols-1 xl:grid-cols-2 items-center gap-x-2  flex-wrap">
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
