import { UPDATE_SEARCH_EXPRESSION, UPDATE_SEARCH_BY, TRIGGER_SEARCH } from './actionTypes';

export const updateSearchExpression = searchExpression => ({
	type: UPDATE_SEARCH_EXPRESSION,
	payload: {
		searchExpression
	}
});

export const updateSearchBy = searchBy => ({
	type: UPDATE_SEARCH_BY,
	payload: {
		searchBy
	}
});

export const triggerSearch = () => ({
	type: TRIGGER_SEARCH
});
