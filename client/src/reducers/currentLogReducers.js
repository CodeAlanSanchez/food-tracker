import { ADD_MEAL, REMOVE_MEAL, GET_MEALS } from '../constants/actionTypes';

export default (current = [], action) => {
  switch (action.type) {
    case GET_MEALS:
      return current;
    case ADD_MEAL:
      return [...current, action.payload];
    case REMOVE_MEAL:
      return current.filter((curr) => curr._id !== action.payload);
    default:
      return current;
  }
};
