import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";

function DeliveryDetails({ cart, setOrderNum }) {
  const [cartIds, setcartIds] = useState([]);
  const [deliveryDetails, SetdeliveryDetails] = useState({
    dishes: cartIds,
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    cart.map((item) => cartIds.push(item.id));
  }, [cart]);

  const handleForm = (e) => {
    SetdeliveryDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const CreateOrder = () => {
    fetch("http://127.0.0.1:8000/orders/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deliveryDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderNum(data.id);
        navigate("/confirmation");
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      <a
        href="#"
        style={{ fontSize: "30px" }}
        onClick={() => navigate("/summary")}
      >
        ⇦
      </a>
      <h1 style={{ fontFamily: "inherit" }}>Delivery Details</h1>
      <div
        style={{ width: "50%", position: "absolute", top: "27%", left: "30%" }}
      >
        <form>
          <div class="mb-3">
            <label class="form-label">First Name </label>
            <input
              type="text"
              class="form-control"
              name="first_name"
              onChange={handleForm}
            />
            <label class="form-label">Last name</label>
            <input
              type="text"
              class="form-control"
              name="last_name"
              onChange={handleForm}
            />
            <label class="form-label">Address </label>
            <input
              type="text"
              class="form-control"
              name="address"
              onChange={handleForm}
            />
            <label class="form-label">Phone Number </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-4567890"
              pattern="[0-9]{3}-[0-9]{7}"
              required
              class="form-control"
              onChange={handleForm}
            />
          </div>
        </form>
        <a href="#" onClick={CreateOrder} class="btn btn-primary">
          Order
        </a>
      </div>
    </div>
  );
}

export default DeliveryDetails;
