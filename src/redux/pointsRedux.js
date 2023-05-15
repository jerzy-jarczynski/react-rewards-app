// selectors
export const getAllPoints = state => state.points;

// actions
const createActionName = actionName => `app/points/${actionName}`;
const UPDATE_POINTS = createActionName('UPDATE_POINTS');

// action creators
export const updatePoints = payload => ({ type: UPDATE_POINTS, payload });

// subreducer
const pointsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_POINTS:
      console.log('redux', action.payload);
      return action.payload;
    default:
      return statePart;
  };
};

export default pointsReducer;