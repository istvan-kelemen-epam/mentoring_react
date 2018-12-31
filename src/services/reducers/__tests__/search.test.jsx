import { UPDATE_SEARCH_EXPRESSION, UPDATE_SEARCH_BY, SEARCH_BY } from '../../actionTypes';
import search from '../search';

describe('services/reducers/search', () => {
	it('should return initial search state', () => {
		const searchState = search(undefined, {});
		expect(searchState).toEqual({
			searchExpression: '',
			searchBy: SEARCH_BY.TITLE
		});
	});

	it('should update search expression', () => {
		const searchExpression = 'search expression';
		const action = {
			type: UPDATE_SEARCH_EXPRESSION,
			payload: {
				searchExpression
			}
		};
		const searchState = search({}, action);
		expect(searchState).toEqual({
			searchExpression
		});
	});

	it('should update search by', () => {
		const searchBy = SEARCH_BY.GENRE;
		const action = {
			type: UPDATE_SEARCH_BY,
			payload: {
				searchBy
			}
		};
		const searchState = search({}, action);
		expect(searchState).toEqual({
			searchBy
		});
	});
});