import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.tawila.co.uk/api',
  headers: {
    'Content-Type': 'application/json',
  },
})
