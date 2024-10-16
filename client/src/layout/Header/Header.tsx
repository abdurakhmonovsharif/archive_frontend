import React from "react";
import { TopHeader } from "./TopHeader";
import { ThemeContext } from "../../context/theme.context";
import { HeaderBottom } from "./BottomHeader";

export const Header = () => {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <header>
      <div className={`${isDarkMode ? "bg-black" : "bg-[#264DB1]"}`}>
        <div className="my-container py-3 ">
          <TopHeader />
        </div>
      </div>
      <div className="my-container">
        <HeaderBottom />
      </div>
    </header>

  );
};