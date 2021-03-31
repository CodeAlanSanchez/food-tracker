import * as api from '../api';

export const getMeals = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMeals();

    dispatch({ type: 'FETCH_MEALS', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const getMeal = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchMeals(id);

    dispatch({ type: 'FETCH_MEAL', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createMeal = (id, meal) => async (dispatch) => {
  try {
    const { data } = await api.createMeal(id, meal);

    dispatch({ type: 'CREATE_MEAL', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = (id, meal) => async (dispatch) => {
  try {
    const { data } = api.updateMeal(id, meal);

    dispatch({ type: 'UPDATE_MEAL', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = api.deleteMeal(id);

    dispatch({ type: 'DELETE_MEAL', paylaod: data });
  } catch (error) {
    console.error(error);
  }
};
