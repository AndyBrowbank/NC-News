import React, { Component } from "react";

import * as api from "../utils/api";

import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort: "",
    order: "",
    user: this.props.user,
  };

  componentDidMount() {
    this.gettingArticleList(this.props.topic);
  }

  componentDidUpdate(prevProps, prevState) {
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
            return <ArticleCard article={article} key={[article.article_id]} />;
          })}
        </ul>
      </div>
    );
  }
  gettingArticleList = (topic, sort, order) => {
    return api.getAllArticles(topic, sort, order).then((articles) => {
      this.setState({ articles, isLoading: false, sort, order });
    });
  };
}

export default Articles;
