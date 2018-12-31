import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../services/createStore';
import Result, { testHelper } from '..';

import renderer from 'react-test-renderer';

describe('scenes/Result', () => {
	it('should create snapshot', () => {
		const tree = renderer.create(
			<Provider store={store}>
				<Result />
			</Provider>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	describe('.render', () => {
		let result;

		beforeEach(() => {
			result = Object.create(testHelper.Result.prototype);
		});

		it('should render empty section in case when there were not any search yet', () => {
			result.props = { movies: {} };
			const tree = result.render();
			expect(tree).toMatchSnapshot();
			expect(tree.props.children).toBeNull();
		});

		it('should render "not found" section in case when there are no matching items', () => {
			result.props = { movies: { data: [] } };
			const tree = result.render();
			expect(tree).toMatchSnapshot();
			expect(tree.props.children.props.className).toBe('result__not-found');
		});

		it('should render movie list section in case when at least one item found', () => {
			result.props = { movies: { data: [{}] } };
			const tree = result.render();
			expect(tree).toMatchSnapshot();
			expect(tree.props.children.type.WrappedComponent).toBeInstanceOf(Function);
		});
	});
});
