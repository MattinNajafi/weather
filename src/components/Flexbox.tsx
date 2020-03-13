import * as React from "react";
import City from "./City";
import ImageAndTemperature from "./ImageAndTemperature";
import Description from "./Description";
import Week from "./Week";
import { RouteComponentProps } from "react-router-dom";

export interface State {}

export default class Flexbox extends React.Component<
  RouteComponentProps,
  State
> {
  render() {
    console.log(this.props.location.pathname.substring(1));
    return (
      <div className="flexbox">
        <h1></h1>
        {/* <City CityName={this.props.nameOfCity} />
        <ImageAndTemperature
          icon={this.props.icon}
          temperature={this.props.temperature}
        />
        <Description
          temperature={this.props.temperature}
          nameOfCity={this.props.nameOfCity}
        />
        <Week
          forecast={this.props.forecast}
          data={this.props.data}
          nameOfCity={this.props.nameOfCity}
        /> */}
      </div>
    );
  }
}
