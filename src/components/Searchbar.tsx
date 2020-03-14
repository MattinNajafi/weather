import * as React from "react";

export interface Props {
  getWeather: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  nameOfCity: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueOfSearchbar: string;
}

export interface State {}

export default class Searchbar extends React.Component<Props, State> {
  render() {
    return (
      <div className="searchbar-div">
        <input
          className="searchbar"
          placeholder="Enter city here.."
          type="text"
          value={this.props.valueOfSearchbar}
          onChange={this.props.nameOfCity}
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
