import React from "react";
import "../../css/Filter/Filter.css";
import Flip from "react-reveal/Flip"
const Filter = (props) => {
  return (
    <>
    <Flip left>
      <div className="filter-wrapper">
        <h2 className="filter-title">Filter</h2>
        <div className="number-product"> number of product {props.productsNumber} </div>
        <div className="filter-size">
        <span> Filter </span>
          <select className="filter-select" value={props.size} onChange={props.handelFilterBySize}>
            <option value="ALL">ALL</option>
            <option value="S">S</option>
            <option value="M" >M</option>
            <option value="L">L</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>

          </select>
        </div>
        <div className="filter-size">
          <span> Order </span>
          <select className="filter-select" value = {props.sort} onChange={props.handelFilterBySort}>
            <option value="latest">latest</option>
            <option value="highest">highest</option>
            <option value="lowest" >lowest</option>
          </select>
        </div>
      </div>
      </Flip>
    </>
  );
};

export default Filter;
