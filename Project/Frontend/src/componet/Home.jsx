import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 py-10">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-fade-in">
          Welcome to ShopBrand
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          Discover the latest trends in tech, fashion, and lifestyle. Premium quality products delivered to your doorstep.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          to="/products"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
        >
          Shop Now
        </Link>
        <Link
          to="/signup"
          className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 font-bold rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
        >
          Sign Up
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-5xl">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Fast Shipping</h3>
          <p className="text-gray-600 dark:text-gray-400">Get your products delivered within 24 hours.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">💎</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Premium Quality</h3>
          <p className="text-gray-600 dark:text-gray-400">We source only the best materials for you.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Secure Payment</h3>
          <p className="text-gray-600 dark:text-gray-400">100% secure payment gateways.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;