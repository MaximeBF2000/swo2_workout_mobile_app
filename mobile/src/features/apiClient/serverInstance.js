import axios from 'axios'

export const SERVER_BASE = 'http://localhost:8000'

export const server = axios.create({
  baseURL: SERVER_BASE,
  timeout: 1000,
  headers: { 'Content-type': 'application/json' }
})

export const axiosGetFetcher = url => server.get(url).then(res => res.data)
