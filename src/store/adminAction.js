import backendAPI from '../apis/backendAPI';
import { adminActions } from './adminSlice';

export const fetchProductsMeta = () => async (dispatch) => {
  try {
    await Promise.all([
      dispatch(fetchProductsForSell()),
      dispatch(fetchProductsForBuy()),
      dispatch(fetchProductsForApproved()),
      dispatch(fetchProductsForDraft()),
      dispatch(fetchProductsForAll()),
      dispatch(fetchDirectlyCreatedProducts()),
    ]);
   
  } catch (error) 
  {
    console.log("Failure1")
    dispatch(adminActions.fetchProductsForSaleFailure(error.message));

  }
};

export const fetchProductsForSell = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property?status=DRAFT&isBuy=false');
      console.debug("Success1", response.data.property)
      dispatch(adminActions.fetchProductsForSale(response.data));
      console.debug("HEaders::", response.data.headers);
      dispatch(adminActions.updateProductTableHeaders(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsMetaFailure(error.message));
  
    }
  };

  export const fetchProductsForBuy = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property?status=APPROVED');
      console.debug("Success1", response.data.property)
      dispatch(adminActions.fetchProductsForBuy(response.data));
      console.debug("HEaders::", response.data.headers);
      dispatch(adminActions.updateProductTableHeaders(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsForBuyFailure(error.message));
  
    }
  };
 
  export const fetchProductsForApproved = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property?status=APPROVED');
      console.debug("Success1", response.data)
      dispatch(adminActions.fetchProductsForApproved(response.data));
      console.debug("HEaders::", response.data.headers);
      dispatch(adminActions.updateProductTableHeaders(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsForApprovedFailure(error.message));
  
    }
  };

  
  export const fetchProductsForDraft = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property?status=DRAFT');
      console.debug("Success1", response.data)
      dispatch(adminActions.fetchProductsForDraft(response.data));
      //console.debug("HEaders::", response.data.headers);
      dispatch(adminActions.updateProductTableHeaders(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsForDraftFailure(error.message));
  
    }
  };

  
  export const fetchProductsForAll = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property');
      console.debug("Success1 Fetch All", response.data.property)
      dispatch(adminActions.fetchProductsForAll(response.data));
      //console.debug("HEaders::", response.data.headers);
      dispatch(adminActions.updateProductTableHeaders(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsForAllFailure(error.message));
  
    }
  };

  export const fetchDirectlyCreatedProducts = () => async (dispatch) => {
    try {
      const response = await backendAPI.get('/property?isBuy=true');
      console.debug("Success1", response.data.property)
      dispatch(adminActions.fetchDirectlyCreatedProducts(response.data.property));
     // console.debug("HEaders::", response.data.headers);
      dispatch(adminActions.updateProductTableHeaders(response.data.headers))
     
    } catch (error) 
    {
      console.log("Failure1")
      dispatch(adminActions.fetchProductsForAllFailure(error.message));
  
    }
  };

  
  export const createProduct = (formData, status) => async (dispatch) => {
    console.log("Property Id::", formData.id, "URL::", '/property/', "Status::", status);
    try {
      formData.status = status;
      console.log("Form Data::", formData);
      const response = await backendAPI.post('/property/', formData);
      console.log("Success1")
      dispatch(adminActions.createOrUpdateProductSuccess(response.data.property));
     
    } catch (error) 
    {
      console.log("Failure::", error);
      dispatch(createOrUpdateProductFailure(error.message));
  
    }
  };
  
export const updateProduct = (formData, status) => async (dispatch) => {
  console.log("Property Id::", formData.id, "URL::", '/property/'+ formData.id, "Status::", status);
  try {
    formData.status = status;
    console.log("Form Data::", formData);
    const response = await backendAPI.put('/property/'+ formData.id, formData);
    console.log("Success1")
    dispatch(adminActions.createOrUpdateProductSuccess(response.data.property));
   
  } catch (error) 
  {
    console.log("Failure1")
    dispatch(createOrUpdateProductFailure(error.message));

  }
};

export const deleteProduct = (formData) => async (dispatch) => {
  console.log("Property Id::", formData.id);
  try {
    console.log("Form Data::", formData);
    const response = await backendAPI.delete('/property/'+ formData.id);
    console.log("Successfully Deleted")
    dispatch(adminActions.deleteProductSuccess(response.data.property, 'DELETE_PRODUCT_SUCCESS'));
   
  } catch (error) 
  {
    console.log("Failure1")
    dispatch(createOrUpdateProductFailure(error.message, 'DELETE_PRODUCT_FAILURE'));

  }
};


export const createOrUpdateProductFailure = (error, type) => ({
  type: type || 'UPDATE_PRODUCT_FAILURE',
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
    dispatch(adminActions.fetchAgents(response.data));
    console.debug("HEaders::", response.data.headers);
    dispatch(adminActions.updateAgentTableHeader(response.data.headers))
   
  } catch (error) 
  {
    console.log("Failure1")
    dispatch(adminActions.fetchProductsForAllFailure(error.message));

  }
};

export const deleteAgent = (formData) => async (dispatch) => {
  console.log("Agent Id::", formData.id);
  try {
    console.log("Form Data::", formData);
    const response = await backendAPI.delete('/agent/'+ formData.id);
    console.log("Successfully Deleted")
    dispatch(adminActions.deleteAgentSuccess(response.data.property, 'DELETE_AGENT_SUCCESS'));
   
  } catch (error) 
  {
    console.log("Failure1")
    dispatch(createOrUpdateAgentFailure(error.message, 'DELETE_AGENT_FAILURE'));

  }
};

export const createBlog = (formData, content, status) => async (dispatch) => {
  console.log("Creating Blog", formData, content, status);
  formData.content = content;
  formData.status = status;
  console.log("Form Data::", formData);
  try {
    const response = await backendAPI.post('/blogs/', formData);
    dispatch(createOrUpdateBlogSuccess(response.data.blog));
   
  } catch (error) 
  {
    console.log("Failure")
    dispatch(createOrUpdateBlogFailure(error.message));

  }
};

export const createOrUpdateBlog = (formData, content, status) => async (dispatch) => {
  console.log("Updating Blog", formData, content, status);
  formData.content = content;
  formData.status = status;
  console.log("Form Data::", formData);

  try {
    const response = await backendAPI.put('/blogs/'+ formData.id, formData);
    console.log("Response::", response.data);
    dispatch(createOrUpdateBlogSuccess(response.data.blog));
   
  } catch (error) 
  {
    console.log("Failure", error);
    dispatch(createOrUpdateBlogFailure(error.message));

  }
};

export const deleteBlog = (id) => async (dispatch) => {
  console.log("Blog Id::", id);
  try {
    console.log("Form Data::", id);
    const response = await backendAPI.delete('/blogs/'+ id);
    console.log("Successfully Deleted")
    dispatch(adminActions.deleteBlogSuccess(response.data.property, 'DELETE_BLOG_SUCCESS'));
   
  } catch (error) 
  {
    console.log("Failure1", error);
    dispatch(createOrUpdateAgentFailure(error.message, 'DELETE_BLOG_FAILURE'));

  }
};

export const fetchBlogs = () => async (dispatch) => {
  try {
    const response = await backendAPI.get('/blogs');
    console.debug("Success", response.data.blogs);
    dispatch(adminActions.fetchBlogs(response.data));
   
   
  } catch (error) 
  {
    console.log("Failure1")
    dispatch(adminActions.fetchProductsForAllFailure(error.message));

  }
};
export const createOrUpdateBlogSuccess = (blog) => ({
  type: 'CREATE_UPDATE_BLOG_SUCCESS',
  payload: blog,
});

export const createOrUpdateBlogFailure = (error) => ({
  type: 'CREATE_UPDATE_BLOG_FAILURE',
  payload: error,
});