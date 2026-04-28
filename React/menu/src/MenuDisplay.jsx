import React from "react";

function MenuDisplay(props) {
  return (
    <div>
      <h2>Dessert Menu</h2>

      <ul>
        {props.menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MenuDisplay;