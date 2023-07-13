import axios from "axios";
const API_URL = "http://localhost:3001";
// // axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.headers.common["Authorization"] =
//   sessionStorage.getItem("AUTH_TOKEN");
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

const axiosInst = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

// // Alter defaults after instance has been created
axiosInst.defaults.headers.common["Authorization"] = "";
//   sessionStorage.getItem("AUTH_TOKEN");
export default axiosInst;
