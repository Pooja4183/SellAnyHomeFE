import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import buyContactSlice from './buyContactSlice';
import adminSlice from './adminSlice';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  products: productSlice.reducer,
  cart: cartSlice.reducer,
  buyContact: buyContactSlice.reducer,
  admin: adminSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);
