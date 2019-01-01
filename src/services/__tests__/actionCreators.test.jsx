import {
	UPDATE_SEARCH_EXPRESSION,
	UPDATE_SEARCH_BY,
	UPDATE_SORT_BY,
	CLEAR_OFFSET,
	FETCH_MOVIES,
	FETCH_MOVIE_BY_ID,
	SHOW_SEARCH,
	SEARCH_BY
} from '../actionTypes';
import {
	updateSearchExpression,
	updateSearchBy,
	updateSortBy,
	clearOffset,
	fetchMovies,
	fetchMovieById,
	showSearch
} from '../actionCreators';

describe('services/actionCreators', () => {
	it('should create search expression action', () => {
		const searchExpression = 'search expression';
		const result = updateSearchExpression(searchExpression);
		expect(result).toEqual({
			type: UPDATE_SEARCH_EXPRESSION,
			payload: {
				searchExpression
			}
		});
	});

	it('should create search by action', () => {
		const searchBy = 'search by';
		const result = updateSearchBy(searchBy);
		expect(result).toEqual({
			type: UPDATE_SEARCH_BY,
			payload: {
				searchBy
			}
		});
	});

	it('should create sort by action', () => {
		const sortBy = 'search by';
		const result = updateSortBy(sortBy);
		expect(result).toEqual({
			type: UPDATE_SORT_BY,
			payload: {
				sortBy
			}
		});
	});

	it('should create clear offset action', () => {
		const result = clearOffset();
		expect(result).toEqual({
			type: CLEAR_OFFSET
		});
	});

	describe('fetch movies action', () => {
		const getStateMock = function(paraMock) {
			const baseMock = {
				search: {
					searchExpression: 'search expression',
					searchBy: SEARCH_BY.TITLE
				},
				sort: {
					sortBy: 'title'
				},
				movies: {
					limit: 12,
					offset: 24
				}
			};
			return Object.assign({}, baseMock, paraMock);
		};
		let fetchMoviesAsync;
		let fetch;
		let movies;

		beforeEach(() => {
			fetchMoviesAsync = fetchMovies();
			fetch = window.fetch;
			window.fetch = jest.fn(() => {
				return Promise.resolve({
					ok: true,
					json: jest.fn(() => Promise.resolve(movies))
				});
			});
		});

		afterEach(() => {
			window.fetch = fetch;
		});

		it('should create fetch movies async function', () => {
			expect(fetchMoviesAsync).toBeInstanceOf(Function);
		});

		it('should alert that search by genres is not implemented', () => {
			const dispatch = jest.fn();
			const getState = jest.fn(getStateMock.bind({}, {
				search: { searchBy: SEARCH_BY.GENRE }
			}));
			const alert = window.alert;
			window.alert = jest.fn();
			fetchMoviesAsync(dispatch, getState);
			expect(window.alert).toHaveBeenCalled();
			expect(window.fetch).not.toHaveBeenCalled();
			expect(dispatch).not.toHaveBeenCalled();
			window.alert = alert;
		});

		it('should throw error', () => {
			const dispatch = jest.fn();
			const getState = jest.fn(getStateMock);
			window.fetch = jest.fn(() => {
				return {
					then: func => {
						func({
							ok: false
						});
					}
				};
			});
			expect(() => { fetchMoviesAsync(dispatch, getState); }).toThrow();
		});

		it('should fetch for movies', done => {
			const dispatch = jest.fn(action => {
				expect(action).toEqual({
					type: FETCH_MOVIES,
					payload: {
						movies
					}
				});
				done();
			});
			const getState = jest.fn(getStateMock);
			movies = [{}];
			fetchMoviesAsync(dispatch, getState);
		});
	});

	describe('fetch movie by id action', () => {
		let fetchMovieByIdAsync;
		let fetch;
		let movie;

		beforeEach(() => {
			fetchMovieByIdAsync = fetchMovieById();
			fetch = window.fetch;
			window.fetch = jest.fn(() => {
				return Promise.resolve({
					ok: true,
					json: jest.fn(() => Promise.resolve(movie))
				});
			});
		});

		afterEach(() => {
			window.fetch = fetch;
		});

		it('should create fetch movies async function', () => {
			expect(fetchMovieByIdAsync).toBeInstanceOf(Function);
		});

		it('should throw error', () => {
			const dispatch = jest.fn();
			window.fetch = jest.fn(() => {
				return {
					then: func => {
						func({
							ok: false
						});
					}
				};
			});
			expect(() => { fetchMovieByIdAsync(dispatch); }).toThrow();
		});

		it('should fetch for a movie by id', done => {
			const dispatch = jest.fn(action => {
				expect(action).toEqual({
					type: FETCH_MOVIE_BY_ID,
					payload: {
						movie
					}
				});
				done();
			});
			movie = {};
			fetchMovieByIdAsync(dispatch);
		});
	});

	it('should create show search action', () => {
		const result = showSearch();
		expect(result).toEqual({
			type: SHOW_SEARCH
		});
	});
});