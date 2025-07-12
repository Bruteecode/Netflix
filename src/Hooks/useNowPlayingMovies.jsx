import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_Options } from '../Utils/Constants';
import { addNowPlayingMovies } from '../Utils/MoviesSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    async function NowPlayingAPI() {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
     }
  useEffect(()=>{
    NowPlayingAPI();
  },[])}

export default useNowPlayingMovies
