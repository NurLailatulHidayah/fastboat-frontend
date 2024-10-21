//import axios
import axios from "axios";

const token = 'Qn2bZCVMxOca1IP5YiBLqoIyUTaL0to4NCrG0Tjdsh2xfedfM6vxP68lx48n';

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
