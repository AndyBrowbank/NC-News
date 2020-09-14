import React, { Component } from "react";
import * as api from "../utils/api";
import CommentAdder from "../components/CommentAdder";
import Vote from "../components/Vote";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    votes: "",
  };

  componentDidMount() {
    const { article_id } = this.props;

    this.gettingArticle(article_id);
    this.gettingComments(article_id); // re-render by calling gettingComments with article_id
    //otherwise get undefined
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.comments !== this.state.comments) {
  //     this.gettingComments(this.state.comments);
  //   }
  // }
  componentDidUpdate(prevProps, prevState) {
    const { article_id } = this.props;
    if (prevState.votes !== this.state.votes) {
      this.gettingComments(article_id);
    }
  }

  render() {
    const { article, comments, isLoading, article_id } = this.state;

    if (isLoading) return <h3>...Loading page please wait...</h3>;
    return (
      <main>
        <section key={article_id}>
          <p>
            <em>{article.title} (... continued)</em>
            <br></br>
          </p>
          <p>{article.topic}</p>
          <li key={article_id}> {article.body}</li>
          <p>Comments :</p>
          <br></br>
          <br></br>
          <CommentAdder addComment={this.addComment} />
          {comments.map((comment) => {
            const { body, author, votes, comment_id } = comment;

            return [
              <div>
                <li key={comment_id} id="comment">
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
                      <span id="votes">
                        {" "}
                        <Vote id={comment_id} path={"comments"} />
                      </span>
                    )}
                  </li>
                </li>
                ,
              </div>,
            ];
          })}
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

        return { comments };
      })
    );
  };

  // handleVoteClick = (vote) => {
  //   const { id } = this.props.id;
  //   const { path } = this.props.path;

  //   api.patchVote(id, vote, path).then(() => {
  //     this.setState((currentState) => {
  //       return { votes: currentState.votes + vote };
  //     });
  //   });
  // };
}

export default Article;
