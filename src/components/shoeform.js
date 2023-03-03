import React, { useState } from "react";

const ShoeForm = ({ onAdd }) => {
  const [shoeName, setShoeName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("M");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ shoeName, description, price, size });
    setShoeName("");
    setDescription("");
    setPrice("");
    setSize("M");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Shoe Name:
          <input
            type="text"
            value={shoeName}
            onChange={(event) => setShoeName(event.target.value)}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>

        <label>
          Size:
          <select
            value={size}
            onChange={(event) => setSize(event.target.value)}
          >
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
          </select>
        </label>

        <button type="submit">Add to Cart</button>
      </div>
    </form>
  );
};

export default ShoeForm;
