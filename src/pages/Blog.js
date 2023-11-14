import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import ExclusiveProducts from '../component/product/ExclusiveProducts'
import BlogDetail from '../component/blog/BlogDetail';
import ListBlogs from '../component/blog/ListBlogs';

const Blog = () => {
  return (
    <>
      <Header showSearch={true}/>
      <BlogDetail />
      <ListBlogs title={"You might be interested in these articles!"}/>
      <ExclusiveProducts title={"Similar Properties"}/>
      <Footer />
    </>
  );
};

export default Blog;
