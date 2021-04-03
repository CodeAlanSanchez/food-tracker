import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import authReducers from '../reducers/authReducers';
import mealReducers from '../reducers/mealReducers';
import timeReducers from '../reducers/timeReducers';

const reducers = combineReducers({ meals: mealReducers, time: timeReducers, auth: authReducers });

export default createStore(reducers, compose(applyMiddleware(thunk)));
