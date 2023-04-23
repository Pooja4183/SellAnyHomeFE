import React from 'react';
import { useEffect } from 'react';
import style from './CartStyle.module.css';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateItem, deleteItem } from '../store/cartAction';
import Select from 'react-select';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartProduct);
  const Subtotal = cartItems.reduce((e, p) => e + p.totalPrice, 0);
  const subQantity = cartItems.reduce((e, p) => e + p.qty, 0);

  const dispatch = useDispatch();
  const options = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ];

  const removeItem = (e) => {
    console.log('My data', e.target.value);
    dispatch(deleteItem(e.target.value));
  };

  useEffect(() => {}, [cartItems]);
  return (
    <Container fluid className={style.containerBg}>
      <Row className={style.cartRow}>
        <div>
          {' '}
          <h1 className={style.heading}>Shopping Cart</h1>
        </div>
        <Col md={8} xs={12} className={style.cart}>
          <Table responsive='sm'>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      alt=''
                      style={{ height: '85px', widht: '105px' }}
                      src={item.product.image}
                    ></img>
                  </td>
                  <td> {item.product.title}</td>
                  <td>₹ {item.product.price}</td>
                  <td>
                    <Select
                      options={options}
                      onChange={(e) =>
                        dispatch(updateItem(item.product, e.value))
                      }
                      defaultValue={{ label: ' 1', value: 1 }}
                      value={{ label: item.qty + '', value: item.qty }}
                    />
                  </td>

                  <td>₹ {item.totalPrice}</td>
                  <td>
                    <Button
                      variant='outline-danger'
                      value={item.id}
                      onClick={removeItem}
                    ></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className='d-flex justify-content-end'>
            <div className='p-2 col-example text-left'>
              {' '}
              Subtotal ({subQantity} items): ₹{Number(Subtotal).toFixed(2)}
            </div>
          </div>
        </Col>

        <Col className={style.process} md={4} sx={12}></Col>
      </Row>
      ;
    </Container>
  );
};

export default Cart;
