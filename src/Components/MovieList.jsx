import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) return null;

     console.log(movies)

    return (
        <div className='px-6 bg-black'>
            <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies.map((movie)=>(
                        <MovieCard key={movie.id} poster = {movie.poster_path}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
