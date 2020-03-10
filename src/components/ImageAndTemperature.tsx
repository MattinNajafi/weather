import * as React from "react";
import Degrees from "./Degrees";
import ImageOfWeather from "./ImageOfWeather";

export interface Props {
  temperature: number;
  
}

export interface State {}

class ImageAndTemperature extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Degrees temperature={this.props.temperature} />
        <ImageOfWeather image={this.props.image}/>
      </div>
    );
  }
}

export default ImageAndTemperature;
