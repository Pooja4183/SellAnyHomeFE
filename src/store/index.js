import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productSlice from './productSlice';
import buyContactSlice from './buyContactSlice';
import adminSlice from './adminSlice';
import loginSlice from './loginSlice';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  products: productSlice.reducer,
  buyContact: buyContactSlice.reducer,
  admin: adminSlice.reducer,
  login: loginSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);
