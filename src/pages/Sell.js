import React from "react";
import Footer from "../component/Footer";
import SellComponent from "../component/sell/SellComponent";
import ExclusiveProducts from "../component/product/ExclusiveProducts";
import ListBlogs from "../component/blog/ListBlogs";
import Steps from "../component/Steps";

const Sell = () => {
  return (
    <>
      <SellComponent />
      <Steps />
      <ExclusiveProducts />
      <ListBlogs />
      <Footer />
    </>
  );
};

export default Sell;
