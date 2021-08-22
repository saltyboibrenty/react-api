import axios from "axios";

export default axios.create({
  baseURL: "https://127.0.0.1:8080/",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Headers" :"Content-Type",
    "Access-Control-Allow-Methods" :"GET, POST, PUT, DELETE, OPTIONS"
  }
});
