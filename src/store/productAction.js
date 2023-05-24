import backendAPI from '../apis/backendAPI';
import { productActions } from './productSlice';

export const fetchProducts = (searchString) => async (dispatch) => {
  let uri = '/property';
  if (searchString) {
    uri = uri + `search=${searchString}`;
  }
 console.log ("URI", uri);
   const response = await backendAPI.get(uri);
  console.log("Feteched products...", response);
  dispatch(productActions.getProducts({ products: response.data.property || [] }));
};

export const fetchExclusiveProducts = () => async (dispatch) => {
  const response = await backendAPI.get('/exclusive');
  console.log("Feteched Exclusive products...", response);
  dispatch(productActions.getProducts({ products: response.data.property || [] }));
};

export const fetchProductsById = (id) => (dispatch) => {
  let nid = parseInt(id);
  dispatch(productActions.getProductById({ id: nid }));
};

// export const setProducts = (products) => {
//   return { type: actions.SET_PRODUCTS, payload: products };
// };

// export const selectedProduct = (product) => {
//   return { type: actions.SELECTED_PRODUCT, payload: product };
// };

// export const removeSelectedProduct = () => {
//   return { type: actions.REMOVE_SELECTED_PRODUCT };
// };
