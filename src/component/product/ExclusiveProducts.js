import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchExclusiveProducts } from "../../store/productAction";
import ListProducts from "./ListProducts";
import { Container } from "react-bootstrap";
import style from "./product.module.css";

const ExclusiveProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExclusiveProducts());
  }, [dispatch]);

  return (
    <Container fluid className={style.produtCont}>
      
      <ListProducts title="Our Exclusive Homes" />
    </Container>
  );
};

export default ExclusiveProducts;
