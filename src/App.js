import { useSelector, useDispatch } from "react-redux";
//actions here
import { toggleTheme, getDetailsbyId, getMovieDetail } from "./action";
//componenets here
import Search from "./Component/Search";
import SearchMovieCard from "./Component/SearchMovieCard";
import Nav from "./Component/Nav";
//styling
import { Container } from "./Styled-Component/styling";

function App() {
  const dispatch = useDispatch();
  //want dark theme set everywhere, keep the state in app
  const theme = useSelector((state) => state.theme);
  const search = useSelector((state) => state.search);
  const movie = useSelector((state) => state.movie);
  const detail = useSelector((state) => state.movieDetail);

  console.log(movie);
  return (
    <>
    <Nav theme={theme}/>
      <Search search={search} />

    </>
  );
}

export default App;
