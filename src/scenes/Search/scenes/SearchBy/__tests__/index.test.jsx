import React from 'react';
import { Provider } from 'react-redux';

import { SEARCH_BY } from '../../../../../services/actionTypes';
import { store } from '../../../../../services/createStore';
import SearchBy, { testHelper } from '..';

import renderer from 'react-test-renderer';

describe('scenes/SearchBy', () => {
	it('should create snapshot', () => {
		for (let searchByKey of Object.keys(SEARCH_BY)) {
			store.getState = () => ({ search: { searchBy: SEARCH_BY[searchByKey] } });
			const tree = renderer.create(
				<Provider store={store}>
					<SearchBy />
				</Provider>
			).toJSON();
			expect(tree).toMatchSnapshot();
		}
	});

	it('should update "search by" state', () => {
		const updateSearchBy = jest.fn();
		const searchBy = Object.create(testHelper.SearchBy.prototype);

		searchBy.props = { updateSearchBy };

		for (let searchByKey of Object.keys(SEARCH_BY)) {
			const searchByValue = SEARCH_BY[searchByKey];
			searchBy.handleButtonClick(searchByValue);
			expect(updateSearchBy).toHaveBeenCalledWith(searchByValue);
		}
	});
});
