import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Product } from "./pages";
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
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
