import axios from "axios";

const api = axios.create({
  baseURL:  import.meta.env.VITE_API_URL ||"http://localhost:5000/api",
});

api.interceptors.request.use(config => {
  config.headers.authorization = localStorage.getItem("token");
  return config;
});

export default api;
