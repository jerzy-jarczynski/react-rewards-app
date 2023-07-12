// selectors
export const getTimeline = state => state.timeline;

// subreducer
const timelineReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default timelineReducer;