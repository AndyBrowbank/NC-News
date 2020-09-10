import React, { Component } from "react";
import * as api from "../utils/api";
import CommentAdder from "../components/CommentAdder";

class Article extends Component {
  state = {
    article: {},
    comments: [],
  };

  componentDidMount() {
    const { article_id } = this.props;

    this.gettingArticle(article_id);
    this.gettingComments(article_id);
    this.removeComment();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      this.gettingComments(this.state.comments);
    }
  }

  render() {
    const { article } = this.state;
    const { comments } = this.state;

    return (
      <main>
        <section>
          <p>
            <em>{article.title} (... continued)</em>
            <br></br>
          </p>

          <p>{article.topic}</p>

          <li> {article.body}</li>
          <p>Comments :</p>
          <button
            className="button"
            onClick={() => {
              var x = document.getElementById("showHideComments");
              if (x.style.display === "none") {
                x.style.display = "block";
              } else {
                x.style.display = "none";
              }
            }}
          >
            Show/Hide comments
          </button>
          <br></br>
          <br></br>
          <CommentAdder addComment={this.addComment} />

          <ul id="showHideComments">
            {
              (console.log(comments),
              comments.map((comment) => {
                const { body, author, votes } = comment;
                console.log(body);
                return [
                  <div>
                    <li id="comment">
                      <strong>{author}</strong>
                      <li>
                        {body}

                        <li>Votes {votes}</li>
                        <br></br>
                        <br></br>
                        {author === this.props.user ? (
                          <button
                            onClick={() =>
                              this.removeComment(comment.comment_id)
                            }
                          >
                            delete comment
                          </button>
                        ) : (
                          <p>
                            do not display delete button, maybe VOTE ? as can't
                            vote on own article
                          </p>
                        )}
                      </li>
                    </li>
                    ,
                  </div>,
                ];
              }))
            }
          </ul>
        </section>
      </main>
    );
  }

  gettingArticle = (article_id) => {
    api.getArticle(article_id).then((article) => {
      this.setState({ article });
    });
  };

  gettingComments = (article_id) => {
    api.getComments(article_id).then(({ comments }) => {
      this.setState({ comments });
    });
  };

  addComment = (comment) => {
    api
      .postComment(comment, this.props.article_id, this.props.user)
      .then((comment) => {
        console.log("comment = ", comment);
        this.setState((currentState) => {
          return { comments: [comment, ...currentState.comments] };
        });
        // setState callback (setState(updater, callback)) update comment then
        //spread rest of current comments and return the lot
      });
  };

  removeComment = (comment_id) => {
    console.log("COMMENT_ID = ", comment_id);

    api.deleteComment(comment_id).then((comment_id) => {
      this.setState((currentState) => {
        // want to setState with comments !== current comment - filter ?
        return { comments: [...currentState.comments] };
      });
    });
  };
}

export default Article;
