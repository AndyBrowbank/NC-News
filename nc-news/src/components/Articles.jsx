import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import * as api from "../utils/api";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    value: {},
    order: {},
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    this.gettingArticleList();
    event.preventDefault();
  }
  componentDidMount() {
    this.gettingArticleList(this.props.topic);
  }

  render() {
    const { articles, isLoading } = this.state;
    const { topic } = this.props;

    if (isLoading) return <h3>...Loading page please wait...</h3>;

    return (
      <div>
        <h3>List of articles below</h3>
        <form onSubmit={this.handleSubmit}>
          <span>sort by </span>
          <select
            id="sort"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="Select">Select</option>
            <option value="date_created">date created</option>
            <option value="comment_count">comment count</option>
            <option value="votes">votes</option>
            <option value="topic">topic</option>
          </select>
          <span>order by</span>
          <select
            id="order"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="Select">Select</option>
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>

          <input type="submit" value="Submit" />
        </form>

        <ul>
          {articles.map((article) => {
            const { title, author, topic } = article;
            return [
              <li className="articleCardTitle">
                {title} written by {author}
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
                Comments:
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
    return api.getAllArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default Articles;
