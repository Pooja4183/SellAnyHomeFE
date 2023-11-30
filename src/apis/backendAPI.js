import axios from 'axios';

export default axios.create({
 baseURL: 'http://localhost:5000/api',
  // baseURL: 'https://api.tomorrowdubai.com/api'
});
