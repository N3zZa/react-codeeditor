import React from "react";
import "./Header.css";
import SelectLang from "../SelectLang/SelectLang";

const Header = ({ setLanguage }) => {
  return (
    <header className="App-header">
      <SelectLang setLanguage={setLanguage} />
    </header>
  );
};

export default Header;
