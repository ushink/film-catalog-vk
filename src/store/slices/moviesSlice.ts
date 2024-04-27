import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovieDetail, IMovies } from "../../models/models";

interface MoviesState {
  movies: IMovies[];
  film: IMovieDetail | null;
}

const initialState: MoviesState = {
  movies: [],
  film: null
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,

  reducers: {
    setMovies: (state, action: PayloadAction<IMovies[]>) => {
      state.movies = action.payload;
    },

    setFilm: (state, action: PayloadAction<IMovieDetail>) => {
      state.film = action.payload;
    },
  },
});

export const { setMovies, setFilm } = moviesSlice.actions;

export default moviesSlice.reducer;
