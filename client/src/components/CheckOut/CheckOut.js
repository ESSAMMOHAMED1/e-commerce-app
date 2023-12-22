import React from "react";
import "../../css/CheckOut/CheckOut.css";
const CheckOut = (props) => {
  return (
<>
   {props.showForme &&
    <div className="checkoute-form">
      <span className="form-close-icon" onClick={ ()=> props.setshowForme(false)}>&times;</span>
      <form onSubmit={props.submitOrder}>
        <div>
          <label>Name</label>
          <input type="text" required name="name" onChange={props.handelChange}></input>
        </div>

        <div>
          <label>Email</label>
          <input type="email" required name="email" onChange={props.handelChange}></input>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  }
  </>
  );
};

export default CheckOut;
