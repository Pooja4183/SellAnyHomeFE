import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sellProducts: [],
  sellTableHeaders:[],
  error: null
};

const adminSlice = createSlice({
  name: 'admin',

  initialState,

  reducers: {
    fetchProductsForSale(state, action) {
        state.sellProducts=  action.payload;
        state.error = null;
    },
    updateSellTableHeader(state,action) {
        state.sellTableHeaders= action.payload;
    },
    fetchProductsForSaleFailure(state, action) {
        state.error =  action.payload;
        state.sellProducts = [];
    },
    createOrUpdateProductSuccess(state, action){
      console.log("Success")
      state.product =  action.payload;
      state.error = null; 
    },

 
    createOrUpdateProductFailure(state, action) {
      state.product = null;
      state.error = action.payload;
      console.log("Failure")
    },
  },
});

export const adminActions = adminSlice.actions;

export default adminSlice;
