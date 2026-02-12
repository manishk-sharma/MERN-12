import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './componet/Navbar'
import Home from './componet/Home'
import Product from './componet/Product'
import Cart from './componet/Cart'
import Login from './componet/Login'
import Signup from './componet/Signup'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
    // Optional: Add a toast notification here
    alert(`${product.name} added to cart!`)
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col">
        <Navbar cartCount={cart.length} />
        <div className="container mx-auto p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <footer className="bg-white dark:bg-gray-800 text-center py-4 text-gray-600 dark:text-gray-400 mt-auto shadow-inner">
          <p>© {new Date().getFullYear()} ShopBrand. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
