import * as React from "react";
import logo from './logo.svg';

export interface Props {}

export interface State {}

export default class Header extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <img
          src={logo}
          alt="logo"
        />
        <h2>M&M WEATHER</h2>
      </React.Fragment>
    );
  }
}
