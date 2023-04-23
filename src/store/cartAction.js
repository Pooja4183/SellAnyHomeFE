import { cartActions } from './cartSlice';

export const updateItem =
  (product, qty = 1) =>
  (dispatch) => {
    dispatch(
      cartActions.updateCart({
        id: product.id,
        qty: parseInt(qty),
        product: product,
        totalPrice: product.price * qty,
      })
    );
  };

export const deleteItem = (itemId) => (dispatch) => {
  dispatch(cartActions.removeCart(parseInt(itemId)));
};
