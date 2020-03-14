import * as React from "react";
import Day from "./Day";

const API_ID: string = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface Props {
  nameOfCity: string;
  forecast: Array<object>;
}

export interface State {}

class Week extends React.Component<Props, State> {
  renderDays = () => {
    const d = new Date();

    let days: Array<string> = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let number = d.getDay() + 1;
    let sum = number + 5;
    let daysList: Array<JSX.Element> = [];
    for (let i = number, j = 0; i < sum; i++, j++) {
      daysList.push(
        <Day
          key={days[i % 7]}
          nameOfCity={this.props.nameOfCity}
          day={days[i % 7]}
          forecast={this.props.forecast[j]}
        />
      );
    }
    return daysList;
  };

  render() {
    if (this.props.nameOfCity === "") {
      return <React.Fragment></React.Fragment>;
    } else {
      return <div>{this.renderDays()}</div>;
    }
  }
}

export default Week;
