import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Please fill in all fields");
      return;
    }
    setProducts([...products, { name, price }]);
    setName("");
    setPrice("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label>
            Product Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter product name"
              style={{ margin: "10px 0", display: "block" }}
            />
          </label>
        </div>
        <div>
          <label>
            Product Price:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Enter product price"
              style={{ margin: "10px 0", display: "block" }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Add Product
        </button>
      </form>

      <h2>Product List</h2>
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index}>
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
        ))
      ) : (
        <p>No products added yet.</p>
      )}
    </div>
  );
};

export default AddProduct;
