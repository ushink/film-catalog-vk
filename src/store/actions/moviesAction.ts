import { AppDispatch } from "..";
import axios from "../../axios";
import { setMovies } from "../slices/moviesSlice";
import { IMovies, ServerResponse } from "../../models/models";

export const fetchMovies = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const apiKey = "70cdc113b6758159b28ba196b4aa0fac";
      const response = await axios.get<ServerResponse<IMovies>>(
        `trending/movie/week?api_key=${apiKey}&page=1`
      );
      console.log(response.data.results);

      dispatch(setMovies(response.data.results));
      
    } catch (e) {
      console.log(e);
    }
  };
};
