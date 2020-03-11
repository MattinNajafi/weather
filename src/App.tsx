import * as React from "react";
import Layout from "./components/Layout";

import "./App.css";

require("dotenv").config();

export interface AppProps {}

export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return <Layout />;
  }
}
