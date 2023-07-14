import axios from "axios";
const API_URL = "http://localhost:3001";


const axiosInst = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
    authorization: sessionStorage.getItem("token")
    // authorization: "BearersessionStorage.getItem"
  },

});

export default axiosInst;
