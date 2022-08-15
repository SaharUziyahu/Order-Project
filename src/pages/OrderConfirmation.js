import React from "react";

function OrderConfirmation({ ordernum }) {
  console.log(ordernum);
  return (
    <>
      <h2
        style={{
          fontSize: "500%",
          fontFamily: "inherit",
          position: "absolute",
          top: "20%",
          right: "25%",
          color: "rosybrown",
        }}
      >
        {" "}
        Thank you for choosing{" "}
      </h2>{" "}
      <br></br>
      <h2
        style={{
          fontSize: "400%",
          fontFamily: "Courier New, Courier, monospace",
          position: "absolute",
          right: "41%",
          top: "34%",
          color: "rosybrown",
        }}
      >
        {" "}
        Pick & Eat{" "}
      </h2>
      <h3
        style={{
          fontSize: "240%",
          position: "absolute",
          right: "50%",
          top: "45%",
          color: "black",
        }}
      >
        Order ID :{ordernum}
      </h3>
    </>
  );
}

export default OrderConfirmation;
