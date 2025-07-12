import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';
const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    const isMute = useSelector(state=>state.movies.trailer_mute)
    useMovieTrailer(movieId);

    return (
        <div className='w-screen'>
      <iframe
      className="w-full  aspect-video  z[1]"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?playlist=" + trailerVideo?.key + "&autoplay=1&loop=1&mute=" + ( !isMute ? "1" : "0" ) }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>

        </div>
    )
}

export default VideoBackground
