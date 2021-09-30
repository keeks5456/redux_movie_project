const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "SEARCH":
      return action.payload.target.value;
    default:
      return state;
  }
};
export default searchReducer;