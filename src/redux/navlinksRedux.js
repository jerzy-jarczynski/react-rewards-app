import { API_URL } from "../config";

// selectors
export const getAllNavlinks = state => state.navlinks;

// actions
const createActionName = actionName => `app/navlinks/${actionName}`;
const UPDATE_NAVLINKS = createActionName('UPDATE_NAVLINKS');

// action creators
export const updateNavLinks = payload => ({ type: UPDATE_NAVLINKS, payload });
// requests
export const fetchNavLinks = () => {
  return (dispatch) => {
    fetch(`${API_URL}/rewards`)
      .then(res => res.json())
      .then(navLinks => dispatch(updateNavLinks(navLinks)));
  }
};

// subreducer
const navlinksReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_NAVLINKS:
      return [ ...action.payload];
    default:
      return statePart;
  };
};

export default navlinksReducer;