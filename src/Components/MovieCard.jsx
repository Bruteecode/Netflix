import React from 'react';
import { IMG_CDN_URL } from '../Utils/Constants';

const MovieCard = ({ poster }) => {
  if(!poster) return null
  return (
    <div className="w-36 md:w-48 pr-4 transition-transform duration-300 transform hover:scale-105 hover:brightness-110 cursor-pointer">
      <img
        alt="Movie Poster"
        src={IMG_CDN_URL + poster}
        className="w-full h-auto rounded"
      />
    </div>
  );
};

export default MovieCard;
