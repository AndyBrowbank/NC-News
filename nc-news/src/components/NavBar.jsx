import React from "react";
import { Link } from "@reach/router";
import Topics from "./Topics";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <h3 id="navbar">Welcome to NC News</h3>
        <span>
          Logged in as <p id="author">{this.props.user}</p>
        </span>

        <Link to="/articles">
          <h4>Display All Articles </h4>
        </Link>
        <Topics />
      </div>
    );
  }
}
export default NavBar;
