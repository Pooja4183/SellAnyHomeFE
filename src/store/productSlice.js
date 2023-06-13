import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  product: null,
  page:0,
  pageSize:0,
  records:0,
  error: null
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
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
      state.records = action.payload.records;
      state.numberofpages = action.payload.numberofpages;
      state.totalRecords =  action.payload.totalRecords;
    },
    getProductById(state, action) {
      console.log("Fetching Id", action.payload.id);
      state.product = state.products.find(
        (element) => element.id === action.payload.id
       
      );
      console.log("Fetched::", state.product);
    },
    searchAndFilter(state,action) {

    },

    createProductSuccess(state, action){
      console.log("Success")
      state.product =  action.payload;
      state.error = null; 
    },

 
    createProductFailure(state, action) {
      state.product = null;
      state.error = action.payload;
      console.log("Failure")
    },
    


  },
});

// Action creators for each reducer method
export const productActions = productSlice.actions;

export default productSlice;
