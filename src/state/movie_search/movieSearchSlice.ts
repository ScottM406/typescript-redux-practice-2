import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface MovieData {
  Title: string;
  Poster: string;
  Year: string;
  Actors: String;
}

interface MovieSearchSlice {
  movieData: MovieData;
}

const initialState: MovieSearchSlice = {
  movieData: {
    Title: "",
    Poster: "",
    Year: "",
    Actors: ""
  }
}

const movieSearchSlice = createSlice({
  name: "movieSearch",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieData.fulfilled, (state, action) => {
      state.movieData = action.payload;
    })
  }
});

export const getMovieData = createAsyncThunk(
  "movieSearch/getMovieData",
  async (movieTitle: string) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=dd97e12e&t=${movieTitle}`)
    const returnedMovieData = response.json();
    return returnedMovieData;
  }
)

export default movieSearchSlice.reducer