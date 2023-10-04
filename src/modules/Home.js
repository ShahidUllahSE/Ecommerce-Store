import React, { useEffect,useState } from 'react'
import Hero from '../Components/Hero'
import Products from '../Components/Products'
import Statis from '../Components/Statis'
import Cetagories from '../Components/Cetagories'

function Home() {

  const [products,setProducts]=useState([]);
  useEffect(()=>{
    const fetchProducts=async()=>{

     const response= await fetch('https://fakestoreapi.com/products?limit=12')
           const data= await response.json()
            console.log(data);
            setProducts(data);
    }
    fetchProducts(); 
  }
  ,[])

  return (
    <div>
   <Hero/>
   <Cetagories/>
      <h2 className="text-xs text-green-500 tracking-widest font-medium title-font">Products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Products</h1>
      {
        products.length > 0 ?
        <Products products={products}/>
        :
        <div>
          loading....
          </div>
      }
    
   <Products/>

   <Statis/>

    </div>
  )
}

export default Home
