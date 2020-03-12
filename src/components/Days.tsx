import * as React from "react";
import Week from "./Week";
import { WeatherResponse } from "../apiTypings";
// const API_ID: string = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface DayProps {
  key: string;
  day: string;
  nameOfCity: string;
  data: any;
  // icon: any;
}

export interface DaysState {
  icon: string;
  temperature: number | null;
}

class Day extends React.Component<DayProps, DaysState> {
  constructor(props: DayProps) {
    super(props);
    this.state = {
      icon: "",
      temperature: null
    };
  }


  render() {
    if (this.props.day === "") {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <div className="weekly-schedule-div">
          <p>{this.props.day}</p>
          <div className="weekly-schedule-tempimg">
            <span>
              {this.props.data ? this.props.data.main.temp - 272 : null}
            </span>
            <img
              src={`http://openweathermap.org/img/w/${
                this.props.data ? this.props.data.weather[0].icon : null
              }.png`}
              alt=""
            />
          </div>
        </div>
      );
    }
  }
}

export default Day;
