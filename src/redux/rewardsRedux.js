// selectors
export const getAllRewards = state => state.rewards;

// subreducer
const rewardsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default rewardsReducer;