export const LOCALSTORAGE_APP_STATE_KEY = 'netflixroulette-app-state';
export const LOCALSTORAGE_SEARCH_STATE_KEY = 'netflixroulette-search-state';
export const LOCALSTORAGE_SORT_STATE_KEY = 'netflixroulette-sort-state';
export const LOCALSTORAGE_MOVIES_STATE_KEY = 'netflixroulette-movies-state';

const saveState = (key, state) => {
	const stringifiedState = JSON.stringify(state);
	localStorage.setItem(key, stringifiedState);
};

const pickState = key => {
	let parsedState;
	try {
		const stringifiedState = localStorage.getItem(key);
		parsedState = JSON.parse(stringifiedState);
	} catch(e) {
		parsedState = {};
		console.err(e);
	}
	return parsedState;
};

export const saveAppState = searchState => {
	saveState(LOCALSTORAGE_APP_STATE_KEY, searchState);
};

export const pickAppState = () => {
	return pickState(LOCALSTORAGE_APP_STATE_KEY);
};

export const saveSearchState = searchState => {
	saveState(LOCALSTORAGE_SEARCH_STATE_KEY, searchState);
};

export const pickSearchState = () => {
	return pickState(LOCALSTORAGE_SEARCH_STATE_KEY);
};

export const saveSortState = sortState => {
	saveState(LOCALSTORAGE_SORT_STATE_KEY, sortState);
};

export const pickSortState = () => {
	return pickState(LOCALSTORAGE_SORT_STATE_KEY);
};

export const saveMoviesState = sortState => {
	saveState(LOCALSTORAGE_MOVIES_STATE_KEY, sortState);
};

export const pickMoviesState = () => {
	return pickState(LOCALSTORAGE_MOVIES_STATE_KEY);
};

export const testHelper = { saveState, pickState };
