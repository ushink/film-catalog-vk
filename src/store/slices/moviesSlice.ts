import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovies } from "../../models/models";

interface MoviesState {
  movies: IMovies[];
}

const initialState: MoviesState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,

  reducers: {
    setMovies: (state, action: PayloadAction<IMovies[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
