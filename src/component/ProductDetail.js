import { Card, CardGroup, Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsById } from '../store/productAction';
import AddToCart from './AddToCart';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsById(id));
  }, [dispatch, id]);
  return (
    product && (
      <Container style={{ marginTop: '100px', marginBottom: '50px' }}>
        <CardGroup>
          <Card>
            <Card.Img height='400px' variant='top' src={product.image} />
          </Card>
          <Card>
            <Card.Header>
              <small className='text-muted'>
                {' '}
                Category: {product.category}{' '}
              </small>
            </Card.Header>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <AddToCart data={product} />
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>
                <span className='proText'>INR {product.price}</span>
                <span className='pro'>
                  {product.rating !== undefined ? product.rating.rate : '0'}
                  <i
                    className='fa fa-star'
                    aria-hidden='true'
                    style={{ color: 'Tomato' }}
                  ></i>
                  &nbsp;| Rating (
                  {product.rating !== undefined ? product.rating.count : '0'})
                </span>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    )
  );
};

export default ProductDetail;
