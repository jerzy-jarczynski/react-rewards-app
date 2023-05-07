import { legacy_createStore as createStore } from 'redux';
import initialState from './initialState';

// selectors
export const getAllRewards = state => state.rewards;

const reducer = (state, action) => {
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;