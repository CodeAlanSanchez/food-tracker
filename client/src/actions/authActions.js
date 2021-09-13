import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    console.log(data);

    dispatch({
      type: AUTH,
      payload: {
        _id: data.result._id,
        email: data.result.email,
        token: data.token,
      },
    });

    history.go(0);
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, payload: data });

    history.go(0);
  } catch (error) {
    console.log(error);
  }
};
