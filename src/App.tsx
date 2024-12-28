import { useState } from "react";
import MovieSearch from "./components/MovieSearch"
import Advice from "./components/Advice";

const App: React.FC = () => {

  const [movieTitle, setMovieTitle] = useState("");

  return (
    <>
    <MovieSearch movieTitle={movieTitle} setMovieTitle={setMovieTitle}/>
    <Advice />
    </>
  )
}

export default App