import { FETCH_MOVIE_BY_ID, SHOW_SEARCH } from '../../actionTypes';
import app from '../app';

describe('services/reducers/app', () => {
	it('should return initial app state', () => {
		const appState = app(undefined, {});
		expect(appState).toEqual({
			selectedMovie: null
		});
	});

	it('should fetch for movie', () => {
		const selectedMovie = {};
		const action = {
			type: FETCH_MOVIE_BY_ID,
			payload: {
				movie: selectedMovie
			}
		};
		const appState = app({}, action);
		expect(appState).toEqual({
			selectedMovie
		});
	});

	it('should show search', () => {
		// Let selectedMovie = {} before clearing it in the next block
		{
			const action = {};
			const appState = app({ selectedMovie: {} }, action);
			expect(appState).toEqual({
				selectedMovie: {}
			});
		}
		// selectedMovie == {} before the following test
		{
			const action = {
				type: SHOW_SEARCH
			};
			const appState = app({}, action);
			expect(appState).toEqual({
				selectedMovie: null
			});
		}
	});
});