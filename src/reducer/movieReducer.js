// const initialState = {
//   addMovies: [],
// };

const movieReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return action.payload
    default:
      return state;
  }
};

export default movieReducer;
