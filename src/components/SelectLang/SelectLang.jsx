import React from "react";
import "./SelectLang.css";
import { python } from "@codemirror/lang-python";
import { go } from "@codemirror/lang-go";
import { LANG_VERSIONS } from "../../utils/constants"; // Импорт констант с версиями языков

const SelectLang = ({ setLanguage }) => {
  const languages = Object.entries(LANG_VERSIONS);

  // функция изменения языка в выпадающем меню
  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    if (selectedLang === "python") {
      setLanguage(python());
    } else if (selectedLang === "go") {
      setLanguage(go());
    }
  };

  return (
    <div className="select_container">
      <select className="select" onChange={handleLanguageChange}>
        {languages.map(([language, version]) => (
          <option key={language} className="option" value={language}>
            {language} {version}
          </option>
        ))}
      </select>
      <img className="select_arrow" src="images/arrow.svg" alt="arw" />
    </div>
  );
};

export default SelectLang;
