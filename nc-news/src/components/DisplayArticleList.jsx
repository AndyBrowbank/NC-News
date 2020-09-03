import React from "react";
import { Link } from "@reach/router";

const DisplayArticleList = (props) => {
  const { articles } = props;
  console.log("in  DisplayArticleList - props = ", props);

  // add Loader?

  return (
    <div className="mainArticleDisplay">
      <p>
        <strong>Article List</strong>
      </p>
      <ul>
        {articles.map((article) => {
          return [
            <li className="articleCardTitle">
              {" "}
              {article.title} written by {article.author}
              <Link
                to={`/articles/${article.article_id}`}
                id="readMore"
                className="readMoreButton"
                onClick={(event) => {
                  console.log("onClick handler needed");
                }}
              >
                Read More
              </Link>
            </li>,

            <li id="rcorners2" className="articleCard">
              TOPIC -- {article.topic}
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
};

export default DisplayArticleList;
