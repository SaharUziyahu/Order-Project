import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function OrderSummary({ cart, deleteFromCart, TotalPrice, Total }) {
  const navigate = useNavigate();

  return (
    <>
      <a
        href="#"
        style={{ fontSize: "30px" }}
        onClick={() => navigate("/main")}
      >
        ⇦
      </a>
      <h1 style={{ fontFamily: "inherit" }}>Order Summary</h1>
      <div style={{ position: "absolute", top: "23%", left: "37%" }}>
        <h2 style={{ fontFamily: "Courier New, Courier, monospace" }}>
          Order Total : {TotalPrice}
        </h2>
        <br />
        <a
          href="#"
          class="btn btn-primary"
          onClick={() => navigate("/details")}
        >
          Continue
        </a>
      </div>
      <div class="row" style={{ position: "relative", top: "380px" }}>
        {cart.map((cartitem, index) => (
          <div class="col-2" style={{ padding: "10px", margin: "10px" }}>
            <div
              class="card"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              {" "}
              <div class="foodphoto">
                <img src={cartitem.imageUrl} />
              </div>
              <div class="card-body">
                <h5 class="card-title" key={cartitem.id}>
                  {" "}
                </h5>

                <p class="price" name="price">
                  {cartitem.price}$
                </p>
                <a
                  href="#"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteFromCart(index);
                    Total();
                  }}
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OrderSummary;
