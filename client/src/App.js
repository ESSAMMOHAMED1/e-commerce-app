import React from "react";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { words } from "./words";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
function App() {
  const [products, setproducts] = useState(data);
  const [sort, setsort] = useState("");
  const [size, setsize] = useState("");

  const handelFilterBySize = (e) => {
    const selectedSize = e.target.value;
    if (selectedSize === "ALL") {
      setproducts(data);
    }else{
      const filteredProducts = data.filter((product) =>
        product.sizes.includes(selectedSize)
      );
      setproducts(filteredProducts);
    }
    setsize(selectedSize);
  };

  const handelFilterBySort = (e) => {
    let order = e.target.value;
    let productClone = [...products];
    let newproduct = productClone.sort(function (a, b) {
      if (order === "lowest") {
        return a.price - b.price;
      } else if (order === "highest") {
        return b.price - a.price;
      }else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setproducts(newproduct);
  };
  return (
    <>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} />
            <Filter
              size={size}
              sort={sort}
              handelFilterBySize={handelFilterBySize}
              handelFilterBySort={handelFilterBySort}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
