import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  const itemCount = cartItems.length;
  return (
    <div>
      <button>{`Cart (${itemCount})`}</button>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <CartItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
