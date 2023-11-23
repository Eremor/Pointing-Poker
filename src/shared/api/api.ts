import axios from 'axios';
import { io } from 'socket.io-client';

export const socket = io('http://localhost:8000');

export const api = axios.create({
  baseURL: 'http://localhost:8000',
});
