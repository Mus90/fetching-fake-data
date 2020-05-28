import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import SingleUser from "./SingleUser";
import NotFound from "./NotFound";
import NavBar from "./NavBar";

const Routes = () => (
  <Router>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      {/*<Route strict path="/admin/" component={Admin} />*/}
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/user/:id" component={SingleUser}/>
      {/*<Route exact path="/admin/fish" component={Fish}/>*/}
      <Route component={NotFound}/>
    </Switch>
  </Router>
); //functional

export default Routes;
