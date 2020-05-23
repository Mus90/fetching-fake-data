// import React, {Component} from "react";
import React from "react";
import './PersonView.scss';
//
// export default class PersonView extends Component {
//
//   render() {
//     const person = this.props.personData;
//     return (
//       <div className="PersonView">
//         <li>
//           <span>name : {person.name || 'N/A'}</span>
//           <span>email : {person.email || 'N/A'}</span>
//           <span>phone : {person.phone || 'N/A'}</span>
//           <span>username : {person.username || 'N/A'}</span>
//           {person.address &&
//           <div>
//             <h3>Address</h3>
//             <ul>
//               <li>{person.address.city}</li>
//               <li>{person.address.street}</li>
//               <li>{person.address.suite}</li>
//               <li>{person.address.zipcode}</li>
//             </ul>
//           </div>
//           }
//         </li>
//       </div>
//     );
//   }
// }
//

const PersonView = (props) => {
  const person = props.personData;

  return <div className="PersonView">
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
        </ul>
      </div>
      }
    </li>
  </div>;
};

export default PersonView;

