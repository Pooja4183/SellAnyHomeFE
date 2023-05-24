import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchExclusiveProducts } from "../../store/productAction";
import ListProducts from "./ListProducts";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./product.module.css";

const ExclusiveProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExclusiveProducts());
  }, [dispatch]);

  return (
    <Container fluid className={style.produtCont}>
      <Row className={style.headinExclusive}>
        <Col>
          <h2>Our Exclusive Homes</h2>
        </Col>
      </Row>
      <ListProducts />
    </Container>
  );
};

export default ExclusiveProducts;
