import React from "react";

const CartItem = ({ shoeName, description, price, size }) => (
  <div>
    <h3>{shoeName}</h3>
    <p>{description}</p>
    <p>{`Price: $${price}`}</p>
    <p>{`Size: ${size}`}</p>
  </div>
);

export default CartItem;
