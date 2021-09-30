const initialState = {
  addMovies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        addMovies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
