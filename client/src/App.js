import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.js";
import DeliveryDetails from "./pages/DeliveryDetails";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderSummary from "./pages/OrderSummary";
import Main from "./pages/Main";
import { useState, useEffect } from "react";

function App() {
  const [ordernum, setOrderNum] = useState();
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(
      cart.reduce(
        (prevState, currentPrice) => prevState + currentPrice.price,
        0
      )
    );
  }, [cart]);

  const Total = () =>
    setPrice(
      cart.reduce(
        (prevState, currentPrice) => prevState + currentPrice.price,
        0
      )
    );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/dishes/")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  const addToCart = (dish) => {
    setCart((prevState) => {
      return [...prevState, dish];
    });
  };

  const deleteFromCart = (index) => {
    setCart((prevState) => {
      const prev = prevState.splice(index, 1);
      return prevState;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="main"
          element={<Main menu={menu} addToCart={addToCart} cart={cart} />}
        />
        <Route
          path="details"
          element={<DeliveryDetails cart={cart} setOrderNum={setOrderNum} />}
        />
        <Route
          path="confirmation"
          element={<OrderConfirmation ordernum={ordernum} />}
        />
        <Route
          path="summary"
          element={
            <OrderSummary
              cart={cart}
              deleteFromCart={deleteFromCart}
              TotalPrice={price}
              Total={Total}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
