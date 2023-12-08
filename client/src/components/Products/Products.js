import React from "react";
import "../../css/Products/Products.css"
const Products = (props) => {
  console.log(props.Products);
  return (
    <>
      <div className="product-wrapper">
        {props.products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.imgeUrl} alt={product.description} />
            <div className="product-desc">
              <p> {product.title}</p>
              <span> {product.price}</span>
            </div>
            <button> Add to cart </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
