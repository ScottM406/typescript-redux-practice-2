import { configureStore } from "@reduxjs/toolkit";
import movieSearchReducer from './movie_search/movieSearchSlice'

export const store = configureStore({
  reducer: {
    movieSearch: movieSearchReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;