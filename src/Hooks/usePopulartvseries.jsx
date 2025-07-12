import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_Options } from '../Utils/Constants';
import { addPopularSeries } from '../Utils/MoviesSlice';

const usePopulartvseries = () => {

    const dispatch = useDispatch();
    async function getPopulartvseries() {
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?page=1', API_Options)
        const json = await data.json();
        dispatch(addPopularSeries(json.results))
    }
    useEffect(() => {
        getPopulartvseries();
    }, [])
}

export default usePopulartvseries
