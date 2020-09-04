import React, { Component } from "react";
import { Link } from "@reach/router";

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
      </div>
    );
  }
}
export default NavBar;
