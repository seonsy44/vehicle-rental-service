import axios from 'axios';

const DEFAULT_CONFIG = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {},
};

const axiosInstance = axios.create(DEFAULT_CONFIG);

axiosInstance.interceptors.request.use(
  (config) => config,
  () => ({ message: '요청 실패' })
);

axiosInstance.interceptors.response.use(
  (config) => config,
  (error) => error.response
);

export default axiosInstance;
