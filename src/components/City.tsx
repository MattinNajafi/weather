import * as React from "react";

export interface Props {
  CityName: string;
}

export interface State {
  weekday: string;
  time: number;
}

let date = new Date();

export default class City extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      weekday: "",
      time: 0
    };
  }

  render() {
    return (
      <div className="header-flexbox">
        <h3>{this.props.CityName}</h3>
      </div>
    );
  }
}
