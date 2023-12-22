import React from "react";
import "../../css/CheckOut/CheckOut.css";
import Input from "../Input/Input";
const CheckOut = (props) => {
  return (
    <>
      {props.showForme && (
        <div className="checkoute-form">
          <span
            className="form-close-icon"
            onClick={() => props.setshowForme(false)}
          >
            &times;
          </span>
          <form onSubmit={props.submitOrder}>
            <Input handleChange={props.handleChange} value={props.value} />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckOut;
