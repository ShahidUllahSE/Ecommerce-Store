import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categories from '../../components/Categories';
import FeatureCard from '../../components/FeatureCard';
import Hero from '../../components/Hero';
import ProductCard from '../../components/ProductCard';
import Products from '../../components/ProductCard';
import Stats from '../../components/StatCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=12');
        const data = response.data;
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full mt-5">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
      </div>
      {loading ? (
        <div>Loading.....</div>
      ) : (
        <ProductCard products={products} />
      )}
      <Products />
      <Stats />
    </>
  );
};

export default Home;
