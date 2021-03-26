import axios from "axios";

const api = axios.create({
    baseURL:"https://apigado.herokuapp.com/"
})

export default api;