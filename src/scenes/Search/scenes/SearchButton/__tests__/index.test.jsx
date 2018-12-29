import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../../../services/createStore';
import SearchButton, { testHelper } from '..';

import renderer from 'react-test-renderer';

describe('scenes/SearchButton', () => {
	it('should create snapshot', () => {
		const tree = renderer.create(
			<Provider store={store}>
				<SearchButton />
			</Provider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should trigger search', () => {
		const triggerSearch = jest.fn();
		const searchButton = Object.create(testHelper.SearchButton.prototype);

		searchButton.props = { triggerSearch };
		searchButton.handleClick();

		expect(triggerSearch).toHaveBeenCalled();
	});
});
