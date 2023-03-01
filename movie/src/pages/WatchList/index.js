import { selectAllWatchListMovies } from "@/store/MoviesSlice";
import { useSelector } from "react-redux";
import classes from "../../components/meetups/MovieList.module.css";
import WatchList from "@/components/meetups/WatchList";
function NewMeetupPage() {
  // const WatchListItem = useSelector((state) => state.WatchList.WatchListitem);
  const WatchListItem = useSelector(selectAllWatchListMovies);
  return (
    <div className={classes.WatchList}>
   
      {WatchListItem?.length == 0 ? (
        <h1>your WatchList is Empty !</h1>
      ) : (
       <>
          <h1>Your WatchList</h1>
          <div className={classes.list}>
            <WatchList />
          
        </div>
        </>
      )}
     
    
    </div>
  );
}

export default NewMeetupPage;
