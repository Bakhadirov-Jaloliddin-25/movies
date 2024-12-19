import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

request.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`;

  return config;
});

export { request };
