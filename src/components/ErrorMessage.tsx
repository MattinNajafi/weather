import * as React from "react";
export interface ErrorMessageProps {}

export interface ErrorMessageState {}

class ErrorMessage extends React.Component<
  ErrorMessageProps,
  ErrorMessageState
> {
  render() {
    return (
      <div>
        <h5>Enter a valid city or country</h5>
      </div>
    );
  }
}

export default ErrorMessage;
