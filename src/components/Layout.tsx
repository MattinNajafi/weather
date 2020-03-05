import * as React from "react";
import Header from "./Header";
import Flexbox from "./Flexbox";
import Searchbar from "./Searchbar";

const API_KEY = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface LayoutProps {}

export interface LayoutState {
  nameOfCity: string;
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      nameOfCity: ""
    };
  }
  getWeather = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const API_CALL = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.nameOfCity}&appid=${API_KEY}`
    );
    const data = await API_CALL.json();
    console.log(data);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ nameOfCity: event.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <Searchbar
          nameOfCity={this.handleChange}
          getWeather={this.getWeather}
        />
        <Flexbox />
      </div>
    );
  }
}

export default Layout;
