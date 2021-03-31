import * as api from '../api';
import {
  CREATE_MEAL, DELETE_MEAL, FETCH_MEAL, FETCH_MEALS, UPDATE_MEAL,
} from '../constants/actionTypes';

export const getMeals = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMeals();

    dispatch({ type: FETCH_MEALS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const getMeal = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchMeals(id);

    dispatch({ type: FETCH_MEAL, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createMeal = (meal) => async (dispatch) => {
  try {
    const { data } = await api.createMeal(meal);

    dispatch({ type: CREATE_MEAL, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const updatePost = (id, meal) => async (dispatch) => {
  try {
    const { data } = await api.updateMeal(id, meal);

    dispatch({ type: UPDATE_MEAL, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteMeal(id);

    dispatch({ type: DELETE_MEAL, paylaod: data });
  } catch (error) {
    console.error(error);
  }
};
