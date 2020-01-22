import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.hocelot.com/on-boarding/predictive-address/v5-0',
  headers: {
    accept: 'application/json',
  },
});

export default axiosInstance;
