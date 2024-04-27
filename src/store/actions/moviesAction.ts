import { AppDispatch } from "..";
import axios from "../../axios";
import { setFilm, setMovies } from "../slices/moviesSlice";
import { IMovieDetail, IMovies, ServerResponse } from "../../models/models";

const apiKey = "70cdc113b6758159b28ba196b4aa0fac";

export const fetchMovies = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<ServerResponse<IMovies[]>>(
        `trending/movie/week?api_key=${apiKey}&page=1`
      );

      dispatch(setMovies(response.data.results));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchFilm = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<IMovieDetail>(
        `movie/${id}?api_key=${apiKey}`
      );
      dispatch(setFilm(response.data));

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
};
