import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDisptach } from "../state/store";
import { getMovieData } from "../state/movie_search/movieSearchSlice";

 interface MovieSearchProps {
    movieTitle: string;
    setMovieTitle: React.Dispatch<React.SetStateAction<string>>;
  }

  const MovieSearch: React.FC<MovieSearchProps> = ({ movieTitle, setMovieTitle }) => {

    const handleMovieInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMovieTitle(event.target.value);
    }
    
    const searchedMovieData = useSelector((state: RootState) => state.movieSearch.movieData)
    const dispatch = useDispatch<AppDisptach>();

    const handleMovieSearchSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      dispatch(getMovieData(movieTitle))
    }

    return (
      <>
        <div>
          <h1>{searchedMovieData.Title}</h1>
          <img src={searchedMovieData.Poster} />
          <h2>{searchedMovieData.Year}</h2>
          <h2>{searchedMovieData.Actors}</h2>
        </div>
        <form onSubmit={handleMovieSearchSubmit}>
          <input
          placeholder="enter movie title"
          required
          onChange={handleMovieInputChange}
          />
          <button type="submit">Find Movie Details</button>
        </form>
      </>
    )
  };


export default MovieSearch;