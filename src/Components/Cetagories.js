import React, { useEffect, useState } from 'react'
import Features from './Features';

function Cetagories() {
    const [cetagory,setcetagory]=useState([]);
    useEffect(()=>{
      const fetchcetagory=async()=>{
  
       const response= await fetch('https://fakestoreapi.com/products/categories')
             const data= await response.json()
              console.log(data);
              setcetagory(data);
      }
      fetchcetagory(); 
    }
    ,[])
    if (cetagory.length===0){
        return <div>Loading....</div>
    }
  


  return (
    
        <Features cards={cetagory}/>
      
  )
}

export default Cetagories
