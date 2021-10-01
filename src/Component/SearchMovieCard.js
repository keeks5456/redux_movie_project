import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDetailsbyId, getMovieDetail } from '../action';
import { Container, Card, Headers , Image} from '../Styled-Component/styling';

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
     <Image src={movie.Poster}></Image>
     <p>{movie.Year}</p>
     </Card>
   
  )
}

export default SearchMovieCard
