import axios from 'axios';

const url = 'http://localhost:5000';

export const getMeals = () => axios.get(url);
export const getMeal = (id) => axios.get(`${url}:${id}`);
export const createMeal = (id, meal) => axios.create(`${url}:${id}`, meal);
export const updateMeal = (id, meal) => axios.patch(`${url}:${id}`, meal);
export const deleteMeal = (id) => axios.delete(`${url}:${id}`);
