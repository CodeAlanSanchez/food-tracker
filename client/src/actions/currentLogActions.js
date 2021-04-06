import * as api from '../api';
import { ADD_MEAL, GET_MEALS, REMOVE_MEAL } from '../constants/actionTypes';

export const getCurrentMeals = () => ({ type: GET_MEALS });

export const addCurrentMeal = (meal) => ({ type: ADD_MEAL, payload: meal });

export const removeCurrentMeal = (id) => ({ type: REMOVE_MEAL, payload: id });
