import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.hocelot.com/on-boarding/predictive-address/v5-0',
  headers: {
    accept: 'application/json',
    authorization: `Bearer 5473d013-21dc-4dbf-a30e-38594040bca8`,
  },
});

export default axiosInstance;
