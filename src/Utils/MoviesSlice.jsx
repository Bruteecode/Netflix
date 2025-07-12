import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        toprated: null,
        upcoming: null,
        trailerVideo: null,
        PopularSeries: null,
        TopRatedSeries: null,
        trailer_mute: false,

    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRated: (state, action) => {
            state.toprated = action.payload;
        },
        addPopularSeries: (state, action) => {
            state.PopularSeries = action.payload;
        },
        addTopRatedSeries: (state, action) => {
            state.TopRatedSeries = action.payload;
        },
        addUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        toggleMuteTrailer: (state) => {
            state.trailer_mute = !state.trailer_mute;
        },

    },
});

export const { addNowPlayingMovies, addPopularMovies, addTrailerVideo, addTopRated, addUpcoming, addPopularSeries, addTopRatedSeries, toggleMuteTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;
