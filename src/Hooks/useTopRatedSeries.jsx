import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_Options } from '../Utils/Constants';
import { addTopRatedSeries } from '../Utils/MoviesSlice';

const useTopRatedSeries = () => {
    const dispatch = useDispatch();
    async function getTopRatedSeries() {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', API_Options)
        const json = await data.json();
        dispatch(addTopRatedSeries(json.results))
    }
    useEffect(() => {
        getTopRatedSeries();
    }, [])
}

export default useTopRatedSeries
