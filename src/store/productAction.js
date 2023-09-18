import backendAPI from '../apis/backendAPI';
import { productActions } from './productSlice';

export const fetchProducts = (formData) => async (dispatch) => {
  console.debug("Form Data:", formData);
  try {
    const params = {
      search: formData.search,
      page: formData.page,
      homeType: formData.homeType,
      minPrice: formData.minPrice,
      maxPrice: formData.maxPrice,
      sort: formData.sort,
      size: formData.size,
      status: 'APPROVED'
    };
     let uri = '/property';
  
     const response = await backendAPI.get(uri, {params});
    console.debug("Feteched products...", response);
    dispatch(productActions.getProducts({ 
      products: response.data.property || [] ,
      page: response.data.page,
      pageSize: response.data.pageSize,
      records: response.data.records,
      numberofpages: response.data.numberofpages,
      totalRecords: response.data.totalRecords
    }));
  }catch (error){
    console.log("Error occurred::", error);
    dispatch(productActions.productFailure(error.message));
    throw error;
  }

};

export const fetchExclusiveProducts = () => async (dispatch) => {
  console.log("Fetching Exclusive");
  try {
  const response = await backendAPI.get('/exclusive');
  console.log("Feteched Exclusive products...", response.data.property);
  dispatch(productActions.getExclusiveProducts({ exclusives: response.data.property || [] }));
  } catch(error) {
    console.log("Error occurred::", error);
    dispatch(productActions.productFailure(error.message));
    throw error;
  }
};

export const fetchProductsById = (id) => (dispatch) => {
 // let nid = parseInt(id);
  dispatch(productActions.getProductById({ id: id }));
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


export const createProduct = (formData) => async (dispatch) => {
  try {
    const response = await backendAPI.post('/property', formData);
    console.log("Success1")
    dispatch(createProductSuccess(response.data));
   
  } catch (error) 
  {
    console.log("Failure1")
    dispatch(createProductFailure(error.message));

  }
};

export const createProductSuccess = (product) => ({
  type: 'CREATE_PRODUCT_SUCCESS',
  payload: product,
});

export const createProductFailure = (error) => ({
  type: 'CREATE_PRODUCT_FAILURE',
  payload: error,
});

export const fetchProductFailure = (error) => ({
  type: 'FETCH_PRODUCT_FAILURE',
  payload: error,
});

