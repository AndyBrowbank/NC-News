import { Router } from "@reach/router";
import * as api from "../utils/api";
import React, { Component } from "react";

import { Link } from "@reach/router";

import DisplayArticleList from "./DisplayArticleList";

class Topics extends Component {
  state = {
    topics: [],
    articles: [],
  };
  componentDidMount() {
    this.gettingTopicsList();
  }
  render() {
    const { topics } = this.state;

    return (
      <div>
        <ul>
          {topics.map((topic) => {
            const { slug } = topic;
            return (
              <li key={slug}>
                <Link to={`/topics/${slug}`}>{slug}</Link>
              </li>
            );
          })}
        </ul>
        <DisplayArticleList topics={topics} gettingTopicsList={this.topics} />
      </div>
    );
  }

  gettingTopicsList = () => {
    api.getAllTopics().then((topics) => {
      this.setState(topics);
    });
  };
}

export default Topics;
