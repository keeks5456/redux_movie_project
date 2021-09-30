import { useSelector, useDispatch } from "react-redux";
//actions here
import { toggleTheme, getDetailsbyId, getMovieDetail } from "./action";
//componenets here
import Search from "./Component/Search";
import SearchMovieCard from "./Component/SearchMovieCard";
//styling
import { Container } from "./Styled-Component/styling";

function App() {
  const dispatch = useDispatch();
  //want dark theme set everywhere, keep the state in app
  const theme = useSelector((state) => state.theme);
  const search = useSelector((state) => state.search)
  const movie = useSelector((state) => state.movie)
  const detail = useSelector((state) => state.movieDetail)

  console.log(movie)
  return (
    <Container theme={theme}>
    {console.log(search)}
    <h1>Dark Theme in Progress</h1>
    <button onClick={() => dispatch(toggleTheme(!theme))}>
    theme change
    </button>
    <Search search={search} />
    <SearchMovieCard 
    movie={movie}
    />
    </Container>
  );
}

export default App;
