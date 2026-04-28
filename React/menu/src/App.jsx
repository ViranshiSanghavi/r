import React from "react";
import MenuDisplay from "./MenuDisplay";

function App() {
  const desserts = ["Ice Cream", "Cake", "Brownie", "Pudding"];

  return (
    <div>
      <MenuDisplay menu={desserts} />
    </div>
  );
}

export default App;