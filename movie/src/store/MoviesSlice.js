import { createSlice } from "@reduxjs/toolkit";
const MoviesSlice = createSlice({
  name: "WatchList",
  initialState: {
    WatchListItem: [],
    WatchedItem: [],
    // MovieDetails: [],
  },
  reducers: {
    addMovieToWatchList(state, action) {
      state.WatchListItem.push(action.payload);
    },
    addMovieToWatched(state, action) {
      state.WatchListItem = state.WatchListItem.filter(
        (movies) => movies.id !== action.payload.id
      );
      state.WatchedItem.push(action.payload);
    },
    removeMovieFromList(state, action) {
      state.WatchListItem = state.WatchListItem.filter(
        (movie) => movie.id !== action.payload
      );
    },
    removeMovieFromWatched(state, action) {
      state.WatchedItem = state.WatchedItem.filter(
        (movie) => movie.id !== action.payload
      );
    },
    // showDetails(state, action) {
    //   state.MovieDetails.push(action.payload);
      // state.MovieDetails = state.MovieDetails.filter(
      //   (movies) => movies.id === action.payload
      // );
    // },

    // state.WatchListItem = state.WatchedItem.filter(
    //   (movie) => movie.id !== action.payload
    // );
  },
});
export const selectAllWatchListMovies = (state) =>
  state.WatchList.WatchListItem;
export const selectAllWatchedMovies = (state) => state.WatchList.WatchedItem;
// export const showMovieDetails =(state)=>  state.WatchList.MovieDetails;
export const {
  removeMovieFromList,
  addMovieToWatchList,
  addMovieToWatched,
  removeMovieFromWatched,
  showDetails,
} = MoviesSlice.actions;
export default MoviesSlice;
