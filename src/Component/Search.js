import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch, getMoviesBySearch, getMovies } from "../action";
import { Container, Form, Button } from "../Styled-Component/styling";
import SearchMovieCard from "./SearchMovieCard";

const Search = () => {
  const theme = useSelector((state) => state.theme);
  const search = useSelector((state) => state.search);
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const handleSubmit = (e, s) => {
    e.preventDefault();
    getMoviesBySearch(s)
      .then((data) => dispatch(getMovies(data)))
      .catch((error) => console.log(error));
  };
  return (
    <>
        <Form theme={theme} onSubmit={(e) => dispatch(handleSubmit(e, search))}>
          <input
            type="text"
            theme={theme}
            name="search"
            placeholder="search"
            onChange={(e) => dispatch(getSearch(e))}
          ></input>
          <Button
            theme={theme}
            type="submit"
            onClick={(e) => handleSubmit(e, search)}
          >
            Search
          </Button>
        </Form>
        <Container flexFlow theme={theme} height="100%">
        {movie?.map((m) => (
          <SearchMovieCard key={m.id} movie={m} />
        ))}
      </Container>
    </>
  );
};

export default Search;
