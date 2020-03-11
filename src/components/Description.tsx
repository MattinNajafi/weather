import * as React from "react";

const API_KEY = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface DescriptionProps {
  nameOfCity: string;
}

export interface DescriptionState {
  temperature: any;
}

class Description extends React.Component<DescriptionProps, DescriptionState> {
  constructor(props: DescriptionProps) {
    super(props);
    this.state = {
      temperature: ""
    };
  }
  temperature = async () => {
    let API_CALL = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.props.nameOfCity}&appid=${API_KEY}`
    );
    let DATA = await API_CALL.json();
    this.setState({ temperature: Math.round(DATA.main.temp - 272) });
  };

  render() {
    if (this.state.temperature <= 15 && this.state.temperature >= 8) {
      return "Cozy weather";
    } else if (this.state.temperature <= 25 && this.state.temperature > 15) {
      return "Lovely weather, enjoy the sun";
    } else if (this.state.temperature > 25) {
      return "Use sunscreen, otherwise u will be red";
    } else if (this.state.temperature < 8 && this.state.temperature >= 0) {
      return "Its weather for Netflix n' Chill";
    } else if (this.state.temperature < 0 && this.state.temperature >= -10) {
      return "Too cold to be in this country";
    } else if (this.state.temperature < -10) {
      return "Antarctis?";
    }
    return <div>{this.temperature}</div>;
  }
}

export default Description;
