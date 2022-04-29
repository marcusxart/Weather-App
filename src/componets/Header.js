import React from "react";
import Nav from "./Nav";

const Header = ({ handleToggle, isToggle }) => {
  return (
    <header>
      <Nav handleToggle={handleToggle} isToggle={isToggle} />
    </header>
  );
};

export default Header;
