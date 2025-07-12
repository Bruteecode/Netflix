import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/Constants";
import { addTrailerVideo } from "../Utils/MoviesSlice"

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_Options);
    const json = await data.json();
 
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[1] : json.results[0];
    console.log(trailer);
     dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
