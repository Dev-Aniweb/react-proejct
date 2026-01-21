import React from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";

const products = [
  { id: 1, name: "Apple", price: 1 },
  { id: 2, name: "Banana", price: 2 },
  { id: 3, name: "Orange", price: 3 },
   { id: 1, name: "Apple", price: 1 },
  { id: 2, name: "Banana", price: 2 },
  { id: 3, name: "Orange", price: 3 },
];

function App() {
  return (
    <div>
      <Navbar />
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <Cart />
    </div>
  );
}

export default App;
