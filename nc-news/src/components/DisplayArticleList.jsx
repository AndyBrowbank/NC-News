import React from "react";

const DisplayArticleList = (props) => {
  const { articles } = props;
  console.log("props = ", props);

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
              <button className="readMoreButton">Read More</button>
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
