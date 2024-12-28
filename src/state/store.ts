import { configureStore } from "@reduxjs/toolkit";
import movieSearchReducer from './movie_search/movieSearchSlice'
import adviceReducer from './advice/adviceSlice'

export const store = configureStore({
  reducer: {
    movieSearch: movieSearchReducer,
    advice: adviceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;