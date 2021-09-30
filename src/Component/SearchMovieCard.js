import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDetailsbyId, getMovieDetail } from '../action';

const SearchMovieCard = ({movie}) => {
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()
 
  const fetchMovieDetails = (id) => {
    getDetailsbyId(id)
      .then((data) => dispatch(getMovieDetail(data)))
      .catch((err) => console.log(err));
  };
  console.log(movie)
  return (
    <div>
      <button onClick={() => fetchMovieDetails(movie)}>movie deets</button>
    </div>
  )
}

export default SearchMovieCard
