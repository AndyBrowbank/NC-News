import React, { Component } from "react";
import * as api from "../utils/api";
import ErrorMessage from "../components/ErrorMessage";

class Vote extends Component {
  state = {
    votes: 0,
    error: false,
    disable: false,
  };

  render() {
    const { votes, error, disable } = this.state;
    if (error) return <ErrorMessage errorMessage={error} />;

    return (
      <section>
        <br></br>
        <span id="votes">
          {votes}
          <button onClick={() => this.handleVoteClick(1)} disabled={disable}>
            <span role="img" aria-label="thumbs up"></span>👍
          </button>
          <button onClick={() => this.handleVoteClick(-1)} disabled={disable}>
            <span role="img" aria-label="thumbs down"></span>
            👎
          </button>
        </span>
      </section>
    );
  }
  handleVoteClick = (vote) => {
    this.setState({ disable: true });
    const { id } = this.props;
    const { path } = this.props;

    api.patchVote(id, vote, path).then((votefromApi) => {
      console.log(votefromApi);
      this.setState((currentState) => {
        console.log(currentState);
        return { votes: currentState.votes + vote };
      });
    });
  };
}

export default Vote;
