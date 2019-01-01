import {
	UPDATE_SEARCH_EXPRESSION,
	UPDATE_SEARCH_BY,
	UPDATE_SORT_BY,
	CLEAR_OFFSET,
	FETCH_MOVIES,
	FETCH_MOVIE_BY_ID,
	SHOW_SEARCH,
	SEARCH_BY
} from './actionTypes';

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

export const updateSortBy = sortBy => ({
	type: UPDATE_SORT_BY,
	payload: {
		sortBy
	}
});

export const clearOffset = () => ({
	type: CLEAR_OFFSET
});

export const fetchMovies = () => (dispatch, getState) => {
	const state = getState();
	const searchBy = state.search.searchBy;
	const params = [];

	params.push('limit=' + state.movies.limit);
	params.push('offset=' + state.movies.offset);
	params.push('sortBy=' + state.sort.sortBy);
	params.push('sortOrder=asc');

	switch (searchBy) {
	case SEARCH_BY.TITLE: {
		params.push('searchBy=title');
		params.push('search=' + encodeURIComponent(state.search.searchExpression));
		break;
	}
	case SEARCH_BY.GENRE: {
		const message = 'Search by Genres is not implemented, ' +
			'because it is not documented how to call with string array ' +
			'and none of these suggestions worked correctly: https://medium.com/raml-api/arrays-in-query-params-33189628fa68';
		alert(message);
		return;
	}
	}

	fetch('http://react-cdp-api.herokuapp.com/movies/?' + params.join('&')).then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Network error');
	}).then(movies => {
		dispatch({
			type: FETCH_MOVIES,
			payload: {
				movies
			}
		});
	});
};

export const fetchMovieById = id => dispatch => {
	fetch('http://react-cdp-api.herokuapp.com/movies/' + id).then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Network error');
	}).then(movie => {
		dispatch({
			type: FETCH_MOVIE_BY_ID,
			payload: {
				movie
			}
		});
	});
};

export const showSearch = () => ({
	type: SHOW_SEARCH
});
