import * as React from "react";
import City from "./City";
import ImageAndTemperature from "./ImageAndTemperature";
import Description from "./Description";
import Week from "./Week";

export interface Props {
  nameOfCity: string;
}

export interface State {}

export default class Flexbox extends React.Component<Props, State> {
  render() {
    return (
      <div className="flexbox">
        <City CityName={this.props.nameOfCity} />
        <ImageAndTemperature />
        <Description />
        <Week />
      </div>
    );
  }
}
