import * as React from "react";

export interface Props {
  getWeather: (event: any) => void;
  nameOfCity: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueOfSearchbar: string;
}

export interface State {}

export default class Searchbar extends React.Component<Props, State> {
  enter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) this.props.getWeather(event);
  };

  render() {
    return (
      <div className="searchbar-div">
        <input
          className="searchbar"
          placeholder="Enter city here.."
          type="text"
          value={this.props.valueOfSearchbar}
          onChange={this.props.nameOfCity}
          onKeyDown={this.enter}
        />
        <i
          id="searchicon"
          className="fas fa-search"
          onClick={this.props.getWeather}
        />
      </div>
    );
  }
}
