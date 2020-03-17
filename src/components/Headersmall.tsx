import * as React from "react";

export interface Props {}

export interface State {}

export default class Header extends React.Component<Props, State> {
  render() {
    return (
      <div className="headersmall-div">
        <img src={window.location.origin + "/images/umbrella-beach-light.svg"} alt="logo" />
      </div>
    );
  }
}
