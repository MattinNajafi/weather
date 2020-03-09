import * as React from "react";

const API_KEY = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface DescriptionProps {
  temperature: number;
}

export interface DescriptionState {}

class Description extends React.Component<DescriptionProps, DescriptionState> {
  render() {
    if (this.props.temperature <= 15 && this.props.temperature >= 8) {
      return "Cozy weather";
    } else if (this.props.temperature <= 25 && this.props.temperature > 15) {
      return "Lovely weather, enjoy the sun";
    } else if (this.props.temperature > 25) {
      return "Use sunscreen, otherwise u will be red";
    } else if (this.props.temperature < 8 && this.props.temperature >= 0) {
      return "Its weather for netflix n chill";
    } else if (this.props.temperature < 0 && this.props.temperature >= -10) {
      return "Too cold to be in this country";
    } else if (this.props.temperature < -10) {
      return "Antarctis?";
    }
    return <div>{this.props.temperature}</div>;
  }
}

export default Description;