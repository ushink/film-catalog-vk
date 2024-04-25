import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
});
export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
