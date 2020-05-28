import React from "react";
import {NavLink} from 'react-router-dom';
import './NavBar.scss';
const NavBar = () => (
  <header className="NavBar">
    <ul>
      <li>
        <NavLink activeClassName="active" exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/admin">Admin</NavLink>
      </li>
    </ul>
  </header>
);
export default NavBar
