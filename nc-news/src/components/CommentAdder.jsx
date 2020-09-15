import React, { Component } from "react";

class CommentAdder extends Component {
  state = {
    comment: "",
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitComment}>
          Add your comment:
          <br></br>
          <br></br>
          <label htmlFor="commentForm">
            <input
              id="commentForm"
              required
              minLength="1"
              default=""
              value={this.state.comment}
              placeholder="Please enter your comment..."
              onChange={(event) => {
                const input = event.target.value;
                this.updateComment(input);
              }}
            ></input>
          </label>
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    );
  }

  updateComment = (input) => {
    this.setState({ comment: input });
  };

  submitComment = (event) => {
    event.preventDefault();
    this.props.addComment(this.state.comment);

    this.setState({ comment: "" }); //reset comment field after submitting
  };
}
export default CommentAdder;
