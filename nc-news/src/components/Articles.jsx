import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import * as api from "../utils/api";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

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

        <span>sort by </span>
        <select
          id="sort"
          onClick={(event) => {
            this.gettingArticleList(event.target.value);
          }}
        >
          id="topicChoice" onChange={this.change}
          value={this.state.value}><option value="Select">Select</option>
          <option value="date_created">date created</option>
          <option value="comment_count">comment count</option>
          <option value="votes">votes</option>
          <option value="topic">topic</option>
        </select>

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
  gettingArticleList = (topic) => {
    return api.getAllArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default Articles;
