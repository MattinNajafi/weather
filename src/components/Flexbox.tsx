import * as React from "react";
import City from "./City";
import ImageAndTemperature from "./ImageAndTemperature";
import Description from "./Description";
import Week from "./Week";

export interface Props {
  nameOfCity: string;
  data: string;
  temperature: number;
  icon: string;
}

export interface State {}

export default class Flexbox extends React.Component<Props, State> {
  render() {
    return (
      <div className="flexbox">
        <City CityName={this.props.nameOfCity} />
        <ImageAndTemperature
          icon={this.props.icon}
          temperature={this.props.temperature}
        />
        <Description
          temperature={this.props.temperature}
          nameOfCity={this.props.nameOfCity}
        />
        <Week data={this.props.data} nameOfCity={this.props.nameOfCity} />
      </div>
    );
  }
}
