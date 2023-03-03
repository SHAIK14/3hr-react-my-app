import { useState } from "react";
import ShoeForm from "./components/shoeform";
import Cart from "./components/Cart";
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <ShoeForm onAdd={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
