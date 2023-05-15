import React from "react";
import Footer from "../component/Footer";
import SellComponent from "../component/sell/SellComponent";
import Products from "../component/product/Products";
import Blog from "../component/Blog";
import Header from "../component/Header";
import Steps from "../component/Steps";

const Sell = () => {
  return (
    <>
      <Header />
      <SellComponent />
      <Steps />
      <Products />
      <Blog />
      <Footer />
    </>
  );
};

export default Sell;
