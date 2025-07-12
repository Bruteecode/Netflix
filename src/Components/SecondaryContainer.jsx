import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    console.log("Secondary rendered")
    return (
        <div className='bg-black'>
            <div className='mt-0 md:-mt-52 sm:pl-2 md:pl-12 relative z-20'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"TopRated"} movies={movies.toprated} />
                <MovieList title={"Trending"} movies={movies.popularMovies} />
                <MovieList title={"Upcoming"} movies={movies.upcoming} />
                <MovieList title={"Popular TV Series"} movies={movies.PopularSeries} />
                <MovieList title={"TopRated TV Series"} movies={movies.TopRatedSeries} />


            </div>

            {/* 
                MovieList-Popular
                MovieCard*n;
                MovieList-Now Playing
                MovieList-TopRated
                MovieList-Trending
                MovieList-Upcoming

            */}

        </div>
    )
}

export default SecondaryContainer
