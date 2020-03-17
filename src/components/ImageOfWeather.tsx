import * as React from "react";

export interface Props {
  icon: string;
}

export interface State {
  src: string;
}

class ImageOfWeather extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      src: require(`../../public/images/${this.props.icon}.png`)
    };
  }
  render() {
    return (
      <img
        className="Icon-flexbox"
        src={this.state.src}
        alt="icon"
        height="6rem"
      />
    );
  }
}

export default ImageOfWeather;
