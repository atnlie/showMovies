import * as constants from '../action/constants'

const initialState = {
    data: [],
    error: null
};

const detailMoviesReducer = (state = initialState, action) => {
    switch (action.type){
        case constants.LOAD_DETAILMOVIES_SUCCESS:{
            //console.error('reducer')
            //console.error(action.payload)
            return {
                ...state,
                data: action.payload
            };
        }
        default:return state
    }
};

export default detailMoviesReducer;