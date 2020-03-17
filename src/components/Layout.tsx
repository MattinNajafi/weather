import * as React from "react";
import Header from "./Header";
import Flexbox from "./Flexbox";
import Searchbar from "./Searchbar";
import ErrorMessage from "./ErrorMessage";

const API_KEY = "c4a99f7da984ba9ec8a4964085bcd87e";

export interface LayoutProps {}

export interface LayoutState {
  nameOfCity: string;
  dataName: string;
  temperature: any;
  icon: string;
  errormessage: boolean;
  ifClicked: boolean;
  weatherForecast: Array<object>;
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      nameOfCity: "",
      dataName: "",
      icon: "",
      ifClicked: false,
      errormessage: false,
      temperature: "",
      weatherForecast: []
    };
  }
  handleSubmit = async () => {
    // event?.preventDefault();
    // LOOP THROUGH CITY JSON FILE, IF THIS STATE NAMEOFCITY != ANY CITY ( RETURN: <ERRORMESSAGE/>)
    let API_CALL = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.nameOfCity}&appid=${API_KEY}`
    );
    let DATA = await API_CALL.json();
    const apicall = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.nameOfCity}&appid=${API_KEY}`
    );
    const data = await apicall.json();
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
            getWeather={this.handleSubmit}
            valueOfSearchbar={this.state.nameOfCity}
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
            getWeather={this.handleSubmit}
            valueOfSearchbar={this.state.nameOfCity}
          />
          <Flexbox
            icon={this.state.icon}
            temperature={this.state.temperature}
            forecast={this.state.weatherForecast}
            nameOfCity={this.state.dataName}
          />
        </div>
      );
    }
  }
}

export default Layout;
