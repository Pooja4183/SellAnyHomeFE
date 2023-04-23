import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import UserloginSlice from './loginSlice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    Userlogin: UserloginSlice.reducer,
  },
});
