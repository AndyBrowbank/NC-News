import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import * as api from "../utils/api";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort: "",
    order: "",
  };

  componentDidMount() {
    this.gettingArticleList(this.props.topic);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "in componentDidUpdate :) .....prevState = ",
      prevState,
      "prevProps = ",
      prevProps,
      "this.props = ",
      this.props
    );
    if (prevProps.topic !== this.props.topic) {
      this.gettingArticleList(this.props.topic);
    }
  }
  render() {
    const { articles, isLoading } = this.state;
    const { topic } = this.props;

    if (isLoading) return <h3>...Loading page please wait...</h3>;

    return (
      <div>
        <h3>
          List of <span id="topicList">{topic}</span> articles below
        </h3>

        <span>sort by </span>
        <select
          id="sort"
          onClick={(event) => {
            this.gettingArticleList(topic, event.target.value);
          }}
        >
          <option value="Select">Select</option>
          <option value="created_at">date created</option>
          <option value="comment_count">comment count</option>
          <option value="votes">votes</option>
        </select>
        <span>order by</span>
        <select
          id="order"
          onClick={(event) => {
            this.gettingArticleList(topic, this.state.sort, event.target.value);
          }}
        >
          <option value="Select">Select</option>
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
        </select>

        <ul>
          {articles.map((article) => {
            const { title, author, topic, created_at, votes } = article;
            return [
              <li className="articleCardTitle">
                <span id="title">{title} </span>written by
                <span id="author"> {author}</span>
                <br></br>
                <br></br>date created
                <span id="date_created"> {created_at} </span>
                <br></br>
                <br></br>votes
                <span id="votes"> {votes} </span>
                <Link
                  to={`/articles/${article.article_id}`}
                  id="rCorners2"
                  className="readMoreButton"
                  onClick={(event) => {}}
                >
                  Read More
                </Link>
              </li>,

              <li id="rcorners2" className="articleCard">
                TOPIC -- {topic}
                <br></br>
                Comment count: {article.comment_count}
                <li role="img" aria-label="speech bubble">
                  💬
                </li>
              </li>,
            ];
          })}
        </ul>
      </div>
    );
  }
  gettingArticleList = (topic, sort, order) => {
    return api.getAllArticles(topic, sort, order).then((articles) => {
      console.log("topic -", topic, "sort - ", sort, "order - ", order);
      this.setState({ articles, isLoading: false, sort, order });
    });
  };
}

export default Articles;
