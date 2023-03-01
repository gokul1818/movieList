import MovieItem from "./MovieItem";
import classes from "./MovieList.module.css";


function MovieList(props) {
  // console.log(props.movie[0]?.imdbID,'jjjjjjjj')
  return (
    <>
      <ul className={classes.list}>
        {props.movie.map((movies, index) => (

          <MovieItem
        onMovieSelect={props.onMovieSelect}
imdbID={movies.imdbID}
            buttonShow={true}
            key={index}
            id={movies.imdbID}
            image={movies.Poster}
            title={movies.Title}
            year={movies.Year}
          />
        ))}
  {/* {console.log(props.onMovieSelect,'ID')} */}
        
      </ul>
    </>
  );
}

export default MovieList;
