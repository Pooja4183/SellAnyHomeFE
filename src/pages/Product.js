import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import ProductDetail from '../component/product/ProductDetail';

const Product = () => {
  return (
    <>
      <Header showSearch={true}/>
      <ProductDetail />
      <Footer />
    </>
  );
};

export default Product;
