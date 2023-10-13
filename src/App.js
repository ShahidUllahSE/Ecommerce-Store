import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header1 from './Components/Header1';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom';
import SingleProduct from './modules/SingleProduct'
import Products from './Components/Products';

import Cart from './modules/Cart';
import CetagoriesProducts from './modules/CetagoriesProducts';
import ProductCard from './modules/ProductCard';
import About from './Components/About';
import Contact from './Components/Contact';
import AddToCart from './modules/AddToCart';

function App() {
  return (
    <div>
      <Header1/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<SingleProduct/>} />
        <Route path="/products" element={<ProductCard/>} />
        <Route path="/cetagories/:name" element={<CetagoriesProducts/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/AddToCart" element={<AddToCart/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;