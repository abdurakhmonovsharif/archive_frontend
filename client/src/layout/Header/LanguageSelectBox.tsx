import React from "react";
import { language } from "../../helpers/language";
import { VektorIcon } from "../../assets/icons/icons";
import { LanguageContext } from "../../context/language_context";

export const LanguageSelectBox = () => {
  const { lang, changeLanguage } = React.useContext(LanguageContext);
  const [activeChangeLang, setActiveChangeLang] = React.useState(false);
  const toogleLang = () => setActiveChangeLang(!activeChangeLang);

  const CurrentLanguage = () => {
    const currentLang = language.find((item) => item.value === lang);
    return (
      <>
        <img src={currentLang?.img} alt={currentLang?.value} width={"20px"} />
        {currentLang?.label_selected}{" "}
      </>
    );
  };

  return (
    <div
      onClick={toogleLang}
      className="language-container select-none lg:ml-[20px]" 
    >
      <div className="lang_box ">
        <div className="my-lan-select">
          <div className="lan-selected-item text-white dark:text-[#FFFFFFC2]">
            <CurrentLanguage />
          </div>
          <div className="lan-items">
            {language.map((item, i) => (
              <div
                key={i}
                className={activeChangeLang ? "lan-item block" : "hidden"}
              >
                <label
                  className={`${item.value === lang ? "text-[#264DB1]" : "text-black"
                    }`}
                >
                  <img src={item.img} alt="" width={"20px"} />
                  {item.label}
                  <input
                    hidden
                    type="radio"
                    name="language"
                    value={lang}
                    checked={lang === item.value}
                    onChange={() => {
                      toogleLang();
                      localStorage.setItem("ws_l", item.value);
                      changeLanguage(item.value);
                      window.location.reload();
                    }}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className={`${activeChangeLang ? "inline rotate-180" : "inline"} ml-auto`}>
        <VektorIcon />
      </button>
    </div>
  );
};
