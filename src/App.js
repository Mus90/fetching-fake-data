import React, { Component } from "react";
import "./App.scss";
import Routes from "./Routes";

export default class App extends Component {
  //todo change it to functional component
  render() {
    // [1,2,3,4,5]   0 1 2 3 4 5 6 // [] >> empty
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}
