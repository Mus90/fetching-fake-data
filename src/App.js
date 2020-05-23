import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello to my weather App</h1>
        <p>
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <ul>
          {this.state.persons.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
