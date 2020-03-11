import * as React from "react";

export interface Props {
  CityName: string;
}

export interface State {
  isLoaded: boolean;
}

// let date = new Date();

export default class City extends React.Component<Props, State> {
  dateBuilder = () => {
    let d = new Date();
    let months: Array<string> = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days: Array<string> = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()].toString();
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  render() {
    if (this.props.CityName === "") {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <div className="header-flexbox">
          <h3>{this.props.CityName}</h3>
          <h5>{this.dateBuilder()} </h5>
        </div>
      );
    }
  }
}
