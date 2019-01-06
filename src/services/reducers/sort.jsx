import { UPDATE_SORT_BY } from '../actionTypes';

const initialState = Object.assign({
	sortBy: 'release_date'
});

export default (state = initialState, action) => {
	switch (action.type) {
	case UPDATE_SORT_BY: {
		let newState = Object.assign({}, state);
		newState.sortBy = action.payload.sortBy;
		return newState;
	}
	default:
		return state;
	}
};