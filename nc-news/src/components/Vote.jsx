import React, { Component } from "react";
import * as api from "../utils/api";

class Vote extends Component {
  state = {
    votes: 0,
  };

  render() {
    const { votes } = this.state;
    const { article_id } = this.props;
    return (
      <section>
        <br></br>
        <span id="votes">
          {votes}
          <button onClick={() => this.handleVoteClick(1, article_id)}>
            <span role="img" aria-label="thumbs up"></span>👍
          </button>
          <button onClick={() => this.handleVoteClick(-1, article_id)}>
            <span role="img" aria-label="thumbs down"></span>
            👎
          </button>
        </span>
        <p>{votes} Votes</p>
      </section>
    );
  }
  handleVoteClick = (vote, article_id) => {
    console.log(vote);
    api.articleVote(article_id, vote);
    this.setState((currentState) => {
      return { votes: currentState.votes + vote };
    });
  };
}

export default Vote;
