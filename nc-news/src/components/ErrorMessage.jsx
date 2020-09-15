import React from "react";

const ErrorMessage = (props) => {
  const { status, errorMessage } = props;
  console.log("in ErrorMessage", status, errorMessage);
  return (
    <p>
      Sorry, something went wrong there. Error Code = {status} {errorMessage}:
    </p>
  );
};

export default ErrorMessage;
