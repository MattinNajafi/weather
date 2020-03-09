import * as React from "react";
import Degrees from "./Degrees";
import ImageOfWeather from "./ImageOfWeather";

export interface Props {
  temperature: number;
  // image: any;
}

export interface State {}

class ImageAndTemperature extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Degrees temperature={this.props.temperature} />
        <ImageOfWeather />
      </div>
    );
  }
}

export default ImageAndTemperature;
