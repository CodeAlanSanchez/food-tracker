import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchMeals = () => API.get('/meals');
export const fetchMeal = (id) => API.get(`/meals/${id}`);
export const createMeal = (meal) => API.post('/meals', meal);
export const updateMeal = (id, meal) => API.patch(`/meals/${id}`, meal);
export const deleteMeal = (id) => API.delete(`/meals/${id}`);

export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);

export const fetchLogs = () => API.get('/logs');
export const createLog = (logData) => API.post('/logs', logData);
export const updateLog = (id, logData) => API.patch(`/logs/${id}`, logData);
