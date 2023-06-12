import backendAPI from '../apis/backendAPI';
import { adminActions } from './adminSlice';

export const fetchProductsForSale = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property?status=Approved');
      console.log("Success1", response.data.property)
      dispatch(adminActions.fetchProductsForSale(response.data.property));
      console.log("HEaders::", response.data.headers);
      dispatch(adminActions.updateSellTableHeader(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsForSaleFailure(error.message));
  
    }
  };
  
  
