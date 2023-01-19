import axios from 'axios';

//al final todos se conectann a un mismo puerto 
//por el balanceador de carga pero por el momento
//se puede crear diferentes api para cada microservcio
export const backEndApi = axios.create({
    baseURL: `http://localhost:8082/api/`,
}) 