import { useState,useEffect } from "react";
import Axios from "axios";
import classes from './movieinfo.module.css'

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;
console.log(movieInfo,'hhii')
  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=2e8a25a4`
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <div className={classes.details}>
      {movieInfo ? (
        <>
         <img src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <div className={classes.information}>
            <div className={classes.Title}> 
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </div>
            <div className={classes.data}>
              <div>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </div>
            <div>
              Year: <span>{movieInfo?.Year}</span>
            </div>
            <div>
              Language: <span>{movieInfo?.Language}</span>
            </div>
            <div>
              Rated: <span>{movieInfo?.Rated}</span>
            </div>
            <div>
              Released: <span>{movieInfo?.Released}</span>
            </div>
            <div>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </div>
            <div>
              Genre: <span>{movieInfo?.Genre}</span>
            </div>
            <div>
              Director: <span>{movieInfo?.Director}</span>
            </div>
            <div>
              Actors: <span>{movieInfo?.Actors}</span>
            </div>
            <div>
              Plot: <span>{movieInfo?.Plot}</span>
            </div>
            </div>
          </div>
          <div className={classes.close} onClick={() => props.onMovieSelect()}>close</div>
        </>
      ) : (
        <h1 className={classes.loading}>Loading....</h1>
      )}
    </div>
  );
};
export default MovieInfoComponent;
