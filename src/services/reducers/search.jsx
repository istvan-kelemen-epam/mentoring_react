import { UPDATE_SEARCH_EXPRESSION, UPDATE_SEARCH_BY, SEARCH_BY } from '../actionTypes';

const initialState = Object.assign({
	searchExpression: '',
	searchBy: SEARCH_BY.TITLE
});

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
	default:
		return state;
	}
};