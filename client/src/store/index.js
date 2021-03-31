import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import mealReducers from '../reducers/mealReducers';

const reducers = combineReducers({ meals: mealReducers });

export default createStore(reducers, compose(applyMiddleware(thunk)));
