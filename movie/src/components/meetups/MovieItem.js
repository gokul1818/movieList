import Card from "../ui/Card";
import classes from "./MovieItem.module.css";
import { useDispatch } from "react-redux";
import {
  addMovieToWatchList,
  addMovieToWatched,
  removeMovieFromList,
  selectAllWatchListMovies,
  removeMovieFromWatched,
  showDetails,
} from "@/store/MoviesSlice";
import { useSelector } from "react-redux";

function MovieItem(props) {
  const dispatch = useDispatch();
  const WatchListMovie = useSelector(selectAllWatchListMovies);
  let storedMovies = WatchListMovie.find((item) => item.id === props.id);
  const WatchListDisabled = storedMovies ? true : false;
  const { buttonShow, title, id } = props;
  console.log(props.onMovieSelect, "id");

  return (
    <div
    
    >
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props?.image} alt={props?.title} />
          </div>
          <div className={classes.content}>
            <h3>{props?.title}</h3>
          </div>

          <div className={classes.actions}>
            <p>Year:{props?.year}</p>

            {buttonShow === true ? (<>
                <button
                disabled={WatchListDisabled}
                className={classes.button}
                onClick={() => {
                  console.log(id, "iddd");
                  props.onMovieSelect(props.imdbID);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  // console.log(props.onMovieSelect(title),'jiii')
                }}
              >
                ViewMore!
              </button>
              <button
                disabled={WatchListDisabled}
                className={classes.button}
                onClick={() => dispatch(addMovieToWatchList(props))}
              >
                Watchlist
              </button>
              </>
            ) : buttonShow === false ? (
              <div className={classes.type}>
                <div className={classes.eye}>
                  <button
                    className={classes.button}
                    onClick={() => dispatch(addMovieToWatched(props))}
                  >
                    Watched
                  </button>
                </div>

                <div className={classes.close}>
                  <button
                    className={classes.button}
                    onClick={() => dispatch(removeMovieFromList(props.id))}
                  >
                    {/* {console.log(props.id, "sss")} */}
                    remove
                  </button>
                </div>
              </div>
            ) : (
              <div className={classes.close}>
                <button
                  className={classes.button}
                  onClick={() => dispatch(removeMovieFromWatched(props.id))}
                >
                  {/* {console.log(props.id, "ddd")} */}
                  remove
                </button>
              </div>
            )}
          </div>
        </Card>
      </li>
    </div>
  );
}

export default MovieItem;
