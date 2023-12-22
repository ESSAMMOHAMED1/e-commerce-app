import React from "react";

const Input = ({ handleChange, value }) => {
  return (
    <>
      <div>
        <label>Name</label>
        <input
          type="text"
          required
          name="name"
          onChange={handleChange}
          value={value.name}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={value.email}
        />
      </div>
    </>
  );
};

export default Input;
