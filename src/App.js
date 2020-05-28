import React, {Component} from "react";
import './App.scss';
import Routes from "./Routes";

export default class App extends Component {
//todo change it to functional component
  render() {
    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}
