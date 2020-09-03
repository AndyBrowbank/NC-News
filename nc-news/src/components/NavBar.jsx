import React, { Component } from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <div id="NavBar">
      <h3>Navigation</h3>
      <Link to="/articles">
        <h4>HomePage </h4>
      </Link>
    </div>
  );
};

export default NavBar;
