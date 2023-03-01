import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./MoviesSlice";
const store = configureStore({
  reducer: { WatchList:MoviesSlice.reducer},
});
export default store;
