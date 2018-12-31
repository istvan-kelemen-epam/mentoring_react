import { CLEAR_OFFSET, FETCH_MOVIES } from '../actionTypes';
import { pickMoviesState } from '../storeUtils';

const pickedMoviesState = pickMoviesState();

const initialState = Object.assign({
	limit: 12,
	offset: 0,
	total: 0
}, pickedMoviesState);

export default (state = initialState, action) => {
	switch (action.type) {
	case CLEAR_OFFSET: {
		let newState = Object.assign({}, state);
		newState.offset = 0;
		return newState;
	}
	case FETCH_MOVIES: {
		let newState = action.payload.movies;
		return newState;
	}
	default:
		return state;
	}
};