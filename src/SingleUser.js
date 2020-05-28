import React, {Component} from "react";
import './SingleUser.scss';
import axios from 'axios'

export default class SingleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      loading: false
    }
  }

  componentDidMount() {
    // console.log(this.props)
    // console.log(this.props.match.params.id)
    let userId = this.props.match.params.id;
    if (userId) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
          // console.log('res:', res.data);
          this.setState({userData: res.data, loading: true}, () => {
            console.log('this.state: ', this.state)
            // console.log(this.state.userData)
            // console.log(Object.keys(this.state.userData).length > 0);
          })
        }).catch((error) => {
        // console.log(error)
      })
    }
  }

  render() {
    const {userData} = this.state;
    return (
      <div className="SingleUser">
        <h1>User Details</h1>
        {/*{userData && Object.keys(userData).length > 0 && <ul>*/}
        {userData && this.state.loading && <ul>
          <li><span>Name: </span>{userData.name || ''}</li>
          <li><span>Email: </span>{userData.email || ''}</li>
        </ul>}
        {!this.state.loading && <p>..loading</p>}
      </div>
    );
  }
}
