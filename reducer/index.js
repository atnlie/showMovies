import  { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import detailMoviesReducer from './detailMovieReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    detailMovies: detailMoviesReducer
});

export default rootReducer;