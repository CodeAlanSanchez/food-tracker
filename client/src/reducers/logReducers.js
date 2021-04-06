import { CREATE_LOG, GET_LOGS, UPDATE_LOG } from '../constants/actionTypes';

export default (logs = [], action) => {
  switch (action.type) {
    case GET_LOGS:
      return action.payload;
    case CREATE_LOG:
      return [...logs, action.payload];
    case UPDATE_LOG:
      return logs.map((log) => (log._id === action.payload._id ? action.payload : log));
    default:
      return logs;
  }
};
