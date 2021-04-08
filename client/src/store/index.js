import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import authReducers from '../reducers/authReducers';
import mealReducers from '../reducers/mealReducers';
import timeReducers from '../reducers/timeReducers';
import logReducers from '../reducers/logReducers';
import currentLogReducers from '../reducers/currentLogReducers';

const reducers = combineReducers({
  meals: mealReducers,
  time: timeReducers,
  auth: authReducers,
  logs: logReducers,
  currentLog: currentLogReducers,
});

export default createStore(reducers, compose(applyMiddleware(thunk)));
