import * as constants from '../action/constants'

const initialState = {
    data: [],
    error: null
};

const moviesReducer = (state = initialState, action) => {
	switch (action.type){
		case constants.LOAD_MOVIES_SUCCESS :{
            //console.error(action.payload)
			return {
                ...state,
                data: action.payload
            };
		}
		default:return state
	}
};

export default moviesReducer;