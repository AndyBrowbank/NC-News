import * as api from "../utils/api";
import React, { Component } from "react";
import ErrorMessage from "../components/ErrorMessage";
import { Link } from "@reach/router";

class Topics extends Component {
  state = {
    topics: [],
    articles: [],
    error: false,
    isLoading: true,
  };
  componentDidMount() {
    this.gettingTopicsList();
  }

  render() {
    const { isLoading, topics, error } = this.state;
    if (error) return <ErrorMessage errorMessage={error} />;
    if (isLoading) return <h3>...Loading page please wait...</h3>;

    return (
      <div>
        {topics.map((topic) => {
          const { slug } = topic;
          return (
            <span key={slug}>
              <Link id="topics" to={`/topics/${slug}`}>
                {" "}
                {slug}{" "}
              </Link>
              &nbsp;&nbsp;
            </span>
          );
        })}
      </div>
    );
  }

  gettingTopicsList = () => {
    api
      .getAllTopics()
      .then((topics) => {
        this.setState({ topics, isLoading: false });
      })
      .catch((error) => {
        const { status, data } = error.response;
        this.setState({ error: { status: status, msg: data.msg } });
      });
  };
}

export default Topics;
