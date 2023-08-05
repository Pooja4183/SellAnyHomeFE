import React, { Suspense } from "react";
import Footer from "../component/Footer";
import Banner from "../component/Banner";

import NeighburHood from "../component/Neighburhood";
import Blog from "../component/Blog";
const ExclusiveProducts = React.lazy(() =>
  import("../component/product/ExclusiveProducts")
);

const Home = () => {
  return (
    <>
      <Banner />
      <NeighburHood title="Neighborhood For You"/>
      <Suspense fallback={<div>Loading...</div>}>
        <ExclusiveProducts />
      </Suspense>
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
