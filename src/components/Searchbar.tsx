import * as React from "react";

export interface Props {
  getWeather: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  nameOfCity: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface State {
  input: any;
}

export default class Searchbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      input: React.createRef()
    };
  }
  buttonClicked = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.props.getWeather(event);
  };
  render() {
    return (
      <div className="searchbar-div">
        <input
          className="searchbar"
          placeholder="Enter city here.."
          type="text"
          ref={this.state.input}
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
