import axios from 'axios';

//connectar al customer-microservice
export const userApi = axios.create({
    baseURL: `http://localhost:9092/api/`,
}) 