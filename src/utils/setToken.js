import axios from '../config/axios';

const setToken = token => {
  if (token) {
    // apply to every request
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    // delete auth header
    delete axios.defaults.headers.authorization;
  }
};

export default setToken;
