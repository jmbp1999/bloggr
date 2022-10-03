import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8800/api' });

export const APIRegister = async (userData) => {
  return await API.post('/auth/register', userData);
};

export const APILogin = async (loginData) => {
  return await API.post('/auth/login', loginData);
};

export const APILogout = async () => {
  return await API.post('/auth/logout');
};
