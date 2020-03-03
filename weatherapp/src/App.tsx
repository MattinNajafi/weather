import * as React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

import "./App.css";

export interface AppProps {}

export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return <Layout />;
  }
}
