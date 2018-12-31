let actionId = 0;

export const UPDATE_SEARCH_EXPRESSION = ++actionId;
export const UPDATE_SEARCH_BY = ++actionId;
export const CLEAR_OFFSET = ++actionId;
export const FETCH_MOVIES = ++actionId;

export const UPDATE_SORT_BY = ++actionId;

export const SEARCH_BY = {
	TITLE: 'TITLE',
	GENRE: 'GENRE',
};