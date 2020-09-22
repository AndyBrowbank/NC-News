import React from "react";
import { Link } from "@reach/router";
import Topics from "./Topics";

const NavBar = (props) => {
  return (
    <div className="container">
      <div className="box">
        Logged in as <span id="author">{props.user}</span>
      </div>
      <div className="box">
        <Link to="/articles">Display All Articles</Link>
        <Topics />
      </div>
    </div>
  );
};

export default NavBar;
