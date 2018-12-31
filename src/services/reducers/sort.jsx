import { UPDATE_SORT_BY } from '../actionTypes';
import { pickSortState } from '../storeUtils';

const pickedSortState = pickSortState();

const initialState = Object.assign({
	sortBy: 'release_date'
}, pickedSortState);

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