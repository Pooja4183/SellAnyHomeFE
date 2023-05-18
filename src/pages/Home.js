import React from 'react';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
 import ExclusiveProducts from '../component/product/ExclusiveProducts';
import NeighburHood from '../component/Neighburhood';
import Blog from '../component/Blog';
import Header from '../component/Header'



const Home = () => {
  return (
    <>
    <Header /> 
      <Banner />
      <NeighburHood/>
      <ExclusiveProducts/>
      <Blog/>
      <Footer />
    </>
  );
};

export default Home;
