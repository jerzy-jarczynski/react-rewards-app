// redux
import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux';
// thunk
import thunk from 'redux-thunk';
// initialState
import initialState from './initialState';
// combine reducers
import rewardsReducer from './rewardsRedux';
import pointsReducer from './pointsRedux';
import passwordReducer from './passwordRedux';
import navlinksReducer from './navlinksRedux';
import timelineReducer from './timelineRedux';

const subreducers = {
  rewards: rewardsReducer,
  points: pointsReducer,
  password: passwordReducer,
  navlinks: navlinksReducer,
  timeline: timelineReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,

  compose (
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;