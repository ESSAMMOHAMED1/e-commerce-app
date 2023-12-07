import React from "react";

const Products = (props) => {
    console.log(props.Products)
  return (
    <>
    <div className="product-wrapper">
        {props.products.map((product) => (
          <div key={product.id}>
            <div className="product-item">
              <img src ={product.imgeUrl} alt={product.description} />
              <div className="product-desc">
                <p> {product.title}</p>
                <span> {product.price}</span>
              </div>
              <button> Add to cart </button>
            </div>
          </div>
        ))}
        </div>
    </>
  );
}

export default Products;
