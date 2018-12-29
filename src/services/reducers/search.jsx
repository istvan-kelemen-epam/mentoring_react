import { UPDATE_SEARCH_EXPRESSION, UPDATE_SEARCH_BY, TRIGGER_SEARCH, SEARCH_BY } from '../actionTypes';
import { pickSearchState } from '../storeUtils';

const pickedSearchState = pickSearchState();

const initialState = Object.assign({
	searchExpression: '',
	searchBy: SEARCH_BY.TITLE
}, pickedSearchState);

export default (state = initialState, action) => {
	switch (action.type) {
	case UPDATE_SEARCH_EXPRESSION: {
		let newState = Object.assign({}, state);
		newState.searchExpression = action.payload.searchExpression;
		return newState;
	}
	case UPDATE_SEARCH_BY: {
		let newState = Object.assign({}, state);
		newState.searchBy = action.payload.searchBy;
		return newState;
	}
	case TRIGGER_SEARCH: {
		let newState = Object.assign({}, state); // Only the address changed
		return newState;
	}
	default:
		return state;
	}
};