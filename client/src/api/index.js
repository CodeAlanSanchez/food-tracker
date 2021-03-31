import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchMeals = () => axios.get(`${url}/meals`);
export const fetchMeal = (id) => axios.get(`${url}/meals/${id}`);
export const createMeal = (meal) => axios.post(`${url}/meals`, meal);
export const updateMeal = (id, meal) => axios.patch(`${url}/meals/${id}`, meal);
export const deleteMeal = (id) => axios.delete(`${url}/meals/${id}`);
