import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../../../services/createStore';
import List, { testHelper } from '..';

import renderer from 'react-test-renderer';

describe('scenes/Result/scenes/List', () => {
	const original = {};

	beforeEach(() => {
		original.getState = store.getState;
	});

	afterEach(() => {
		store.getState = original.getState;
	});

	it('should create snapshot', () => {
		store.getState = jest.fn(() => ({
			movies: {
				data: []
			}
		}));
		const tree = renderer.create(
			<Provider store={store}>
				<List />
			</Provider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should create movie items', () => {
		const list = Object.create(testHelper.List.prototype);
		list.props = {
			movies: {
				data: [{
					id: 1,
					poster_path: 'http://poster_path',
					title: 'title',
					release_date: '2018-12-31',
					genres: ['genre 1', 'genre 2']
				}]
			}
		};
		const rendered = list.render();
		expect(rendered.type).toBe('section');
		expect(rendered.props.children.type).toBe('ul');
		expect(rendered.props.children.props.children[0].type).toBe('li');
	});
});
