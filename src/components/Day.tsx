import * as React from "react";

export interface DayProps {
  key: string;
  day: string;
  nameOfCity: string;
  forecast: any;
}

export interface DayState {}

class Day extends React.Component<DayProps, DayState> {
  renderTemperature = () => {
    if (this.props.forecast === undefined) {
      return null;
    } else {
      return Math.round(this.props.forecast.main.temp - 272);
    }
  };

  renderIcon = () => {
    if (this.props.forecast === undefined) {
      return null;
    } else {
      return this.props.forecast.weather[0].icon;
    }
  };

  render() {
    if (this.props.day === "") {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <div className="weekly-schedule-div">
          <p>{this.props.day}</p>
          <div className="weekly-schedule-tempimg">
            <span>{this.renderTemperature()}</span>
            <img
              src={`http://openweathermap.org/img/w/${this.renderIcon()}.png`}
              alt=""
            />
          </div>
        </div>
      );
    }
  }
}

export default Day;
