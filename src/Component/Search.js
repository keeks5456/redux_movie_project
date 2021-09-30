import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch, getMoviesBySearch, getMovies } from "../action";
import SearchMovieCard from "./SearchMovieCard";

const Search = () => {
  const theme = useSelector((state) => state.theme);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSubmit = (e, s) =>{
    e.preventDefault()
    getMoviesBySearch(s)
    .then((data) =>dispatch(getMovies(data)))
    .catch((error) => console.log(error))
  }

  return (
    <>
    <form onSubmit={(e) => dispatch(handleSubmit(e, search))}>
      <input 
      type="text"
      theme={theme}
       name="search" 
       placeholder="search" 
       onChange={(e) =>dispatch(getSearch(e))}></input>
      <button
      theme={theme}
       type="submit"
        onClick={(e) => handleSubmit(e, search)}
        >Search</button>
    </form>
    {/*search && search.map((s) =>(
      <SearchMovieCard key={s.id}/>
    ))*/}
    
</>
  );
};

export default Search;
