import * as React from "react";
import Header from "./Header";
import Flexbox from "./Flexbox";
import Searchbar from "./Searchbar";

const API_KEY = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface LayoutProps {}

export interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  getWeather = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const city = "London";
    const API_CALL = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await API_CALL.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Header />
        <Searchbar nameOfCity={this.getWeather} />
        <Flexbox />
      </div>
    );
  }
}

export default Layout;
