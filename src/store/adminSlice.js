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
    
  },
});

export const adminActions = adminSlice.actions;

export default adminSlice;
