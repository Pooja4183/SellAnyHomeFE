import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import ProductDetail from '../component/product/ProductDetail';
import ExclusiveProducts from '../component/product/ExclusiveProducts'

const Product = () => {
  return (
    <>
      <Header showSearch={true}/>
      <ProductDetail />
      <ExclusiveProducts title={"Similar Properties"}/>
      <Footer />
    </>
  );
};

export default Product;
