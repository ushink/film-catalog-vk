import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },

  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
