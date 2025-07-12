import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_Options } from '../Utils/Constants';
import { addPopularMovies } from '../Utils/MoviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    async function getPopularMovies() {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Options)
      const json = await data.json();
      dispatch(addPopularMovies(json.results))
     }
  useEffect(()=>{
    getPopularMovies();
  },[])}

export default usePopularMovies
