import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import Vote from "./Vote";

class ArticleCard extends Component {
  state = {
    article: [],
    isLoading: true,
    sort: "",
    order: "",
    user: this.props.user,
  };

  render() {
    const { isLoading } = this.state;
    const {
      topic,
      title,
      author,
      created_at,
      article_id,
      comment_count,
    } = this.props.article;

    return (
      <div>
        <ul>
          <li className="articleCardTitle">
            <span id="title">{title} </span>written by
            <span id="author"> {author}</span>
            <br></br>
            <br></br>date created
            <span id="date_created">
              {created_at.slice(0, 10).split("-").reverse().join("-")}
            </span>
            <br></br>
            <br></br> votes&nbsp;&nbsp;
            <Vote id={article_id} path={"articles"} />
            <Link
              to={`/articles/${article_id}`}
              id="rCorners2"
              className="readMoreButton"
              onClick={(event) => {}}
            >
              Read More
            </Link>
          </li>
          ,
          <li id="rcorners2" className="articleCard">
            TOPIC -- {topic}
            <br></br>
            Comment count: {comment_count}
            <br></br>
            <span role="img" aria-label="speech bubble">
              💬
            </span>
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

export default ArticleCard;
