import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import BuyProducts from '../component/buy/BuyProducts';
import { useLocation } from 'react-router-dom';

const Buy = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get('address');

  return (
    <>
    <Header /> 
      <BuyProducts title={paramValue}/>
      <Footer />
    </>
  );
};

export default Buy;
