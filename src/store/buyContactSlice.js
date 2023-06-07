import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contact: null,
  error: null
};

const buyContactSlice = createSlice({
  name: 'buyContact',

  initialState,

  reducers: {
    submitBuyerInterestSuccess(state, action) {
        state.contact =  action.payload;
        state.error = null;
    },
    submitBuyerInterestFailure(state, action) {
        state.error =  action.payload;
        state.contact = null;
    },
   
  },
});

export const buyContactActions = buyContactSlice.actions;

export default buyContactSlice;
