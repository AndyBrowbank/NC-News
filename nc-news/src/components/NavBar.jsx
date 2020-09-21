import React from "react";
import { Link } from "@reach/router";
import Topics from "./Topics";

const NavBar = (props) => {
  return (
    <div>
      <h3 id="navbar">Welcome to NC News</h3>
      <h3>
        Logged in as <section id="author">{props.user}</section>
      </h3>

      <Link to="/articles">
        <h4>Display All Articles </h4>
      </Link>
      <h4>
        Welcome to NC News. Please click on the buttons below to see articles
        sorted by topic, or to see all articles, feel free to click above
      </h4>
      <Topics />
    </div>
  );
};

export default NavBar;
