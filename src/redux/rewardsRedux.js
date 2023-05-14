// selectors
export const getAllRewards = state => state.rewards;

// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators

// subreducer
const rewardsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default rewardsReducer;