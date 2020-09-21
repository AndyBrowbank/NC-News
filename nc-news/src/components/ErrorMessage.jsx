import React from "react";

const ErrorMessage = (props) => {
  const { status, errorMessage } = props;
  if (!errorMessage) {
    return <h4>bad URL, please try again</h4>;
  }

  return (
    <h4>
      Sorry, something went wrong there. Error Code = {status} {errorMessage}:
    </h4>
  );
};

export default ErrorMessage;
