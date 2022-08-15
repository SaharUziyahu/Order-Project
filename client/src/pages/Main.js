import React from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { useState, useEffect } from "react";

function Main({ menu, addToCart, cart }) {
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);

  const [filteredDishs, setFilteredDishs] = useState(menu);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/category/")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [filteredDishs]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/dishes/")
      .then((res) => res.json())
      .then((data) => setFilteredDishs(data));
  }, []);
  const filterDishByCategory = (category_id) => {
    fetch(`http://127.0.0.1:8000/dishes?category=${category_id}`)
      .then((res) => res.json())
      .then((data) => setFilteredDishs(data));
  };
  const filterDishBySearch = () => {
    fetch(`http://127.0.0.1:8000/dishes/?search=${search}`)
      .then((res) => res.json())
      .then((data) => setFilteredDishs(data));
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="#"
            onClick={() => setFilteredDishs(menu)}
          >
            All
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {category.map((onecategory) => {
                return (
                  <li class="nav-item" key={onecategory.id}>
                    <button
                      class="btn from-top"
                      onClick={() => filterDishByCategory(onecategory.id)}
                    >
                      {onecategory.name}
                    </button>
                  </li>
                );
              })}
            </ul>
            <input
              class="btn btn-primary"
              type="submit"
              value={"To Cart"}
              onClick={() => {
                navigate("/summary");
              }}
            />

            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}

            <form class="d-flex">
              <input
                class="form-control me-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />

              <a
                href="#"
                className="btn btn-primary"
                onClick={filterDishBySearch}
              >
                find
              </a>
            </form>
          </div>
        </div>
      </nav>
      <main className=" main">
        <div className="row">
          {filteredDishs.map((oneItem) => {
            return (
              <div className="col" key={oneItem.id}>
                <ItemCard
                  key={oneItem.id}
                  oneItem={oneItem}
                  addToCart={addToCart}
                  cart={cart}
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Main;
