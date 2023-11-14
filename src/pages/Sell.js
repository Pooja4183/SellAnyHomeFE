import React from "react";
import Footer from "../component/Footer";
import SellComponent from "../component/sell/SellComponent";
import ExclusiveProducts from "../component/product/ExclusiveProducts";
import Blog from "../component/blog/Blog";
import Steps from "../component/Steps";

const Sell = () => {
  return (
    <>
      <SellComponent />
      <Steps />
      <ExclusiveProducts />
      <Blog />
      <Footer />
    </>
  );
};

export default Sell;
