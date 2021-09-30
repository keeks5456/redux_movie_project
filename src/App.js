import { useSelector, useDispatch } from "react-redux";
//actions here
import { toggleTheme } from "./action";
//componenets here
import Search from "./Component/Search";
//styling
import { Container } from "./Styled-Component/styling";

function App() {
  const dispatch = useDispatch();
  //want dark theme set everywhere, keep the state in app
  const theme = useSelector((state) => state.theme);
  const search = useSelector((state) => state.search)
  const movies = useSelector((state) => state.movies)

  
  return (
    <Container theme={theme}>
    <h1>Dark Theme in Progress</h1>
    <button onClick={() => dispatch(toggleTheme(!theme))}>
    theme change
    </button>
    <Search search={search} />
      
    </Container>
  );
}

export default App;
