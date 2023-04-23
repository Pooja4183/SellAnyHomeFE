import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from '../store/cartAction';
import Select from 'react-select';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';

const AddToCart = (props) => {
  const product = props.data;

  const cartProducts = useSelector((state) => state.cart.cartProduct);

  const dispatch = useDispatch();
  const options = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ];

  const findItem = (id) => {
    let cp = cartProducts.find((element) => element.id === id);
    console.log('CartProduct', cp);
    return cp;
  };
  const cp = findItem(product.id);
  useEffect(() => {}, [cartProducts]);
  return (
    <div>
      <div>
        {!cp ? (
          <Button
            variant='outline-danger'
            size='sm'
            style={{ borderRadius: '0px' }}
            onClick={() => dispatch(updateItem(product))}
          >
            Add to cart
          </Button>
        ) : (
          <Select
            options={options}
            onChange={(e) => dispatch(updateItem(product, e.value))}
            defaultValue={{ label: ' 1', value: 1 }}
            value={{ label: cp.qty + '', value: cp.qty }}
          />
        )}
      </div>
    </div>
  );
};

export default AddToCart;
