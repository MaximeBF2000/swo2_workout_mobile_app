import axios from 'axios'

const SERVER_BASE = 'http://localhost:8000'

export const server = axios.create({
  baseURL: SERVER_BASE,
  timeout: 1000,
  headers: { 'Content-type': 'application/json' }
})
