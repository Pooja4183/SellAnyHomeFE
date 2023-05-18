import React from "react";
import Footer from "../component/Footer";
import SellComponent from "../component/sell/SellComponent";
import ExclusiveProducts from "../component/product/ExclusiveProducts";
import Blog from "../component/Blog";
import Header from "../component/Header";
import Steps from "../component/Steps";

const Sell = () => {
  return (
    <>
      <Header />
      <SellComponent />
      <Steps />
      <ExclusiveProducts />
      <Blog />
      <Footer />
    </>
  );
};

export default Sell;
