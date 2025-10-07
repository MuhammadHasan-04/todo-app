import axios from "axios"

const baseUrl = '/api/todos'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}



const getAll = async () => {
  const res = await axios.get(baseUrl, token ? { headers: { Authorization: token } } : {})
  return res.data
}

const create = async (content) => {
  const res = await axios.post(baseUrl, { content }, token ? { headers: { Authorization: token } } : {})
  return res.data
}

const update = async (id, updatedTodo) => {
  const config = token ? { headers: { Authorization: token } } : {}
  const res = await axios.put(`${baseUrl}/${id}`, updatedTodo, config)
  return res.data
}

const remove = async (id) => {
  await axios.delete(`${baseUrl}/${id}`, token ? { headers: { Authorization: token } } : {})
}

export default { setToken, getAll, create, update, remove }
