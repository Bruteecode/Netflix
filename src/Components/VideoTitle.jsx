import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoVolumeMuteOutline } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";
import { toggleMuteTrailer } from '../Utils/MoviesSlice';

const VideoTitle = ({ title, overview }) => {
  const isMute = useSelector((state) => state.movies.trailer_mute)
  const dispatch = useDispatch()

  return (
    <div className="w-full absolute top-[35%] md:top-0 aspect-video px-4 md:px-[6%] bg-gradient-to-r from-black text-white flex justify-between items-center">
      <div className="flex flex-col gap-4 md:gap-6 -translate-y-4 md:-translate-y-5">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold -mt-2 md:-mt-4">
          {title}
        </h1>
        <p className="hidden md:inline-block text-base md:text-xl lg:text-2xl w-full md:w-1/3 -mt-1 md:-mt-2">
          {overview}
        </p>
        <div className="flex gap-3 md:gap-4 -mt-2 md:-mt-4 flex-wrap">
          <button className="bg-white text-black border border-black py-2 px-4 sm:py-3 sm:px-6 rounded-xl font-bold text-base sm:text-lg md:text-xl hover:opacity-90 transition flex justify-center items-center">
            Play Now
          </button>
          <button className="hidden md:flex bg-gray-600 hover:bg-gray-500 text-white py-2 px-6 rounded-xl font-bold text-base md:text-xl transition items-center justify-center">
            More Info
          </button>
        </div>
      </div>

      {/* Mute / Unmute Toggle */}
      <div
        className="text-white text-3xl md:text-4xl p-2 border border-white rounded-full cursor-pointer hover:bg-white hover:text-black transition"
        onClick={() => dispatch(toggleMuteTrailer())}
      >
        {isMute ? <GoUnmute /> : <IoVolumeMuteOutline />}
      </div>
    </div>
  )
}

export default VideoTitle
