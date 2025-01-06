//import axios
import axios from "axios";

const token = "B5tIHQKg438JXLcCkbullTKtW0iWdouawjAww21OfEwtD5KrVe6z2b41bLlX";

const Api = axios.create({
  //set default endpoint API
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
});

export default Api;
