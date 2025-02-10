import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from localStorage
    setCartItems(storedCart);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
          {cartItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center">{item.title}</h3>
              <p className="text-gray-500 mt-2">
                Price: <span className="font-bold text-green-600">${item.price}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
