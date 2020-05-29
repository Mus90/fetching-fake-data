import React from "react";
import {NavLink} from 'react-router-dom';
import './PersonView.scss';

const PersonView = (props) => {
  const person = props.personData;

  return (
    <div className="PersonView">
      <li>
        <span>name : {person.name || 'N/A'}</span>
        <span>email : {person.email || 'N/A'}</span>
        <span>phone : {person.phone || 'N/A'}</span>
        <span>username : {person.username || 'N/A'}</span>
        {person.address &&
        <div>
          <h3>Address</h3>
          <ul>
            <li>{person.address.city}</li>
            <h3>link to the single page details /user/{person.id}</h3>
            <h3>{person.id}</h3>
            <NavLink to={`user/${person.id}`}>View User Two</NavLink>
            <a href={`https://jsonplaceholder.typicode.com/users/${person.id}`}>View User JSON</a>
          </ul>
        </div>
        }
      </li>
    </div>
  );
};

export default PersonView;

