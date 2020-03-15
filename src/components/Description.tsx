import * as React from "react";

const API_KEY = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface DescriptionProps {
  nameOfCity: string;
  temperature: number | null;
}

export interface DescriptionState {}

class Description extends React.Component<DescriptionProps, DescriptionState> {
  tempDescription = () => {
    if (this.props.temperature === null) {
      return null;
    } else {
      if (this.props.temperature <= 15 && this.props.temperature >= 8) {
        return "Cozy weather";
      } else if (this.props.temperature <= 25 && this.props.temperature > 15) {
        return "Lovely weather, enjoy the sun";
      } else if (this.props.temperature > 25) {
        return "Put on your speedo, Jacuzi Bob!";
      } else if (this.props.temperature < 8 && this.props.temperature >= 0) {
        return "Its weather for Netflix n' Chill";
      } else if (this.props.temperature < 0 && this.props.temperature >= -10) {
        return "Too cold to be in this country";
      } else if (this.props.temperature < -10) {
        return "Antarctis?";
      }
    }
  };
  render() {
    if (this.props.temperature === undefined) return null;
    return <div>{this.tempDescription()}</div>;
  }
}

export default Description;
