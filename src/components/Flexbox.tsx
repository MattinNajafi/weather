import * as React from "react";
import City from "./City";
import ImageAndTemperature from "./ImageAndTemperature";
import Description from "./Description";
import Week from "./Week";

export interface Props {}

export interface State {}

export default class Flexbox extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <City />
        <ImageAndTemperature />
        <Description />
        <Week />
      </div>
    );
  }
}
