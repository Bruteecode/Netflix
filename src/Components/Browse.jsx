import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies';
import usePopulartvseries from '../Hooks/usePopulartvseries';
import useTopRated from '../Hooks/useTopRated';
import useTopRatedSeries from '../Hooks/useTopRatedSeries';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated()
  useUpcomingMovies();
  usePopulartvseries();
  useTopRatedSeries();
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {
        (showGptSearch) ? <GptSearch /> :
          <>
            <MainContainer />
            {/* <SecondaryContainer /> */}
          </>
}
      {/* {
        Main Container
          -Video Background
          -Video Title
            SecondaryContainer
              -MovieList * n
              -cards * n
        */
      }
    </div>
  )
}

export default Browse
