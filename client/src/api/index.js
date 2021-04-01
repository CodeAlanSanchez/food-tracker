import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchMeals = () => axios.get(`${url}/meals`);
export const fetchMeal = (id) => axios.get(`${url}/meals/${id}`);
export const createMeal = (meal) => axios.post(`${url}/meals`, meal);
export const updateMeal = (id, meal) => axios.patch(`${url}/meals/${id}`, meal);
export const deleteMeal = (id) => axios.delete(`${url}/meals/${id}`);

export const signIn = (formData) => axios.post(`${url}/auth/signin`, formData);
export const signUp = (formData) => axios.post(`${url}/auth/signup`, formData);
