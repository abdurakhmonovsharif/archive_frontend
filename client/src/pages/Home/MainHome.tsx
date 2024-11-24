import React from "react";
import { Header } from "../../layout/Header";
import { SliderComponent } from "../../components/Slider";
import { Outlet } from "react-router-dom";
import { Footer } from "../../layout/Footer/Footer";


export const DefaultComponent = () => {
  return <React.Fragment>
    <main>
      <section>
        <div className="container">
          <SliderComponent />
        </div>

      </section>
    </main>
  </React.Fragment>
}
export const MainHome = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
