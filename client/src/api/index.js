import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchMeals = () => API.get(`${BASE_URL}/meals`);
export const fetchMeal = (id) => API.get(`${BASE_URL}/meals/${id}`);
export const createMeal = (meal) => API.post(`${BASE_URL}/meals`, meal);
export const updateMeal = (id, meal) => API.patch(`${BASE_URL}/meals/${id}`, meal);
export const deleteMeal = (id) => API.delete(`${BASE_URL}/meals/${id}`);

export const signIn = (formData) => API.post(`${BASE_URL}/auth/signin`, formData);
export const signUp = (formData) => API.post(`${BASE_URL}/auth/signup`, formData);

export const fetchLogs = () => API.get(`${BASE_URL}/log`);
export const createLog = (logData) => API.post(`${BASE_URL}/log`, logData);
export const updateLog = (id, logData) => API.patch(`${BASE_URL}/logs/${id}`, logData);
