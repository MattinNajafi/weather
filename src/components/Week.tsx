import * as React from "react";
import Day from "./Day";

const API_ID: string = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface Props {
  nameOfCity: string;
  data: any;
}

export interface State {
  weatherForecast: [];
}

class Week extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      weatherForecast: []
    };
  }

  componentDidMount() {
    const weatherForecast = this.props.data.list.filter(
      (element: any) =>
        Number(element.dt_txt.split(" ")[1].split(":")[0]) === 15
    );
    this.setState({ weatherForecast });
  }

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
    console.log(number);
    for (let i = number, j = 0; i < sum; i++, j++) {
      daysList.push(
        <Day
          key={days[i % 7]}
          nameOfCity={this.props.nameOfCity}
          day={days[i % 7]}
          data={this.state.weatherForecast[j]}
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
