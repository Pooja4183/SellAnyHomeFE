import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  product: null,
};

const productSlice = createSlice({
  // An unique name of a slice
  name: 'product',

  // Initial state value of the reducer
  initialState,

  // Reducer methods
  reducers: {
    getProducts(state, action) {
      console.log("Action", action.payload);
      state.products = action.payload.products;
    },
    getProductById(state, action) {
      state.product = state.products.find(
        (element) => element.id === action.payload.id
      );
    },
  },
});

// Action creators for each reducer method
export const productActions = productSlice.actions;

export default productSlice;
