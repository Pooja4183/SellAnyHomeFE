import React from 'react';
import Footer from '../component/Footer';
import Banner from '../component/Banner';
 import Products from '../component/Products';
import NeighburHood from '../component/Neighburhood'
import Exclusiv from '../component/Exclusiv'



const Home = () => {
  return (
    <>
   
      <Banner />
      <NeighburHood/>
      <Exclusiv/>

      <Products />
      <Footer />
    </>
  );
};

export default Home;
