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
          <h4>HomePage </h4>
        </Link>
        <Topics />
        {/* <h4>Please select topic</h4>
        <Link to="/topics">
          <h4>Coding</h4>
        </Link>
        <Link to="/topics">
          <h4>Football</h4>
        </Link>
        <Link to="topics">
          <h4>Cooking</h4>
        </Link> */}
      </div>
    );
  }
}
export default NavBar;
