import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001'
})

const authenticate = (user) => {
  return http.post('/authenticate', user)
    
}


export default {getColumns, createColumn, deleteColumn, createCard, deleteCard};


//CUIDADO CON LOS FLAGS DEL CORS ///withCredentials: true///