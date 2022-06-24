import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Product, Login, Signup } from "./pages";
import CartContext from "./context/cart";
import "./App.css";

function App() {
  const [cart, setCart] = React.useState([]);
  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
