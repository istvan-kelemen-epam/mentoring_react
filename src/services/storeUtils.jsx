export const LOCALSTORAGE_SEARCH_STATE_KEY = 'localstorage-search-state';

export const saveSearchState = searchState => {
	const stringifiedSearchState = JSON.stringify(searchState);
	localStorage.setItem(LOCALSTORAGE_SEARCH_STATE_KEY, stringifiedSearchState);
};

export const pickSearchState = () => {
	const stringifiedSearchState = localStorage.getItem(LOCALSTORAGE_SEARCH_STATE_KEY);
	const parsedSearchState = JSON.parse(stringifiedSearchState);
	return parsedSearchState;
};
