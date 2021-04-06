import * as api from '../api';
import { CREATE_LOG, GET_LOGS, UPDATE_LOG } from '../constants/actionTypes';

export const getLogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLogs();

    dispatch({ type: GET_LOGS, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const createLog = (log) => async (dispatch) => {
  try {
    const { data } = await api.createLog(log);

    dispatch({ type: CREATE_LOG, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const updateLog = (log) => async (dispatch) => {
  try {
    const { data } = await api.updateLog(log);

    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
