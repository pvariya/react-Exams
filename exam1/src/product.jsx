import React, { useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  const productData = [
    {
      id: 1,
      name: "Apple",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    },
    {
      id: 2,
      name: "Banana",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
    },
  ];

  const handleLoadProducts = () => {
    setProducts(productData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>
      <button onClick={handleLoadProducts} style={{ marginBottom: "20px" }}>
        Load Products
      </button>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} style={{ marginBottom: "10px" }}>
            <p>{product.name}</p>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Product;
