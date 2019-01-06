import { FETCH_MOVIE_BY_ID, SHOW_SEARCH } from '../actionTypes';

const initialState = Object.assign({
	selectedMovie: null
});

export default (state = initialState, action) => {
	switch (action.type) {
	case FETCH_MOVIE_BY_ID: {
		let newState = Object.assign({}, state);
		newState.selectedMovie = action.payload.movie;
		newState.selectedMovie.genre = action.payload.genre;
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