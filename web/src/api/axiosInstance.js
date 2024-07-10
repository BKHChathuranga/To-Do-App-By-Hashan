import axios from 'axios';
import { APP_URL } from '../config';

export const api = axios.create({
  baseURL: APP_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});