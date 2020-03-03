import * as React from "react";
import Header from "./Header";
import Flexbox from "./Flexbox";
import Searchbar from "./Searchbar";

export interface LayoutProps {}

export interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  render() {
    return (
      <div>
        <Header />
        <Searchbar />
        <Flexbox />
      </div>
    );
  }
}

export default Layout;
