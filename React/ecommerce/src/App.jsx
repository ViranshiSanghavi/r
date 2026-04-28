import React, { useState } from "react";

function App() {
  // sample product
  const product = {
    name: "Mobile Phone",
    price: 500
  };

  const [qty, setQty] = useState(1);

  // increase quantity
  const increase = () => {
    setQty(qty + 1);
  };

  // decrease quantity (minimum 1)
  const decrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  // total price
  const total = qty * product.price;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      <h3>Product: {product.name}</h3>
      <p>Price: ₹{product.price}</p>

      <button onClick={decrease}>-</button>
      <span style={{ margin: "0 10px" }}>{qty}</span>
      <button onClick={increase}>+</button>

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default App;