import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://54.82.50.232:3000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
