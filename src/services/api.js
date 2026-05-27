import axios from "axios";

const API = axios.create({
  baseURL:
    "https://portfolio-backend-ucfy.onrender.com/",
});

export default API;