import React, { Component } from "react";
import ErrorMessage from "../components/ErrorMessage";
import * as api from "../utils/api";

import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort: "",
    order: "",

    error: null,
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
    const { error, articles, isLoading } = this.state;
    const { topic } = this.props;

    if (error)
      return <ErrorMessage errorMessage={error.msg} status={error.status} />;

    if (isLoading) return <h3>...Loading page please wait...</h3>;

    return (
      <div className="articles">
        <h3>List of {topic} articles below</h3>
        <form>
          <label>sort by </label>
          <select
            className="select"
            onChange={(event) => {
              this.gettingArticleList(
                topic,

                event.target.value
              );
            }}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="created_at">date created</option>
            <option value="comment_count">comment count</option>
            <option value="votes">votes</option>
          </select>
          <label> order by </label>
          <select
            className="select"
            onChange={(event) => {
              this.gettingArticleList(
                topic,
                this.state.sort,
                event.target.value
              );
            }}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="asc">ascending</option>
            <option value="desc">descending</option>
          </select>
        </form>

        <ul>
          <li>
            {articles.map((article) => {
              return <ArticleCard article={article} key={article.article_id} />;
            })}
          </li>
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
