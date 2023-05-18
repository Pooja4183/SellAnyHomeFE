import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchExclusiveProducts } from '../../store/productAction';
import ListProducts from './ListProducts';


const ExclusiveProducts = () => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExclusiveProducts());
  }, [dispatch]);

  return (
    <ListProducts title="Our Exclusive Homes"/>
    )

};

export default ExclusiveProducts;
