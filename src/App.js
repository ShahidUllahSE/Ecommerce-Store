import "./App.css";
import React from "react";
import Header1 from "./Components/Header1";
import Home from "./modules/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./modules/SingleProduct";
import ProductCard from "./modules/ProductCard";
// import CetagoriesProducts from './modules/CetagoriesProducts';

function App() {
  return (
    <div>
      <Header1 />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/products" element={<ProductCard />} />
          {/* <Route path="/Cetagories/:name"  element={<CetagoriesProducts/>} /> */}
        {/* </Routes> */}
      {/* </Router> */} 



      <Home />
      <SingleProduct />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
