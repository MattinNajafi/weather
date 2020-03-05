import * as React from "react";

export interface Props {
  nameOfCity: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface State {
  city: string;
}

export default class Searchbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      city: ""
    };
  }

  handleChangeOnSearchbar = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ city: event.target.value });
    console.log(this.state.city);
  };

  render() {
    return (
      <div className="searchbar-div">
        <input
          className="searchbar"
          placeholder="Enter city here.."
          type="text"
          defaultValue={this.state.city}
          onChange={this.handleChangeOnSearchbar}
        />
        <i
          id="searchicon"
          className="fas fa-search"
          onClick={this.props.nameOfCity}
        />
      </div>
    );
  }
}
