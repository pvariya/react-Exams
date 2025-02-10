import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import useNavigate

const Home = () => {
  const [products, setProducts] = useState([]); 
  const [cart, setCart] = useState([]); // State to store cart items
  const navigate = useNavigate(); // 👈 Hook for navigation

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getApi();
  }, []);

  // 🛒 Add product to cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
    navigate("/cart"); // Redirect to cart page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Product List</h2>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition transform hover:scale-105"
          >
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">{product.title}</h3>
            <p className="text-gray-500 mt-2">Price: <span className="font-bold text-blue-600">${product.price}</span></p>
            <button 
              onClick={() => addToCart(product)} // 👈 Click to add to cart
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
