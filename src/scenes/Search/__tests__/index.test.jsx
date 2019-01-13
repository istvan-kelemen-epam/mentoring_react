import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from '../../../services/createStore';
import Search, { testHelper } from '..';

import renderer from 'react-test-renderer';

describe('scenes/Search', () => {
	it('should create snapshot', () => {
		const tree = renderer.create(
			<Provider store={store}>
				<Router>
					<Search />
				</Router>
			</Provider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should update search expression', () => {
		const searchExpression = 'search expression';
		const updateSearchExpression = jest.fn();
		const search = Object.create(testHelper.Search.prototype);

		search.props = { updateSearchExpression };
		search.handleInputChange({ currentTarget: { value: searchExpression } });

		expect(updateSearchExpression).toHaveBeenCalledWith(searchExpression);
	});
});
