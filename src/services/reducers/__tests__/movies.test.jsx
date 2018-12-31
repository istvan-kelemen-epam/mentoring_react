import { CLEAR_OFFSET, FETCH_MOVIES } from '../../actionTypes';
import movies from '../movies';

describe('services/reducers/movies', () => {
	it('should return initial movies state', () => {
		const moviesState = movies(undefined, {});
		expect(moviesState).toEqual({
			limit: 12,
			offset: 0,
			total: 0
		});
	});

	it('should clear (make zero) the offset property', () => {
		let moviesState = movies({ offset: 12 }, {});
		expect(moviesState.offset).toBe(12);
		moviesState = movies(moviesState, { type: CLEAR_OFFSET });
		expect(moviesState.offset).toBe(0);
	});

	it('should fetch movies', () => {
		const action = {
			type: FETCH_MOVIES,
			payload: {
				movies: {}
			}
		};
		const movieState = movies({}, action);
		expect(movieState).toBe(action.payload.movies);
	});
});