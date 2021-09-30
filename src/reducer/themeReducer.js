
const initialState = true;

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEME":
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
