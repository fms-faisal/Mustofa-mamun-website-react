// src/api.js
import axios from 'axios';

// This function determines the API URL based on the environment.
const getApiUrl = () => {
  // In development (when you run `npm run dev`), it uses your local server.
  // In production (when deployed on Vercel), it uses the Vercel server URL.
  const isDevelopment = import.meta.env.DEV;
  return isDevelopment ? 'http://localhost:5000' : 'https://mustofa-server.vercel.app';
};

const api = axios.create({
  baseURL: getApiUrl(),
});

export default api;