import React from "react";
import "../../css/Cart/Cart.css";
const Cart = (props) => {
  return (
    <div className="cart-wrapper">
      <div className="cart-title"> empty cart </div>
      <div className="cart-items">
        {props.cartItems.map(item => (
            <div className="cart-item" key={item.id}>
            <img src={item.imgeUrl} alt="" />
            <div className="cart-info">
              <div>
                <p>{item.title}</p>
                <p>amount</p>
                <p>${item.price}</p>
              </div>
              <button>remove</button>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Cart;
