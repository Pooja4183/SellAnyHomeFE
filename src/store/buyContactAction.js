import backendAPI from '../apis/backendAPI';
import { buyContactActions } from './buyContactSlice';

export const submitBuyerInterest = (formData) => async (dispatch) => {
    try {
      const response = await backendAPI.post('/contact', formData);
      console.log("Success1")
      dispatch(buyContactActions.submitBuyerInterestSuccess(response.data));
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(buyContactActions.submitBuyerInterestFailure(error.message));
  
    }
  };
  
  
