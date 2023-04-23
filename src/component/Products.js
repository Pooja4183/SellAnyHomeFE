import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productAction';
import AddToCart from './AddToCart';

const Products = () => {
  const productListing = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    productListing && (
      <Container fluid className='produtCont'>
        <Row xs={2} md={5} className='g-4 mx-2 produtRow'>
          {productListing.map((product) => (
            <Col className='colpadding' key={product.id}>
              <Card className='thin thinCard'>
                <Card.Body className='cardImage'>
                  <Link to={'/product/' + product.id}>
                    <Card.Img className='imgInside' src={product.image} />
                  </Link>
                </Card.Body>

                <Card.Footer className='cardBody'>
                  <Card.Title className='proTtile'>
                    {' '}
                    <Link to={'/product/' + product.id}>
                      {product.title}
                    </Link>{' '}
                  </Card.Title>
                  <Card.Text>
                    <span className='proText'> INR {product.price}</span>
                    <span className='pro'>Rating {product.rating.rate}</span>
                  </Card.Text>
                </Card.Footer>
                <AddToCart data={product} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  );
};

export default Products;
