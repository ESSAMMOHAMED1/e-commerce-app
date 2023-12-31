import React from "react";
import { useState,useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { words } from "./words";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
function App() {
  const [products, setproducts] = useState(data);
  const [cartItems, setcartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [sort, setsort] = useState("");
  const [size, setsize] = useState("");
  const handelFilterBySize = (e) => {
    const selectedSize = e.target.value;
    if (selectedSize === "ALL") {
      setproducts(data);
    } else {
      const filteredProducts = data.filter((product) =>
        product.sizes.includes(selectedSize)
      );
      setproducts(filteredProducts);
    }
    setsize(selectedSize);
};
  const handelFilterBySort = (e) => {
    let order = e.target.value;
    
    setsort(order);
    let productClone = [...products];

    let newproduct = productClone.sort(function (a, b) {
      if (order === "lowest") {
        return a.price - b.price;
      } else if (order === "highest") {
        return b.price - a.price;
      } else if (order === "latest") {
        // Parse IDs as numbers for "latest" sorting
        return parseInt(b.id, 10) - parseInt(a.id, 10);
      } else {
        return 0; // Default case, no sorting
      }
    });

  

    setproducts(newproduct);
  };
  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    var isProductExist = false;
    cartItemsClone.forEach( p => {
      if(p.id === product.id) {
        p.qty++;
        isProductExist= true;
      }
    })
    if(!isProductExist) {
      cartItemsClone.push({...product, qty: 1})
    }
    setcartItems(cartItemsClone); 
  }
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setcartItems(cartItemsClone.filter(p => p.id !== product.id))
  }



  return (
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products}
            addToCart={addToCart}
            />
            <Filter
              size={size}
              sort={sort}
              productsNumber = {products.length}
              handelFilterBySize={handelFilterBySize}
              handelFilterBySort={handelFilterBySort}
            />
          </div>
         <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </main>
        <Footer />
      </div>
  );
}

export default App;
