import backendAPI from '../apis/backendAPI';
import { productActions } from './productSlice';

export const fetchProducts = (formData) => async (dispatch) => {
  console.log("Form Data:", formData);
  const params = {
    search: formData.search,
    page: formData.page,
    homeType: formData.homeType,
    minPrice: formData.minPrice,
    maxPrice: formData.maxPrice,
    sort: formData.sort,
    size: formData.size
  };
   let uri = '/property';

   const response = await backendAPI.get(uri, {params});
  console.log("Feteched products...", response);
  dispatch(productActions.getProducts({ 
    products: response.data.property || [] ,
    page: response.data.page,
    pageSize: response.data.pageSize,
    records: response.data.records,
    numberofpages: response.data.numberofpages,
    totalRecords: response.data.totalRecords
  }));
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

export const searchAndFilter = (formData) => async (dispatch) => {

  console.log("Form Data:", formData);
    const params = {
      search: formData.search,
      page: formData.page,
      homeType: formData.homeType,
      minPrice: formData.minPrice,
      maxPrice: formData.maxPrice
    };

    const response = await backendAPI.get('/search', params);
    console.log("Searched products...", response);
    dispatch(productActions.getProducts({ products: response.data.property || [] }));
};
