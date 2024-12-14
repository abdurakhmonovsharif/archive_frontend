import {HeroSlider} from "../../../components/sections/slider/heroSlider/HeroSlider.tsx";
import Services from "../../../components/sections/services/Services.tsx";

export const Hero=()=> {
    return <section>
        <div
            className="container grid md:grid-cols-2 grid-cols-1 xl:grid-cols-2 items-center gap-x-2  flex-wrap">
            <HeroSlider/>
            <Services/>
        </div>
    </section>
}