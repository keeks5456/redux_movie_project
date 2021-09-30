const movieDetailReducer =(state = null, action) =>{
switch(action.type){
  case "MOVIE_DETAIL":
    return action.payload;
  default: 
  return state
}
}

export default movieDetailReducer