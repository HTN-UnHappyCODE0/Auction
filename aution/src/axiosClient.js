import axios from "axios";

const axiosClient = axios.create({
  baseURl: "http://localhost",
});

export default axiosClient;
