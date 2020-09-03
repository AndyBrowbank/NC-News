import React, { Component } from "react";
import * as api from "../utils/api";

class Article extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    // this.getArticle();
    console.log("PROPS - ", this.props);
    const { article_id } = this.props;
    console.log("article_id = ", article_id);
    this.gettingArticle(article_id);
  }

  render() {
    const { article } = this.state;
    console.log(this.state);
    return (
      <main>
        <section>
          <p>
            <em>{article.title} (... continued)</em>
            <br></br>
          </p>

          <li> {article.body}</li>
          <p>Comments :</p>
          <button>Show/Hide comments</button>
          <p>Votes :</p>
        </section>
      </main>
    );
  }

  gettingArticle = (article_id) => {
    api.getArticle(article_id).then((article) => {
      console.log(article);
      this.setState({ article });
    });
  };
}

export default Article;
