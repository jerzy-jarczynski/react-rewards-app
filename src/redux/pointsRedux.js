import { API_URL } from "../config";

// selectors
export const getAllPoints = state => state.points;

// actions
const createActionName = actionName => `app/points/${actionName}`;
const UPDATE_POINTS = createActionName('UPDATE_POINTS');
const CHANGE_POINTS = createActionName('CHANGE_POINTS');

// action creators
export const updatePoints = payload => ({ type: UPDATE_POINTS, payload });
export const changeTable = payload => ({ type: CHANGE_POINTS, payload });

// server requests
export const fetchPoints = () => {
  return (dispatch) => {
    fetch(`${API_URL}/points/1`)
      .then(res => res.json())
      .then(points => dispatch(updatePoints(points.value)));
  };
};
export const changePointsRequest = (newPoints) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPoints),
    };

    fetch(`${API_URL}/points/${newPoints.id}`, options)
      .then(response => {
        if (response.ok) {
          console.log('Points changed successfully');
        } else {
          console.log('Failed to change points');
        }
      })
      .then(() => dispatch(updatePoints(newPoints)))
      .then(() => dispatch(fetchPoints()))
      .catch(error => {
        console.log('Error occured while changing Points', error);
      });
  }
};

// subreducer
const pointsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_POINTS:
      return action.payload;
    case CHANGE_POINTS:
      return statePart.map(point => {
        if (point.id === action.payload.id) {
          return { ...point, ...action.payload };
        }
        return point;
      });
    default:
      return statePart;
  };
};

export default pointsReducer;