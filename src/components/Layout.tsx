import * as React from "react";
import Header from "./Header";
import Flexbox from "./Flexbox";
import Searchbar from "./Searchbar";

const API_KEY = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface LayoutProps {}

export interface LayoutState {
  nameOfCity: string;
  dataName: string;
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      nameOfCity: "",
      dataName: ""
    };
  }
  getWeather = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let API_CALL = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.nameOfCity}&appid=${API_KEY}`
    );
    let data = await API_CALL.json();
    console.log(data);
    this.setState({ dataName: data.name + ", " + data.sys.country });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ nameOfCity: event.target.value });
  };

  render() {
    return (
      <div className="Layout">
        <Header />
        <Searchbar
          nameOfCity={this.handleChange}
          getWeather={this.getWeather}
        />
        <Flexbox nameOfCity={this.state.dataName} />
      </div>
    );
  }
}

export default Layout;
