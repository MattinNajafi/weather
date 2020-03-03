import * as React from "react";
import Degrees from "./Degrees";
import ImageOfWeather from "./ImageOfWeather";

export interface Props {}

export interface State {}

class ImageAndTemperature extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Degrees />
        <ImageOfWeather />
      </div>
    );
  }
}

export default ImageAndTemperature;
