import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDetailsbyId, getMovieDetail } from '../action';
import { Container, Card, Headers } from '../Styled-Component/styling';

const SearchMovieCard = ({movie}) => {
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()
 
  // const fetchMovieDetails = (id) => {
  //   getDetailsbyId(id)
  //     .then((data) => dispatch(getMovieDetail(data)))
  //     .catch((err) => console.log(err));
  // };
 
  return (
    <Card theme={theme}>
     <Headers>{movie.Title}</Headers>
     <img src={movie.Poster}></img>
     <p>{movie.Year}</p>
     </Card>
   
  )
}

export default SearchMovieCard
