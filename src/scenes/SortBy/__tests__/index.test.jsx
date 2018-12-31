import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../services/createStore';
import SortBy, { testHelper } from '..';

import renderer from 'react-test-renderer';

describe('scenes/Sort', () => {
	it('should create snapshot', () => {
		const tree = renderer.create(
			<Provider store={store}>
				<SortBy />
			</Provider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should update "sort by" state', () => {
		const updateSortBy = jest.fn();
		const clearOffset = jest.fn();
		const fetchMovies = jest.fn();
		const sortBy = Object.create(testHelper.SortBy.prototype);

		sortBy.props = { updateSortBy, clearOffset, fetchMovies };

		const sortByValue = 'sort_field';
		sortBy.handleSelectChange({ currentTarget: { value: sortByValue }});
		expect(updateSortBy).toHaveBeenCalledWith(sortByValue);
		expect(clearOffset).toHaveBeenCalled();
		expect(fetchMovies).toHaveBeenCalled();
	});
});
