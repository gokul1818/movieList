import Watched from "../../components/meetups/Watched";
import classes from "../../components/meetups/MovieList.module.css";
import { useSelector } from "react-redux";
import { selectAllWatchedMovies } from "@/store/MoviesSlice";
function NewMeetupPage() {
  const WatchListItem = useSelector(selectAllWatchedMovies);
  return(
  <div className={classes.WatchList}>
    {WatchListItem?.length == 0 ? (
      <h1>Watched Movies is Empty !</h1>
    ) : (
      <>
        <h1>Your Watched movies</h1>
        <div className={classes.list}>
          <Watched />
        </div>
      </>
    )}
  </div>)
}

export default NewMeetupPage;
