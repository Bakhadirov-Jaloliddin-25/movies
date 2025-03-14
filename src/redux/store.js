import { configureStore } from "@reduxjs/toolkit";
import savedMoviesReducer from "./slices/savedMoviesSlice";

export const store = configureStore({
  reducer: {
    savedMovies: savedMoviesReducer,
  },
});

export default store;
