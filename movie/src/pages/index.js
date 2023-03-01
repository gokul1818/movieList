import Search from "@/components/meetups/searchmovie";
import { Fragment, useState, useEffect } from "react";
import MovieList from "../components/meetups/MovieList";
import MovieInfoComponent from "@/components/meetups/movieInfo";

// const DUMMY_MEETUPS = [
//  ]
// console.log(onMovieSelect,'hii')
function HomePage(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  
  const [searchValue, setSearchValue] = useState("");
  console.log(onMovieSelect,'gggg',selectedMovie)
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2e8a25a4`;
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  console.log(movies);
  return (
    <Fragment>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}

      <MovieList movie={movies} onMovieSelect={onMovieSelect} />
    </Fragment>
  );
}
// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: movies
//     },
//     revalidate: 1
//   };
// }

export default HomePage;
