import { API_URL } from "../config";

// selectors
export const getAllRewards = state => state.rewards;
export const getRewardById = ({rewards}, rewardId) => rewards.find(reward => reward.id === rewardId);

// actions
const createActionName = actionName => `app/rewards/${actionName}`;
const UPDATE_REWARDS = createActionName('UPDATE_REWARDS');

// action creators
export const updateRewards = payload => ({ type: UPDATE_REWARDS, payload });
// requests
export const fetchRewards = () => {
  return (dispatch) => {
    fetch(`${API_URL}/rewards`)
      .then(res => res.json())
      .then(rewards => dispatch(updateRewards(rewards)));
  }
};

// subreducer
const rewardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_REWARDS:
      return [ ...action.payload];
    default:
      return statePart;
  };
};

export default rewardsReducer;