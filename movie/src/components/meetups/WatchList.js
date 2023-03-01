import { useSelector } from "react-redux";
import { selectAllWatchListMovies } from "../../store/MoviesSlice";
import MovieItem from "./MovieItem";
// const WatchListItem = useSelector(selectAllWatchListMovies);
function WatchList() {
  // const WatchListItem = useSelector((state) => state.WatchList.WatchListItem);
const WatchListItem = useSelector(selectAllWatchListMovies);
  return (
    <>
      {WatchListItem.map((movies) => (
        <>
          <li>
            <MovieItem
              buttonShow={false}
              id={movies.id}
              image={movies.image}
              title={movies.title}
              year={movies.year}
            />
          </li>
        </>
      ))}
    </>

    // <h1>hii.dsadsads.</h1>
  );
}
export default WatchList;
