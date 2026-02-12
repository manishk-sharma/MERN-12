import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removecart, clearcart } from '../redux/reducer/cartslice';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removecart(id));
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <svg className="w-24 h-24 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Looks like you haven't added any items yet.</p>
                <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                    Browse Products
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex justify-between items-center">
                <span>Shopping Cart ({cart.length} items)</span>
                <button
                    onClick={() => dispatch(clearcart())}
                    className="text-sm text-red-500 hover:text-red-700 hover:underline"
                >
                    Clear Cart
                </button>
            </h2>
            <div className="space-y-4">
                {cart.map((item) => (
                    <div key={item._id} className="flex items-center justify-between border-b dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-500">
                                {/* Placeholder for image */}
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400">${item.price}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleRemove(item._id)}
                            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 dark:hover:bg-gray-700 transition-colors"
                            title="Remove from cart"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-8 pt-4 border-t dark:border-gray-700 flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                    Total: ${total.toFixed(2)}
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
