import React from 'react';
import Footer from '../component/Footer';
import SellComp from '../component/SellComp';
 import Products from '../component/Products';
import Blog from '../component/Blog';
import Header from '../component/Header'
import Steps from '../component/Steps'



const Sell = () => {
  return (
    <>
    <Header /> 
      <SellComp />
      <Steps/>
      <Products />
      <Blog/>
      <Footer />
    </>
  );
};

export default Sell;
