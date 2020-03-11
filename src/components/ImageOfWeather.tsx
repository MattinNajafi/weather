import * as React from "react";


export interface Props {
  icon: string; 
}

export interface State {
   
}


class ImageOfWeather extends React.Component<Props, State> {
  render() {
    return <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="icon"/> ;
  }
}

export default ImageOfWeather;
