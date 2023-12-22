import React from "react";
import "../../css/Cart/Cart.css";
import { useState } from "react";
import CheckOut from "../CheckOut/CheckOut";
function Cart(props) {
  const [showForme, setshowForme] = useState(false);
  const [value, setvalue] = useState({
    name: "",
    email: "",
  });

  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };

  const handleChange = (e) => {
    setvalue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {" "}
        {props.cartItems.length === 0 ? (
          "Cart Empty"
        ) : (
          <p>There is {props.cartItems.length} products in cart</p>
        )}{" "}
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imgeUrl} alt="" />
            <div className="cart-info">
              <div>
                <p> title {item.title} </p>
                <p> qty: {item.qty} </p>
                <p> price: ${item.price} </p>
              </div>
              <button onClick={() => props.removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total-price">
            total price : $
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
          </div>
          <button onClick={() => setshowForme(true)}>select products</button>
        </div>
      )}
      <CheckOut
        value= {value}
        showForme={showForme}
        setshowForme={setshowForme}
        handleChange={handleChange}
        submitOrder={submitOrder}
      />
    </div>
  );
}

export default Cart;