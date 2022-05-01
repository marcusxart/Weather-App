import React from "react";
import Nav from "./Nav";

const Header = ({ handleToggle, isToggle }) => {
  return (
    <header style={{ zIndex: 10, position: "sticky", width: "100%" }}>
      <Nav handleToggle={handleToggle} isToggle={isToggle} />
    </header>
  );
};

export default Header;
