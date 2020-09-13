import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort: "",
    order: "",
    user: this.props.user,
    votes: "",
  };

  componentDidMount() {
    this.gettingArticleList(this.props.topic);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.gettingArticleList(this.props.topic);
    }
    if (prevState.votes !== this.state.votes) {
      this.gettingArticleList();
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
            const {
              title,
              author,
              topic,
              created_at,
              votes,
              article_id,
            } = article;
            return [
              <li className="articleCardTitle">
                <span id="title">{title} </span>written by
                <span id="author"> {author}</span>
                <br></br>
                <br></br>date created
                <span id="date_created">
                  {" "}
                  {created_at.slice(0, 10).split("-").reverse().join("-")}
                </span>
                <br></br>
                <br></br> votes&nbsp;&nbsp;
                <span id="votes">
                  {votes}
                  <button onClick={() => this.handleVoteClick(1, article_id)}>
                    <span role="img" aria-label="thumbs up"></span>👍
                  </button>
                  <button onClick={() => this.handleVoteClick(-1, article_id)}>
                    <span role="img" aria-label="thumbs down"></span>
                    👎
                  </button>
                </span>
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
                <br></br>
                <span role="img" aria-label="speech bubble">
                  💬
                </span>
              </li>,
            ];
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

  handleVoteClick = (vote, article_id) => {
    api.articleVote(article_id, vote).then(() => {
      this.setState((currentState) => {
        return { votes: currentState.votes + vote };
      });
    });
  };
}

export default Articles;
