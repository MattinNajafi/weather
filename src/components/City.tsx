import * as React from "react";

export interface Props {
  CityName: string;
}

export interface State {}

export default class City extends React.Component<Props, State> {
  render() {
    return <div>{this.props.CityName}</div>;
  }
}
