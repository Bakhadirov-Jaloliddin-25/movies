import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedMovies: [],
};

const savedMoviesSlice = createSlice({
  name: "savedMovies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const movie = action.payload;
      if (!state.savedMovies.some((item) => item.id === movie.id)) {
        state.savedMovies.push(movie);
      }
    },
    removeMovie: (state, action) => {
      state.savedMovies = state.savedMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = savedMoviesSlice.actions;
export default savedMoviesSlice.reducer;
