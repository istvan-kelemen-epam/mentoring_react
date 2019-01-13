import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from '../../../services/createStore';
import { testHelper as selectedMovieTestHelper } from '../scenes/SelectedMovie';
import App, { testHelper } from '..';

import renderer from 'react-test-renderer';

describe('scenes/App', () => {
	const original = {};

	beforeEach(() => {
		original.getState = store.getState;
	});

	afterEach(() => {
		store.getState = original.getState;
	});

	describe('should create snapshot', () => {
		it('should do it without selected movie', () => {
			const tree = renderer.create(
				<Provider store={store}>
					<Router>
						<App />
					</Router>
				</Provider>
			).toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('should do it with selected movie', () => {
			selectedMovieTestHelper.SelectedMovie.prototype.componentDidMountOrUpdate = jest.fn();
			store.getState = jest.fn(() => ({
				app: {
					selectedMovie: {
						poster_path: 'http://poster_path',
						title: 'title',
						vote_average: 5,
						tagline: 'tagline',
						release_date: '2018-12-31',
						runtime: 100,
						overview: 'overview'
					}
				},
				movies: {
					data: []
				}
			}));
			const tree = renderer.create(
				<Provider store={store}>
					<Router>
						<App />
					</Router>
				</Provider>
			).toJSON();
			expect(tree).toMatchSnapshot();
		});
	});

	it('should show search', () => {
		const app = Object.create(testHelper.App.prototype);
		app.props = {
			history: {
				push: jest.fn()
			},
			showSearch: jest.fn()
		};
		app.handleShowSearchButtonClick();
		expect(app.props.showSearch).toHaveBeenCalled();
	});
});
