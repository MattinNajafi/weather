import * as React from "react";

const API_KEY = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface DescriptionProps {
  nameOfCity: string;
  temperature: number | null;
}

export interface DescriptionState {
  coldest: string;
  colder: string;
  cold: string;
  hot: string;
  hotter: string;
  hottest: string;
}

class Description extends React.Component<DescriptionProps, DescriptionState> {
  constructor(props: DescriptionProps) {
    super(props);
    this.state = {
      coldest: "Antarctis?",
      colder: "Too cold to be in this country",
      cold: "Its weather for Netflix n" + " Chill",
      hot: "Cozy weather",
      hotter: "Lovely weather, enjoy the sun",
      hottest: "Put on your speedo, Jacuzi Bob!"
    };
  }
  tempDescription = () => {
    if (this.props.temperature === null) {
      return null;
    } else {
      if (this.props.temperature <= 15 && this.props.temperature >= 8) {
        return this.state.hot;
      } else if (this.props.temperature <= 25 && this.props.temperature > 15) {
        return this.state.hotter;
      } else if (this.props.temperature > 25) {
        return this.state.hottest;
      } else if (this.props.temperature < 8 && this.props.temperature >= 0) {
        return this.state.cold;
      } else if (this.props.temperature < 0 && this.props.temperature >= -10) {
        return this.state.colder;
      } else if (this.props.temperature < -10) {
        return this.state.coldest;
      }
    }
  };
  render() {
    if (this.props.temperature === undefined) return null;
    return <div className="description">"{this.tempDescription()}"</div>;
  }
}

export default Description;
