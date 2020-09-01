import React, { Component } from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <div id="NavBar">
      <h3>N a v B a r</h3>
      <Link to="/articles">
        <h4>HomePage</h4>
      </Link>
    </div>
  );
};

export default NavBar;
