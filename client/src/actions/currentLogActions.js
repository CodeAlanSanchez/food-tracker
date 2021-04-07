import {
  ADD_BREAKFAST, ADD_DINNER, ADD_LUNCH,
  ADD_SNACK, GET_MEALS, REMOVE_BREAKFAST,
  REMOVE_LUNCH, REMOVE_DINNER, REMOVE_SNACK,
} from '../constants/actionTypes';

export const getCurrentMeals = () => ({ type: GET_MEALS });

export const addBreakfast = (meal) => ({ type: ADD_BREAKFAST, payload: meal });

export const addLunch = (meal) => ({ type: ADD_LUNCH, payload: meal });

export const addDinner = (meal) => ({ type: ADD_DINNER, payload: meal });

export const addSnack = (meal) => ({ type: ADD_SNACK, payload: meal });

export const removeBreakfast = (id) => ({ type: REMOVE_BREAKFAST, payload: id });

export const removeLunch = (id) => ({ type: REMOVE_LUNCH, payload: id });

export const removeDinner = (id) => ({ type: REMOVE_DINNER, payload: id });

export const removeSnack = (id) => ({ type: REMOVE_SNACK, payload: id });
