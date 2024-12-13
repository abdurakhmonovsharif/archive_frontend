import React from "react";
import { ThemeContext } from "../../context/theme.context";
import { TopHeader } from "./TopHeader";
import {HeaderBottom} from "./BottomHeader.tsx";


export const Header = () => {
  const { isDarkMode } = React.useContext(ThemeContext);
  return (
    <header>
      <div className={`${isDarkMode ? "bg-black" : "bg-[#264DB1]"}`}>
        <div className="container py-3 ">
          <TopHeader />
        </div>
      </div>
      <div className="my-container">
        <HeaderBottom />
      </div>
    </header>
  );
};