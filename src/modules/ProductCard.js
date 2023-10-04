import React from 'react'
import { useState,useEffect } from 'react';
import Products from '../Components/Products'
import Cetagories from '../Components/Cetagories';
function ProductCard() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    const fetchProducts=async()=>{

     const response= await fetch('https://fakestoreapi.com/products')
           const data= await response.json()
            console.log(data);
            setProducts(data);
    }
    fetchProducts(); 
  }
  ,[])
  return (

    
    <div>
      <Cetagories/> 
      <h2 className="text-xs text-green-500 tracking-widest font-medium title-font">Products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
   {   products.length>0?
      <Products products={products}/>
      :
      <div>loading.....</div>
   }
    </div>
  )
}

export default ProductCard
