import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredAndSortedProducts, setSortOption } from '../redux/productSlice';
import { addcart } from '../redux/reducer/cartslice';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredAndSortedProducts);

  const handleSortChange = (e) => {
    dispatch(setSortOption(e.target.value));
  };

  return (
    <div className="flex flex-col items-center min-h-[80vh] py-10 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-fade-in">
          Welcome to ShopBrand
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          Discover the latest trends in tech, fashion, and lifestyle. Premium quality products delivered to your doorstep.
        </p>
        <div className="flex justify-center gap-4">
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
      </div>

      {/* Sorting Section */}
      <div className="w-full max-w-6xl px-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Featured Products</h2>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-300">Sort by:</span>
          <select
            onChange={handleSortChange}
            className="border rounded-lg px-3 py-1 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 overflow-hidden relative group">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              ) : (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              )}
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-1 line-clamp-1">{product.name}</h3>
                  <span className="font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap ml-2">${product.price}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded inline-block mb-3">{product.category}</span>
              </div>
              <button
                onClick={() => {
                  dispatch(addcart(product));
                  alert(`${product.name} added to cart!`);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {products.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No products found matching your criteria.
        </div>
      )}

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Fast Shipping</h3>
          <p className="text-gray-600 dark:text-gray-400">Get your products delivered within 24 hours.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
          <div className="text-4xl mb-4">💎</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Premium Quality</h3>
          <p className="text-gray-600 dark:text-gray-400">We source only the best materials for you.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Secure Payment</h3>
          <p className="text-gray-600 dark:text-gray-400">100% secure payment gateways.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;