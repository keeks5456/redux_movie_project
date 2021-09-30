import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import searchReducer from "./searchReducer";
import movieReducer from "./movieReducer";
import movieDetailReducer from "./movieDetailReducer";

const allReducers = combineReducers({
  theme:themeReducer,
  search:searchReducer,
  movie: movieReducer,
  movieDetail: movieDetailReducer
})

export default allReducers