import React, {Component} from "react";
import axios from "axios";
import './App.scss';
import PersonView from "./PersonView";

export default class App extends Component {
  state = {//initial state
    persons: [],
    error: false
    //todo add loader or spinner
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log('res:', res);
        this.setState({persons: res.data}, () => {
          console.log('state: ', this.state.persons);
        });
      }).catch((error) => {
      this.setState({error: true});
    })
  }

  render() {
    const persons = this.state.persons;
    // [1,2,3,4,5]   0 1 2 3 4 5 6 // [] >> empty
    return (
      <div className="App">
        <ul>
          {
            !this.state.error && persons.map(person =>
              <PersonView key={person.id} personData={person}/>
            )
          }
        </ul>
        {this.state.error && <p>some error happened :( </p>}
      </div>
    );
  }
}
