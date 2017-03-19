/*
action movies
 */
import * as constants from './constants'

export const loadMovies = (dispatch) => {
    return (dispatch) => {
        fetch('http://localhost:3000/movies')
        .then(response => {
                //console.error(response)
                return response.json()
            })
        .then(movies =>  {
            //console.error(movies)
            dispatch({
                type: constants.LOAD_MOVIES_SUCCESS,
                payload: movies
            })
        })
        .catch(error =>{ 
            console.error(error)
            dispatch({
                type: constants.LOAD_MOVIES_FAILED, payload: error
            })
        })
    }
};

export const detailMovies = (dispatch) => {
    //console.error('Cari Movies {id}');
    return (dispatch) => {
        //console.error('Cari Movies id ' + id);
        fetch('http://localhost:3000/movies/1')// + id)
            .then(response => {
                //console.error(response.json())
                return response.json()
            })
            .then(detailMovies =>  {
                //console.error('action creator')
                //console.error(detailMovies)
                dispatch({
                    type: constants.LOAD_DETAILMOVIES_SUCCESS,
                    payload: detailMovies
                })
            })
            .catch(error =>{
                console.error(error)
                dispatch({
                    type: constants.LOAD_DETAILMOVIES_FAILED, payload: error
                })
            })
    }
};