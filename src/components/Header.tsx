import * as React from "react";

export interface Props {}

export interface State {}

export default class Header extends React.Component<Props, State> {
  render() {
    return (
      <div className="header-div">
        <img src={window.location.origin + "/images/umbrella-beach-light.svg"} alt="logo" />
        <h2>M&M WEATHER</h2>
      </div>
    );
  }
}
