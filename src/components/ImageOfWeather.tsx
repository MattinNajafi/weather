import * as React from "react";

export interface Props {
 
}

export interface State {
  icon: string;
}


class ImageOfWeather extends React.Component<Props, State> {
  render() {
    return <div>{this.state.icon}</div> ;
  }
}

export default ImageOfWeather;
