import * as React from "react";

export interface DayProps {
  key: string;
  day: string;
  nameOfCity: string;
  data: any;
}

export interface DayState {
  icon: string;
  temperature: number | null;
}

class Day extends React.Component<DayProps, DayState> {
  constructor(props: DayProps) {
    super(props);
    this.state = {
      icon: "",
      temperature: null
    };
  }

  renderTemperature = () => {
    if (this.props.data === undefined) {
      return null;
    } else {
      return Math.round(this.props.data.main.temp - 272);
    }
  };

  renderIcon = () => {
    if (this.props.data === undefined) {
      return null;
    } else {
      return this.props.data.weather[0].icon;
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
