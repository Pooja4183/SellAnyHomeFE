import React from 'react';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
 import Products from '../component/product/Products';
import NeighburHood from '../component/Neighburhood';
import Blog from '../component/Blog';
import Header from '../component/Header'



const Home = () => {
  return (
    <>
    <Header /> 
      <Banner />
      <NeighburHood/>
      <Products />
      <Blog/>
      <Footer />
    </>
  );
};

export default Home;
