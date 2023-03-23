import axios from 'axios';

export const API_URL = 'localhost:3000/';

const HTTP = axios.create({
  baseURL: API_URL,
});

HTTP.interceptors.request.use(async (config) => {
  if (localStorage.getItem('accessToken')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  }
  return config;
});

export default HTTP;
