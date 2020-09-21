import React from "react";
import { Link } from "@reach/router";
import Vote from "./Vote";

const ArticleCard = (props) => {
  const {
    topic,
    title,
    author,
    created_at,
    article_id,
    comment_count,
    votes,
  } = props.article;

  return (
    <div id="DisplayCard">
      <h4 id="title">
        <u>{title}</u> written by&nbsp;&nbsp;
        <strong>
          <i>{author}</i>
        </strong>
      </h4>
      <p></p>date created &nbsp;&nbsp;
      <h4 id="date_created">
        {created_at.slice(0, 10).split("-").reverse().join("-")}
      </h4>
      <h4>Voting</h4>
      <Vote id={article_id} path={"articles"} votes={votes} />
      <h4>
        <Link
          href="#"
          data-content="Read More"
          to={`/articles/${article_id}`}
          id="rCorners2"
          className="readMoreButton"
        >
          Read More
        </Link>
      </h4>
      <li id="rcorners2" className="articleCard">
        <h4>TOPIC -- {topic}</h4>
        Comment count: {comment_count}
        <span role="img" aria-label="speech bubble">
          💬
        </span>
      </li>
    </div>
  );
};

export default ArticleCard;
