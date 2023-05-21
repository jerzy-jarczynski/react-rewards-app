// selectors
export const getPassword = state => state.password;

// subreducer
const passwordReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default passwordReducer;