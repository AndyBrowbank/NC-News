import React, { Component } from "react";
import * as api from "../utils/api";

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
          <button>Show/Hide comments</button>
          <ul>
            {comments.map((comment) => {
              const { body, author, votes } = comment;
              return [
                <li>
                  <strong>{author}</strong>
                  <li>
                    {body}

                    <li>Votes {votes}</li>
                    <br></br>
                    <br></br>
                  </li>
                </li>,
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
      console.log(comments);

      this.setState({ comments });
    });
  };
}

export default Article;
