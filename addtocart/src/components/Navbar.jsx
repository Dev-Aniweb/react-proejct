import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#eee" }}>
      <h1>My Store</h1>
      <div>
        <span>🛒 Cart Items: {cart.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
