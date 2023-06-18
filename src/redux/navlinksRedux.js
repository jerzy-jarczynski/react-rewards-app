// selectors
export const getAllNavlinks = state => state.navlinks;

// subreducer
const navlinksReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default navlinksReducer;