import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from '../../../../../services/createStore';
import SearchButton, { testHelper } from '..';

import renderer from 'react-test-renderer';

describe('scenes/SearchButton', () => {
	it('should create snapshot', () => {
		const tree = renderer.create(
			<Provider store={store}>
				<Router>
					<SearchButton />
				</Router>
			</Provider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should trigger search', () => {
		const searchExpression = 'search expression';
		const clearOffset = jest.fn();
		const fetchMovies = jest.fn();
		const searchButton = Object.create(testHelper.SearchButton.prototype);

		searchButton.props = {
			history: {
				push: jest.fn()
			},
			searchExpression,
			clearOffset,
			fetchMovies
		};
		searchButton.handleClick();

		expect(clearOffset).toHaveBeenCalled();
		expect(fetchMovies).toHaveBeenCalled();
	});

	it('should not trigger search', () => {
		const searchExpression = null;
		const clearOffset = jest.fn();
		const fetchMovies = jest.fn();
		const searchButton = Object.create(testHelper.SearchButton.prototype);

		searchButton.props = { searchExpression, clearOffset, fetchMovies };
		searchButton.handleClick();

		expect(clearOffset).not.toHaveBeenCalled();
		expect(fetchMovies).not.toHaveBeenCalled();
	});
});
