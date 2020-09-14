import React, { Component } from "react";
import * as api from "../utils/api";

class Vote extends Component {
  state = {
    votes: 0,
  };

  render() {
    const { votes } = this.state;
    // const { article_id } = this.props;
    return (
      <section>
        <br></br>
        <span id="votes">
          {votes}
          <button onClick={() => this.handleVoteClick(1)}>
            <span role="img" aria-label="thumbs up"></span>👍
          </button>
          <button onClick={() => this.handleVoteClick(-1)}>
            <span role="img" aria-label="thumbs down"></span>
            👎
          </button>
        </span>
        <p>{votes} Votes</p>
      </section>
    );
  }
  handleVoteClick = (vote) => {
    const { id } = this.props;
    const { path } = this.props;

    api.patchVote(id, vote, path).then(() => {
      this.setState((currentState) => {
        return { votes: currentState.votes + vote };
      });
    });
  };
}

export default Vote;
