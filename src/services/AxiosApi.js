import axios from 'axios';

const instance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Key': '123',
  },
  timeout: 30000,
});

export default instance;
