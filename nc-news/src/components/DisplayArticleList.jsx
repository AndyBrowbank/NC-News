import React from "react";

const DisplayArticleList = (props) => {
  const { articles } = props;
  console.log("props = ", props);

  // add Loader?

  return (
    <div>
      <p>DisplayArticleList</p>
      <ul>
        {articles.map((article) => {
          return <li> {article.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default DisplayArticleList;
