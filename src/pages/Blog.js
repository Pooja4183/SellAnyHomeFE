import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import ExclusiveProducts from '../component/product/ExclusiveProducts'
import BlogDetail from '../component/blog/BlogDetail';

const Blog = () => {
  return (
    <>
      <Header showSearch={true}/>
      <BlogDetail />
      <ExclusiveProducts title={"Similar Properties"}/>
      <Footer />
    </>
  );
};

export default Blog;
