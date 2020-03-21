import * as React from "react";
import logo from './logo.svg';

export interface Props {}

export interface State {}

export default class Header extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <div className="logo-div">
        <img
          src={logo}
          alt="logo"
        />
        <h2>M&M WEATHER</h2>
        </div>
      </React.Fragment>
    );
  }
}
