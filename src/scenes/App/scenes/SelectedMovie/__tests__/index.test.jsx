import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../../../services/createStore';
import SelectedMovie, { testHelper } from '..';

import renderer from 'react-test-renderer';

describe('scenes/App/scenes/SelectedMovie', () => {
	const original = {};
	let scrollIntoView;

	beforeEach(() => {
		scrollIntoView = jest.fn();
		document.querySelector = jest.fn(() => {
			return { scrollIntoView };
		});
		original.querySelector = document.querySelector;
		original.getState = store.getState;
	});

	afterEach(() => {
		document.querySelector = original.querySelector;
		store.getState = original.getState;
	});

	it('should create snapshot', () => {
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
			}
		}));
		const tree = renderer.create(
			<Provider store={store}>
				<SelectedMovie />
			</Provider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	describe('scroll into view', () => {
		let selectedMovie;

		beforeEach(() => {
			selectedMovie = Object.create(testHelper.SelectedMovie.prototype);
		});

		it('should scroll into view', () => {
			selectedMovie.componentDidMountOrUpdate();
			expect(document.querySelector).toHaveBeenCalledWith('.main-header-show-search');
			expect(scrollIntoView).toHaveBeenCalled();
		});

		describe('.componentDidMountOrUpdate should be called by', () => {
			beforeEach(() => {
				selectedMovie.componentDidMountOrUpdate = jest.fn();
			});

			it('.componentDidMount', () => {
				selectedMovie.componentDidMount();
				expect(selectedMovie.componentDidMountOrUpdate).toHaveBeenCalled();
			});

			it('.componentDidUpdate', () => {
				selectedMovie.componentDidUpdate();
				expect(selectedMovie.componentDidMountOrUpdate).toHaveBeenCalled();
			});
		});
	});
});
