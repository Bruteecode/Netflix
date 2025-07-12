import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_Options } from '../Utils/Constants';
import {addUpcoming } from '../Utils/MoviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    async function getUpcoming() {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options)
      const json = await data.json();
      dispatch(addUpcoming(json.results))
     }
  useEffect(()=>{
    getUpcoming();
  },[])}

export default useUpcomingMovies
