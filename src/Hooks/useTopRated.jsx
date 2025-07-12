import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_Options } from '../Utils/Constants';
import {addTopRated } from '../Utils/MoviesSlice';

const useTopRated = () => {
    const dispatch = useDispatch();
    async function getTopRated() {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_Options)
      const json = await data.json();
      dispatch(addTopRated(json.results))
     }
  useEffect(()=>{
    getTopRated();
  },[])}

export default useTopRated
