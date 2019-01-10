import { CLEAR_OFFSET, CLEAR_MOVIES, FETCH_MOVIES } from '../actionTypes';

const initialState = Object.assign({
	limit: 60, // In the specification stated that no limit is needed, but for example when searching for "a", then 2027 items come
	offset: 0,
	total: 0
});

export default (state = initialState, action) => {
	switch (action.type) {
	case CLEAR_OFFSET: {
		let newState = Object.assign({}, state);
		newState.offset = 0;
		return newState;
	}
	case CLEAR_MOVIES: {
		let newState = Object.assign({}, initialState);
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