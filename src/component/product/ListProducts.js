import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './product.module.css';


const ListProducts = ({title}) => {
  const productListing = useSelector((state) => state.products.products);
  console.log("Product Listing...", productListing);

  return (
    productListing && (
      <Container fluid className={style.produtCont}>
        <Row className={style.headinExclusive}> <Col><h2>{title}</h2></Col></Row>
        <Row xs={2} md={3} className='g-4 mx-2 produtRow'>
          {productListing.map((product) => (
            <Col className={style.colpadding} key={product.id}>
              <Card  className={style.thinCard}>
                <Card.Body className={style.cardImage} >
                  <Link to={'/product/' + product.id}>
                    <Card.Img  src={product.img1} className={style.cardI}   />
                  </Link>
                </Card.Body>

                <Card.Footer className={style.cardBody}  >
                  <Card.Title className={style.proTtile}  >
                    {' '}
                    <Link to={'/product/' + product.id}>
                      {product.title}
                    </Link>{' '}
                  </Card.Title>
                  <Card.Text>
                    <span className={style.protext}> INR {product.price}</span>
                    <span className={style.pro}>{product.bed} Bed | {product.bath} Bath | {product.sqFt} SqFt  </span>
                  </Card.Text>
                </Card.Footer>
                {/* <AddToCart data={product} /> */}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  );
};

export default ListProducts;
