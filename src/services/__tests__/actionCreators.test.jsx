import { UPDATE_SEARCH_EXPRESSION, UPDATE_SEARCH_BY, TRIGGER_SEARCH } from '../actionTypes';
import { updateSearchExpression, updateSearchBy, triggerSearch } from '../actionCreators';

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

	it('should create trigger search action', () => {
		const result = triggerSearch();
		expect(result).toEqual({
			type: TRIGGER_SEARCH
		});
	});
});