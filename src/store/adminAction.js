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

  export const fetchProductsForBuy = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property?status=APPROVED');
      console.debug("Success1", response.data.property)
      dispatch(adminActions.fetchProductsForBuy(response.data.property));
      console.debug("HEaders::", response.data.headers);
      dispatch(adminActions.updateSellTableHeader(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsForBuyFailure(error.message));
  
    }
  };
 
  export const fetchProductsForApproved = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property?status=APPROVED');
      console.debug("Success1", response.data.property)
      dispatch(adminActions.fetchProductsForApproved(response.data.property));
      console.debug("HEaders::", response.data.headers);
      dispatch(adminActions.updateSellTableHeader(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsForApprovedFailure(error.message));
  
    }
  };

  
  export const fetchProductsForDraft = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property?status=DRAFT');
      console.debug("Success1", response.data.property)
      dispatch(adminActions.fetchProductsForDraft(response.data.property));
      console.debug("HEaders::", response.data.headers);
      dispatch(adminActions.updateSellTableHeader(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsForDraftFailure(error.message));
  
    }
  };

  
  export const fetchProductsForAll = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property');
      console.debug("Success1", response.data.property)
      dispatch(adminActions.fetchProductsForAll(response.data.property));
      console.debug("HEaders::", response.data.headers);
      dispatch(adminActions.updateSellTableHeader(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsForAllFailure(error.message));
  
    }
  };
  export const createProduct = (formData, status) => async (dispatch) => {
    console.debug("Property Id::", formData.id, "URL::", '/property/', "Status::", status);
    try {
      formData.status = status;
      console.debug("Form Data::", formData);
      const response = await backendAPI.post('/property/', formData);
      console.log("Success1")
      dispatch(adminActions.createOrUpdateProductSuccess(response.data.property));
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(createOrUpdateProductFailure(error.message));
  
    }
  };
  
export const createOrUpdateProduct = (formData, status) => async (dispatch) => {
  console.debug("Property Id::", formData.id, "URL::", '/property/'+ formData.id, "Status::", status);
  try {
    formData.status = status;
    console.debug("Form Data::", formData);
    const response = await backendAPI.put('/property/'+ formData.id, formData);
    console.log("Success1")
    dispatch(adminActions.createOrUpdateProductSuccess(response.data.property));
   
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

export const createAgent = (formData, status) => async (dispatch) => {
  formData.status = status;
  console.log("Inside action", formData);
  try {
    const response = await backendAPI.post('/agent/', formData);
    dispatch(createOrUpdateAgentSuccess(response.data.agent));
   
  } catch (error) 
  {
    console.log("Failure1")
    dispatch(createOrUpdateAgentFailure(error.message));

  }
};

export const createOrUpdateAgent = (formData, status) => async (dispatch) => {
  formData.status = status;
  console.log("Inside action", formData);
  try {
    const response = await backendAPI.put('/agent/'+ formData.id, formData);
    console.log("Response::", response.data.agent);
    dispatch(adminActions.createOrUpdateAgentSuccess(response.data.agent));
   
  } catch (error) 
  {
    console.log("Failure1")
    dispatch(adminActions.createOrUpdateAgentFailure(error.message));

  }
};

export const createOrUpdateAgentSuccess = (product) => ({
  type: 'CREATE_UPDATE_AGENT_SUCCESS',
  payload: product,
});

export const createOrUpdateAgentFailure = (error) => ({
  type: 'CREATE_UPDATE_AGENT_FAILURE',
  payload: error,
});

export const fetchAgents = () => async (dispatch) => {
  try {
    const response = await backendAPI.get('/agent');
    console.debug("Success1", response.data.agents)
    dispatch(adminActions.fetchAgents(response.data.agents));
    console.debug("HEaders::", response.data.headers);
    dispatch(adminActions.updateAgentTableHeader(response.data.headers))
   
  } catch (error) 
  {
    console.log("Failure1")
    dispatch(adminActions.fetchProductsForAllFailure(error.message));

  }
};
