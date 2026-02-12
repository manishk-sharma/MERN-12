import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addcart } from '../redux/reducer/cartslice';

const Product = () => {
    const dispatch = useDispatch();
    const [products] = useState([
        { _id: 1, name: "Wireless Headphones", price: 199, category: "Electronics" },
        { _id: 2, name: "Smart Watch", price: 299, category: "Electronics" },
        { _id: 3, name: "Running Shoes", price: 89, category: "Footwear" },
        { _id: 4, name: "Leather Bag", price: 149, category: "Accessories" },
        { _id: 5, name: "Gaming Mouse", price: 59, category: "Electronics" },
        { _id: 6, name: "Sunglasses", price: 129, category: "Accessories" },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ['All', 'Electronics', 'Footwear', 'Accessories'];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header & Filter Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Products</h2>

                <div className="flex gap-4 w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="border rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div key={product._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                            {/* Placeholder for Product Image */}
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-1">{product.name}</h3>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{product.category}</span>
                                </div>
                                <span className="font-bold text-blue-600 dark:text-blue-400">${product.price}</span>
                            </div>
                            <button
                                onClick={() => {
                                    dispatch(addcart(product));
                                    alert(`${product.name} added to cart!`);
                                }}
                                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                    No products found matching your criteria.
                </div>
            )}
        </div>
    );
};

export default Product;
