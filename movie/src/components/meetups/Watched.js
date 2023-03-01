import { useSelector } from "react-redux";
import { selectAllWatchedMovies } from "../../store/MoviesSlice";
import MovieItem from "./MovieItem";
function WatchList() {
  // const WatchedItem = useSelector((state) => state.WatchList.WatchedItem);
  const WatchedItem = useSelector(selectAllWatchedMovies);

  return (
    <>
      {WatchedItem.map((movies) => (
        <>
          <li>
            <MovieItem
              id={movies.id}
              image={movies.image}
              title={movies.title}
              year={movies.year}
            />
          </li>
        </>
      ))}
    </>
  );
}
export default WatchList;
