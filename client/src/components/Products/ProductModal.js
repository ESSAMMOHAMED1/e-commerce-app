import React from "react";
import Modal from "react-modal";
const ProductModal = (props) => {
  const { product, closeMoldal } = props;
  return (
    <Modal className="Modal" isOpen={product} onRequestClose={closeMoldal}>
      <span className="close-icon" onClick={closeMoldal}>
        &times;
      </span>
      <div className="product-info">
        <img src={product.imgeUrl} alt={product.title}></img>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </Modal>
  );
};

export default ProductModal;
