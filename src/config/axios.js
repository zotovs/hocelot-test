import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.hocelot.com/on-boarding/predictive-address/v5-0',
  headers: {
    accept: 'application/json',
    authorization: `Bearer 04cecd49-80f4-4bfe-9306-5e6cecace16f`,
  },
});

export default axiosInstance;
