import {
  SET_TIME, GET_TIME,
} from '../constants/actionTypes';

export default (time = 'Breakfast', action) => {
  switch (action.type) {
    default:
      return time;
    case SET_TIME:
      console.log(action.payload);
      return action.payload;
    case GET_TIME:
      return time;
  }
};
