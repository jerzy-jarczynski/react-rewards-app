// selectors
export const getAllRewards = state => state.rewards;
export const getRewardById = ({rewards}, rewardId) => rewards.find(reward => reward.id === rewardId);

// subreducer
const rewardsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default rewardsReducer;