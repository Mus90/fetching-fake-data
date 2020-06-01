import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

export default class UserDetail extends Component {
  state = {
    //initial state
    persons: [],
    error: false,
    loading: true,
    //todo add loader or spinner
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("res:", res);
        this.setState({ persons: res.data, loading: false }, () => {
          console.log("state: ", this.state.persons);
        });
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    const persons = this.state.persons;
    // [1,2,3,4,5]   0 1 2 3 4 5 6 // [] >> empty
    return (
      <div className="App">
        <ul>
          {!this.state.error &&
            persons.map((person) => (
              <Route exact path="/:id" component={UserDetail} />
            ))}
        </ul>
        {this.state.error && <p>some error happened </p>}
      </div>
    );
  }
}
