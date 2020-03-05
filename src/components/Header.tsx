import * as React from "react";

export interface Props {}

export interface State {}

export default class Header extends React.Component<Props, State> {
  render() {
    return (
      <div className="header-div">
        <img src={window.location.origin + "/images/sun-logo.png"} alt="SUN" />
        <h2>MM Weather</h2>
      </div>
    );
  }
}
