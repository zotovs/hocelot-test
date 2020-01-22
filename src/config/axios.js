import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.hocelot.com/on-boarding/predictive-address/v5-0',
  headers: {
    accept: 'application/json',
    authorization: `Bearer 765dd70f-5679-40d8-ad54-2fbe310d5390`,
  },
});

export default axiosInstance;
