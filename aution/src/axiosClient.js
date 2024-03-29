import axios from "axios";

const axiosClient = axios.create({
  baseURl: import.meta.env.VITE_API_BASE_URL,
});

export default axiosClient;
