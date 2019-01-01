import { FETCH_MOVIE_BY_ID, SHOW_SEARCH } from '../actionTypes';
import { pickAppState } from '../storeUtils';

const pickedAppState = pickAppState();

const initialState = Object.assign({
	selectedMovie: null
}, pickedAppState);

export default (state = initialState, action) => {
	switch (action.type) {
	case FETCH_MOVIE_BY_ID: {
		let newState = Object.assign({}, state);
		newState.selectedMovie = action.payload.movie;
		return newState;
	}
	case SHOW_SEARCH: {
		let newState = Object.assign({}, state);
		newState.selectedMovie = null;
		return newState;
	}
	default:
		return state;
	}
};