import React from "react";
import { Link } from "@reach/router";
import Topics from "./Topics";

const NavBar = (props) => {
  console.log(props);
  return (
    <div>
      <h3 id="navbar">Welcome to NC News</h3>
      <span>
        Logged in as <p id="author">{props.user}</p>
      </span>

      <Link to="/articles">
        <h4>Display All Articles </h4>
      </Link>
      <Topics />
    </div>
  );
};

export default NavBar;
