import React from "react";
import "../../css/Products/Products.css";
import Modal from "react-modal";
import { useState } from "react";
const Products = (props) => {
  const [product, setproduct] = useState("");
  const openModal = (product) => {
    setproduct(product);
  };

  const closeMoldal =() => {
    setproduct(false)
  }
  return (
    <>
      <div className="product-wrapper">
        {props.products.map((product) => (
          <div className="product-item" key={product.id}>
            <a href="#" onClick={() => openModal(product)}>
              <img src={product.imgeUrl} alt={product.description} />
            </a>
            <div className="product-desc">
              <p> {product.title}</p>
              <span> {product.price}</span>
            </div>
            <button> Add to cart </button>
          </div>
        ))}
      </div>
      <Modal className="Modal" isOpen={product} onRequestClose={closeMoldal}>
        <span className="close-icon" onClick={closeMoldal}> &times; </span>
        <div className="product-info">
         <img src={product.imgeUrl} alt={product.title}></img>
         <p>{product.title}</p>
         <p>{product.description}</p>
        </div>
      </Modal>
    </>
  );
};

export default Products;
