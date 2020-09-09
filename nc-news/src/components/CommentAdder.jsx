import React, { Component } from "react";

class commentAdder extends Component {
  state = {
    comment: "",
  };

  componentDidMount() {}
  render() {
    return (
      <div>
        <form onSubmit={this.submitComment}>
          Add your comment:
          <br></br>
          <br></br>
          <input
            id="commentForm"
            value={this.state.comment}
            placeholder="Please enter your comment..."
            onChange={(event) => {
              this.updateComment(event.target.value);
            }}
          ></input>
        </form>
      </div>
    );
  }

  updateComment = (input) => {
    this.setState({ comment: input });
  };

  submitComment = (event) => {};
}
export default commentAdder;
