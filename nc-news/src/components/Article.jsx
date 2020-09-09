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
            {comments.map((comment) => {
              const { body, author, votes } = comment;
              return [
                <div>
                  <li id="comment">
                    <strong>{author}</strong>
                    <li>
                      {body}

                      <li>Votes {votes}</li>
                      <br></br>
                      <br></br>
                    </li>
                  </li>
                  ,
                </div>,
              ];
            })}
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

  addComment = (article_id) => {
    api.postComment(article_id).then(({ comment }) => {
      this.setState({ comment });
    });
  };
}

export default Article;
