import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../services/createStore';
import { App } from '..';

import renderer from 'react-test-renderer';

describe('scenes/App', () => {
	it('should create snapshot', () => {
		const tree = renderer.create(
			<Provider store={store}>
				<App />
			</Provider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
