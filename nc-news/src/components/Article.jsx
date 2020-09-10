import React, { Component } from "react";
import * as api from "../utils/api";
import CommentAdder from "../components/CommentAdder";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    const { article_id } = this.props;

    this.gettingArticle(article_id);
    this.gettingComments(article_id);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.comments !== this.state.comments) {
  //     this.gettingComments(this.state.comments);
  //   }
  // }

  render() {
    const { article, comments, isLoading } = this.state;

    if (isLoading) return <h3>...Loading page please wait...</h3>;
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
          <br></br>
          <br></br>
          <CommentAdder addComment={this.addComment} /> //make addComment
          available // to CommentAdder
          {
            (console.log(comments),
            comments.map((comment) => {
              const { body, author, votes, comment_id } = comment;

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
                        <button onClick={() => this.removeComment(comment_id)}>
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
          {/* </ul> */}
        </section>
      </main>
    );
  }

  gettingArticle = (article_id) => {
    api.getArticle(article_id).then((article) => {
      this.setState({ article, isLoading: false });
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
        this.setState((currentState) => {
          return { comments: [comment, ...currentState.comments] };
        });
        // setState callback (setState(updater, callback)) update comment then
        //spread rest of current comments and return the lot
      });
  };

  removeComment = (comment_id) => {
    api.deleteComment(comment_id).then(
      this.setState((currentState) => {
        const comments = currentState.comments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
        console.log("COMMENTS = ", comments);
        return { comments };
      })
    );
  };
}

export default Article;
