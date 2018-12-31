import { UPDATE_SORT_BY } from '../../actionTypes';
import sort from '../sort';

describe('services/reducers/sort', () => {
	it('should return initial sort state', () => {
		const sortState = sort(undefined, {});
		expect(sortState).toEqual({
			sortBy: 'release_date'
		});
	});

	it('should update sort by', () => {
		const sortBy = 'title';
		const action = {
			type: UPDATE_SORT_BY,
			payload: {
				sortBy
			}
		};
		const sortState = sort({}, action);
		expect(sortState).toEqual({
			sortBy
		});
	});
});