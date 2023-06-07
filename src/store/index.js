import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import buyContactSlice from './buyContactSlice';
// import UserloginSlice from './loginSlice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    buyContact: buyContactSlice.reducer
    // Userlogin: UserloginSlice.reducer,
  },
});
