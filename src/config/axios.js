import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.hocelot.com/on-boarding/predictive-address/v5-0',
  headers: {
    accept: 'application/json',
    authorization: `Bearer 791b6572-4981-4162-910b-fcbdb2778ebc`,
  },
});

export default axiosInstance;
