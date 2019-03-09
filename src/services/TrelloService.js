import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001'
})

const createColumn = (column) => {
  return http.post('/columns', column)
}

const getColumns = () => {
  return http.get('/columns')
}

const createCard = (card) => {
  return http.post('/columns', column)
}


export default {getColumns, createColumn};