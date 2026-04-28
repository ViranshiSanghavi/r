import React from "react";

function UserList(props) {
  return (
    <div>
      <h2>Employee List</h2>

      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            Name: {user.name} | Department: {user.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;