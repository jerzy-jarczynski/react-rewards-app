import { API_URL } from "../config";

// selectors
export const getPassword = state => state.password;

// actions
const createActionName = actionName => `app/password/${actionName}`;
const UPDATE_PASSWORD = createActionName('UPDATE_PASSWORD');

// action creators
export const updatePassword = payload => ({ type: UPDATE_PASSWORD, payload });

// server requests
export const fetchPassword = () => {
  return (dispatch) => {
    fetch(`${API_URL}/password/1`)
      .then(res => res.json())
      .then(password => dispatch(updatePassword(password.value)));
  };
};

// subreducer
const passwordReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return action.payload;
    default:
      return statePart;
  };
};

export default passwordReducer;
