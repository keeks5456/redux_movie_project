import axios from "axios";
const API = process.env.REACT_APP_API_KEY;

export const getMoviesBySearch = async (search) => {
  try {
    const result = await axios.get(
      `https://www.omdbapi.com/?s=${search}&apikey=${API}`
    );
    console.log(result.data.Search);
    return result.data.Search;
  } catch (error) {
    console.log(error);
  }
};

export const toggleTheme = (boolean) => {
  return {
    type: "THEME",
    payload: boolean,
  };
};

//Movies data

export const getMovies = (data) => {
  return {
    type: "GET_MOVIES",
    payload: data,
  };
};

export const getSearch = (e) => {
  return {
    type: "SEARCH",
    payload: e,
  };
};

export const getMovieDetail = (data) => {
  return {
    type: "MOVIE_DETAIL",
    payload:data
  }
};
