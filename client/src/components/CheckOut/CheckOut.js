import React from 'react'
import "../../css/CheckOut/CheckOut.css"
const CheckOut = () => {
  return (
        <div className="checkoute-form">
        <span className='form-close-icon'>&times;</span>
        
        <form>
        
        <div>    
        <label>Name</label>
        <input type="text" required name="name"></input>
        </div>

          <div>
            <label>Email</label>
            <input type="email" required name="email"></input>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>

          </form>

      </div>
  );
}

export default CheckOut