import React, { Component } from "react";
import * as api from "../utils/api";
import CommentAdder from "../components/CommentAdder";
import Vote from "../components/Vote";
import ErrorMessage from "../components/ErrorMessage";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    votes: "",
    error: null,
  };

  componentDidMount() {
    const { article_id } = this.props;

    this.gettingArticle(article_id);
    this.gettingComments(article_id);
  }

  render() {
    const { error, article, comments, isLoading, article_id } = this.state;
    if (error)
      return <ErrorMessage errorMessage={error.msg} status={error.status} />;
    if (isLoading) return <h3>...Loading page please wait...</h3>;
    return (
      <div id="DisplayCard">
        <section key={article_id} id="title">
          <em>
            <u>{article.title}</u> (... continued)
          </em>
        </section>
        <section id="topicColour">{article.topic}</section>
        <p> {article.body}</p>
        <h4>Comments :</h4>

        <CommentAdder addComment={this.addComment} />
        {comments.map((comment) => {
          const { body, author, votes, comment_id, article_id } = comment;

          return [
            <ul key={comment_id} className="DisplayCard">
              <li>
                <p id="author">
                  <strong>{author}</strong>
                </p>
                <p className="comment">{body}</p>
                <p>Votes {votes}</p>
                {author === this.props.user ? (
                  <button onClick={() => this.removeComment(comment_id)}>
                    delete comment
                  </button>
                ) : (
                  <section id="votes">
                    {" "}
                    <Vote
                      id={comment_id}
                      path={"comments"}
                      votes={votes}
                      article_id={article_id}
                    />
                  </section>
                )}
              </li>
            </ul>,
          ];
        })}
      </div>
    );
  }

  gettingArticle = (article_id) => {
    api
      .getArticle(article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((error) => {
        const { status, data } = error.response;
        this.setState({ error: { status: status, msg: data.msg } });
      });
  };

  gettingComments = (article_id) => {
    api
      .getComments(article_id)
      .then(({ comments }) => {
        this.setState({ comments });
      })
      .catch((error) => {
        const { status, data } = error.response;
        this.setState({ error: { status: status, msg: data.msg } });
      });
  };

  addComment = (comment) => {
    api
      .postComment(comment, this.props.article_id, this.props.user)
      .then((comment) => {
        this.setState((currentState) => {
          return { comments: [comment, ...currentState.comments] };
        });
      });
  };

  removeComment = (comment_id) => {
    api
      .deleteComment(comment_id)
      .then(
        this.setState((currentState) => {
          const comments = currentState.comments.filter((comment) => {
            return comment.comment_id !== comment_id;
          });

          return { comments };
        })
      )
      .catch((err) => {
        this.setState({ error: err.response.data.msg });
      });
  };
}

export default Article;
