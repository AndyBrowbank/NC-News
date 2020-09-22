import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div id="header">
      <img className="logo-container" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
