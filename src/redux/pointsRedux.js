import { API_URL } from "../config";

// selectors
export const getAllPoints = state => state.points;

// actions
const createActionName = actionName => `app/points/${actionName}`;
const UPDATE_POINTS = createActionName('UPDATE_POINTS');

// action creators
export const updatePoints = payload => ({ type: UPDATE_POINTS, payload });

// server requests
export const fetchPoints = () => {
  return (dispatch) => {
    fetch(`${API_URL}/points`)
      .then(res => res.json())
      .then(points => dispatch(updatePoints(points.value)));
  };
};

// subreducer
const pointsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_POINTS:
      return action.payload;
    default:
      return statePart;
  };
};

export default pointsReducer;