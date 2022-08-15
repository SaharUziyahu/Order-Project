import React, { useEffect, useState } from "react";

function Item({ oneItem, addToCart, cart }) {
  return (
    <div>
      <div style={{ padding: "40px", margin: "10px" }}>
        <div
          class="card"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <button
            class="btn btn-primary"
            style={{ position: "absolute", top: "510px" }}
            onClick={() => {
              addToCart(oneItem);
            }}
          >
            {" "}
            Add to Cart
          </button>

          <div class="foodphoto">
            <img src={oneItem.imageUrl} />
          </div>
          <div class="card-body">
            <h5 class="card-title">{oneItem.name}</h5>
            <p class="card-text">{oneItem.description}</p>
            {oneItem.isGlutenFree ? <span> gluten free</span> : <></>}
            {oneItem.isVegeterian ? <span> Ⓥ</span> : <></>}
            <p class="price" name="orderprice">
              ${oneItem.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
