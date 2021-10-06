import axios from 'axios';
import { API_URL } from '@env';

const api = axios.create({
  baseURL: `${API_URL}/teste`,
});

export default api;
