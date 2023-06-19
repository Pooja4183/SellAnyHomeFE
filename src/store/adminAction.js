import backendAPI from '../apis/backendAPI';
import { adminActions } from './adminSlice';

export const fetchProductsForSale = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property?status=DRAFT');
      console.debug("Success1", response.data.property)
      dispatch(adminActions.fetchProductsForSale(response.data.property));
      console.debug("HEaders::", response.data.headers);
      dispatch(adminActions.updateSellTableHeader(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsForSaleFailure(error.message));
  
    }
  };
  
  
export const createOrUpdateProduct = (formData, status) => async (dispatch) => {
  console.debug("Property Id::", formData.id, "URL::", '/property/'+ formData.id, "Status::", status);
  try {
    formData.status = status;
    console.debug("Form Data::", formData);
    const response = await backendAPI.put('/property/'+ formData.id, formData);
    console.log("Success1")
    dispatch(createOrUpdateProductSuccess(response.data));
   
  } catch (error) 
  {
    console.log("Failure1")
    dispatch(createOrUpdateProductFailure(error.message));

  }
};

export const createOrUpdateProductSuccess = (product) => ({
  type: 'UPDATE_PRODUCT_SUCCESS',
  payload: product,
});

export const createOrUpdateProductFailure = (error) => ({
  type: 'UPDATE_PRODUCT_FAILURE',
  payload: error,
});
