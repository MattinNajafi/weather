import * as React from "react";
import Header from "./Header";
import Flexbox from "./Flexbox";
import Searchbar from "./Searchbar";

const API_KEY = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface LayoutProps {}

export interface LayoutState {
  nameOfCity: string;
  dataName: string;
  temperature: any;
  icon: string;
  api: string;
  ifClicked: boolean;
  weatherForecast: [];
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      nameOfCity: "",
      dataName: "",
      icon: "",
      api: "",
      ifClicked: false,
      temperature: "",
      weatherForecast: []
    };
  }
  getWeather = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let API_CALL = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.nameOfCity}&appid=${API_KEY}`
    );
    let DATA = await API_CALL.json();
    const apicall = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.nameOfCity}&appid=${API_KEY}`
    );
    const data = await apicall.json();
    this.setState({ api: data });

    // abort if no data
    if (!data.list) return;

    const weatherForecast = data.list.filter(
      (element: any) =>
        Number(element.dt_txt.split(" ")[1].split(":")[0]) === 15
    );
    this.setState({ weatherForecast });
    this.setState({ dataName: DATA.name + ", " + DATA.sys.country });
    this.setState({ icon: DATA.weather[0].icon });
    this.setState({ temperature: DATA.main.temp - 272 });
    this.setState({ ifClicked: true });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ nameOfCity: event.target.value });
  };

  render() {
    if (this.state.ifClicked === false) {
      return (
        <div className="Layout">
          <Header />
          <Searchbar
            nameOfCity={this.handleChange}
            getWeather={this.getWeather}
          />
        </div>
      );
    }
    if (this.state.ifClicked === true) {
      return (
        <div className="Layout">
          <Header />
          <Searchbar
            nameOfCity={this.handleChange}
            getWeather={this.getWeather}
          />
          <Flexbox
            icon={this.state.icon}
            temperature={this.state.temperature}
            data={this.state.api}
            nameOfCity={this.state.dataName}
            forecast={this.state.weatherForecast}
          />
        </div>
      );
    }
  }
}

export default Layout;
