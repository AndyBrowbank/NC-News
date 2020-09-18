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
    <div id="card">
      <ul>
        <li className="articleCardTitle">
          <h4 id="title">
            <u>{title}</u> written by&nbsp;&nbsp;
            <strong>
              <i>{author}</i>
            </strong>
          </h4>
          <p></p>date created &nbsp;&nbsp;
          <p id="date_created">
            {created_at.slice(0, 10).split("-").reverse().join("-")}
          </p>
          <p></p>
          Voting
          <Vote id={article_id} path={"articles"} votes={votes} />
          <Link
            href="#"
            data-content="Read More"
            to={`/articles/${article_id}`}
            id="rCorners2"
            className="readMoreButton"
            onClick={(event) => {}}
          >
            Read More
          </Link>
        </li>

        <li id="rcorners2" className="articleCard">
          TOPIC -- {topic}
          <p></p>
          Comment count: {comment_count}
          <span role="img" aria-label="speech bubble">
            💬
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ArticleCard;
