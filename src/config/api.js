import axios from 'axios';

const API_URL = 'https://swe363-project.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { API_URL };
export default api; 
