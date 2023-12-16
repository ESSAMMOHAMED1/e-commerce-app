import React from 'react'
import "../../css/Cart/Cart.css"
function Cart(props) {
    return (
        <div className="cart-wrapper">
            <div className="cart-title"> {props.cartItems.length === 0 ? 'Cart Empty' : <p>
                There is {props.cartItems.length} products in cart
                </p>} </div>
            <div className="cart-items">
                {props.cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.imgeUrl} alt=""/>
                        <div className="cart-info">
                            <div>
                                <p> title {item.title} </p>
                                <p> qty: {item.qty}  </p>
                                <p> price: ${item.price} </p>
                            </div>
                            <button onClick={() => props.removeFromCart(item)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

            </div>
         {
          props.cartItems.length !== 0 &&
          <div className='cart-footer'>
          <div className='total-price'>
          total price : ${
            props.cartItems.reduce((acc,p)=>{
               return acc + p.price;
            },0)
          }
           </div>
            <button>
              select products
            </button>
          </div>
         }   
        </div>


    )
}

export default Cart