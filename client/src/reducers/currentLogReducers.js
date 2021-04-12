import {
  ADD_BREAKFAST, ADD_LUNCH, ADD_DINNER,
  ADD_SNACK,
  REMOVE_BREAKFAST, REMOVE_LUNCH,
  REMOVE_DINNER, REMOVE_SNACK, CREATE_LOG,
} from '../constants/actionTypes';

export default (current = {
  breakfast: [], lunch: [], dinner: [], snacks: [],
}, action) => {
  switch (action.type) {
    case CREATE_LOG:
      return action.payload;
    case ADD_BREAKFAST:
      return { ...current, breakfast: [...current?.breakfast, action.payload] };
    case ADD_LUNCH:
      return { ...current, lunch: [...current?.lunch, action.payload] };
    case ADD_DINNER:
      return { ...current, dinner: [...current?.dinner, action.payload] };
    case ADD_SNACK:
      return { ...current, snacks: [...current?.snacks, action.payload] };
    case REMOVE_BREAKFAST:
      return {
        ...current,
        breakfast: current.breakfast.filter((curr) => curr._id !== action.payload),
      };
    case REMOVE_LUNCH:
      return {
        ...current,
        lunch: current.lunch.filter((curr) => curr._id !== action.payload),
      };
    case REMOVE_DINNER:
      return {
        ...current,
        dinner: current.dinner.filter((curr) => curr._id !== action.payload),
      };
    case REMOVE_SNACK:
      return {
        ...current,
        snacks: current.snacks.filter((curr) => curr._id !== action.payload),
      };
    default:
      return current;
  }
};
