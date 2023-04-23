import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProduct: [],
};

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    updateCart(state, action) {
      let existingId = state.cartProduct.find(
        (element) => element.id === action.payload.id
      );

      if (existingId) {
        existingId.qty = action.payload.qty;
        existingId.totalPrice = action.payload.totalPrice;
      } else {
        state.cartProduct.push(action.payload);
      }
    },
    removeCart(state, action) {
      console.log('Payload', action.payload);
      let findIndex = state.cartProduct.findIndex((i) => {
        console.log(
          'Item Id',
          i.id,
          typeof i.id,
          action.payload,
          typeof action.payload
        );
        return i.id === action.payload;
      });
      console.log('findIndex', findIndex);
      state.cartProduct.splice(findIndex, 1);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
