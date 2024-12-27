import { useState } from "react";
import MovieSearch from "./components/MovieSearch"

const App: React.FC = () => {

  const [movieTitle, setMovieTitle] = useState("");

  return (
    <MovieSearch movieTitle={movieTitle} setMovieTitle={setMovieTitle}/>
  )
}

export default App