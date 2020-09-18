import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorMessage from "../components/ErrorMessage";

class Vote extends Component {
  state = {
    voteChange: 0,
    error: false,
    disable: false,
  };

  render() {
    const { voteChange, error, disable } = this.state;
    if (error) return <ErrorMessage errorMessage={error} />;

    return (
      <div id="voteSection">
        <section id="votes">
          {voteChange}
          <button onClick={() => this.handleVoteClick(1)} disabled={disable}>
            <span role="img" aria-label="thumbs up"></span>👍
          </button>
          <button onClick={() => this.handleVoteClick(-1)} disabled={disable}>
            <span role="img" aria-label="thumbs down"></span>
            👎
          </button>
          <span>{this.state.voteChange + this.props.votes} Votes</span>
          {/*increment vote
          total*/}
        </section>
      </div>
    );
  }
  handleVoteClick = (vote) => {
    this.setState({ disable: true });
    const { id } = this.props;
    const { path } = this.props;
    this.setState((currentState) => {
      return { voteChange: currentState.voteChange + vote };
    });

    api.patchVote(id, vote, path).catch(() => {
      this.setState((currentState) => {
        return { voteChange: currentState.voteChange - vote };
      });
    });
  };
}

export default Vote;
