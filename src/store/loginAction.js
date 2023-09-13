import backendAPI from '../apis/backendAPI';
import { loginActions } from './loginSlice';

export const submitLoginSuccess = (formData) => async (dispatch) => {
    console.log("Inside Login Action::", formData);
    try {
        const response = await backendAPI.post('/login', formData);

        if (response.status === 200) {
          // User is valid, dispatch success action
          console.log('User is valid');
          dispatch(loginActions.submitLoginSuccess(response.data));
        } else if (response.status === 401) {
          // Unauthorized, dispatch unauthorized action
          console.log('Unauthorized');
          dispatch(loginActions.submitLoginFailure('Unauthorized'));
        } else {
          // Handle other status codes (e.g., 500) as needed
          console.log('Server Error');
          dispatch(loginActions.submitLoginFailure('Server Error'));
        }
     return response;
    } catch (error) 
    {
      console.log("Failure " + error);
      dispatch(loginActions.submitLoginFailure("Unauthorized:" + error.message));
      throw error;
    }
};

export const logout = (user) => async (dispatch) => {
  console.log("Inside Logout Action::", user);
  try {
    // Make an API call to your server to log the user out, if necessary
  //  const response = await backendAPI.post('/logout', {}); //isAuthenticated: user.isAuthenticated, id: user.user.id, user: user.user}); // Replace with your logout endpoint
    const response = await backendAPI.post('/logout', {}, { withCredentials: true });

    // Dispatch the logout action to clear user data
    dispatch(loginActions.logout());
    return response;
  } catch (error) {
    // Handle any errors that occur during logout, if needed
    console.error('Logout error:', error);
    throw error;
  }
};