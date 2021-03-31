import { GET_TIME, SET_TIME } from '../constants/actionTypes';

export const getTime = () => ({ type: GET_TIME, payload: {} });

export const setTime = (time) => ({ type: SET_TIME, payload: time });
