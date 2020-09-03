import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class NavBar extends Component {
  state = {};

  // componentDidMount = () => {
  //   this.loadTopics();
  // };

  render() {
    return (
      <div id="NavBar">
        <h3>Navigation</h3>
        <Link to="/articles">
          <h4>HomePage </h4>
        </Link>
        <p>Select articles by Topic</p>
      </div>
    );
  }
}

export default NavBar;
