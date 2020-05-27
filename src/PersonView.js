import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
//import UserDetail from "./UserDetail";
import "./PersonView.scss";

const PersonView = (props) => {
  const person = props.personData;

  return (
    <BrowserRouter>
      <div className="PersonView">
        <li>
          <span>name : {person.name || "N/A"}</span>
          <span>email : {person.email || "N/A"}</span>
          <span>phone : {person.phone || "N/A"}</span>
          <span>username : {person.username || "N/A"}</span>
          {person.address && (
            <div>
              <h3>Address</h3>
              <ul>
                <li>{person.address.city}</li>
                <h3>link to the single page details /user/{person.id}</h3>
                <Link
                  to={`/https://jsonplaceholder.typicode.com/users/${person.id}`}
                >
                  Press Here
                </Link>
              </ul>
            </div>
          )}
        </li>
      </div>
    </BrowserRouter>
  );
};

export default PersonView;
