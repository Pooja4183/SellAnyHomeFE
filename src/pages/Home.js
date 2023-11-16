import React, { Suspense, useEffect } from "react";
import Footer from "../component/Footer";
import Banner from "../component/Banner";

import NeighburHood from "../component/Neighburhood";
import ListBlogs from "../component/blog/ListBlogs";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/productAction";
const ExclusiveProducts = React.lazy(() =>
  import("../component/product/ExclusiveProducts")
);

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Initializing Application...Loading Properties");
    dispatch(fetchProducts({}));
  }, [dispatch]);

  return (
    <>
      <Banner />
      <NeighburHood title="Neighborhood For You"/>
      <Suspense fallback={<div>Loading...</div>}>
        <ExclusiveProducts />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ListBlogs size="2"/>
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
