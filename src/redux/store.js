import { legacy_createStore as createStore, combineReducers } from 'redux';
import initialState from './initialState';
import rewardsReducer from './rewardsRedux';
import pointsReducer from './pointsRedux';
import passwordReducer from './passwordRedux';

const subreducers = {
  rewards: rewardsReducer,
  points: pointsReducer,
  password: passwordReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;