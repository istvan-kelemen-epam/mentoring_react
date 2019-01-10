import {
	UPDATE_SEARCH_EXPRESSION,
	UPDATE_SEARCH_BY,
	UPDATE_SORT_BY,
	CLEAR_OFFSET,
	CLEAR_MOVIES,
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

const fetchMoviesBySearchBy = (type, searchBy, searchExpression, dispatch, getState) => {
	return new Promise((resolve, reject) => {
		const state = getState();
		const params = [];

		params.push('limit=' + state.movies.limit);
		params.push('offset=' + state.movies.offset);
		params.push('sortBy=' + state.sort.sortBy);
		params.push('sortOrder=asc');
		params.push('search=' + encodeURIComponent(searchExpression));
		params.push('searchBy=' + (searchBy === SEARCH_BY.TITLE ? 'title' : 'genres'));

		fetch('http://react-cdp-api.herokuapp.com/movies/?' + params.join('&')).then(response => {
			if (response.ok) {
				return response.json();
			}
			reject();
			throw new Error('Network error');
		}).then(movies => {
			dispatch({
				type: type,
				payload: {
					movies
				}
			});
			resolve();
		});
	});
};

export const fetchMovies = () => (dispatch, getState) => {
	const state = getState();
	const searchBy = state.search.searchBy;
	const searchExpression = state.search.searchExpression;

	return fetchMoviesBySearchBy(FETCH_MOVIES, searchBy, searchExpression, dispatch, getState);
};

const fetchMoviesByGenre = (genre, dispatch, getState) => {
	const searchBy = SEARCH_BY.GENRE;
	const searchExpression = genre;

	fetchMoviesBySearchBy(FETCH_MOVIES, searchBy, searchExpression, dispatch, getState);
};

const clearMovies = () => ({
	type: CLEAR_MOVIES
});

const getFirstGenre = (genres) => genres && genres.length ? genres[0] : '';

export const fetchMovieById = id => (dispatch, getState) => {
	fetch('http://react-cdp-api.herokuapp.com/movies/' + id).then(response => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Network error');
	}).then(movie => {
		const genre = getFirstGenre(movie.genres);
		dispatch({
			type: FETCH_MOVIE_BY_ID,
			payload: {
				movie,
				genre
			}
		});
		fetchMoviesByGenre(genre, dispatch, getState);
	});
};

export const showSearch = () => dispatch => {
	dispatch(updateSearchExpression(''));
	dispatch(clearMovies());
	dispatch({
		type: SHOW_SEARCH
	});
};

export const testHelper = { getFirstGenre };