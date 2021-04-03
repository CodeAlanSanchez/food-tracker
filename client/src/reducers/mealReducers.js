import {
  CREATE_MEAL, UPDATE_MEAL, DELETE_MEAL, FETCH_MEALS, FETCH_MEAL,
} from '../constants/actionTypes';

export default (meals = [], action) => {
  switch (action.type) {
    default:
      return meals;
    case FETCH_MEALS:
    case FETCH_MEAL:
      return action.payload;
    case CREATE_MEAL:
      return [...meals, action.payload];
    case UPDATE_MEAL:
      return meals.map((meal) => (meal._id === action.payload._id ? action.payload : meal));
    case DELETE_MEAL:
      return meals.filter((meal) => meal._id !== action.payload._id);
  }
};
