import React from "react";
import Bounce from "react-reveal/Bounce";
import "../../css/Products/Products.css";
import { useState } from "react";
import ProductModal from "./ProductModal";
const Products = (props) => {
  const [product, setproduct] = useState("");
  const openModal = (product) => {
    setproduct(product);
  };

  const closeMoldal = () => {
    setproduct(false);
  };
  return (
    <>
    <Bounce left cascade>
      <div className="product-wrapper">
        
          {props.products.map((product) => (
            <div className="product-item" key={product.id}>
              <a href="#" onClick={() => openModal(product)}>
                <img src={product.imgeUrl} alt={product.description} />
              </a>
              <div className="product-desc">
                <p> {product.title}</p>
                <span>${product.price}</span>
              </div>
              <button onClick={() => props.addToCart(product)}>
                {" "}
                Add to cart{" "}
              </button>
            </div>
          ))}
      </div>
      <ProductModal product={product} closeMoldal={closeMoldal} />
      </Bounce>
    </>
  );
};

export default Products;
