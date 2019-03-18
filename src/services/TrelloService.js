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

const deleteColumn = (column) => {
  return http.delete(`columns/${column}`)
}

const createCard = (card) => {
  const data = new FormData()
  Object.keys(card).forEach(key => {
    console.log(key, card[key])
    data.append(key, card[key])
  })
  return http.post('/cards', data)
}

const deleteCard = (card) => {
  return http.delete(`cards/${card}`)
}


export default {getColumns, createColumn, deleteColumn, createCard, deleteCard};