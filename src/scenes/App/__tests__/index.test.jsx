import React from 'react';
import { App } from '../index.js';
import renderer from 'react-test-renderer';

describe('scenes/App', () => {
	it('should create snapshot', () => {
		const tree = renderer.create(<App />);
		expect(tree).toMatchSnapshot();
	});

	describe('.updateSearchExpression', () => {
		let app;

		beforeEach(() => {
			app = new App();
			app.setState = jest.fn();
		});

		it('should not update state', () => {
			const searchExpression = '';

			app.updateSearchExpression(searchExpression);

			expect(app.setState).toHaveBeenCalledWith({
				searchExpression: searchExpression
			});
		});

		it('should update state', () => {
			const searchExpression = 'search expression';

			app.updateSearchExpression(searchExpression);

			expect(app.setState).toHaveBeenCalledWith({
				searchExpression: searchExpression
			});
		});

		it('should search by title', () => {
			const searchExpression = 'search expression';

			app.state = {
				searchBy: App.SEARCH_BY.TITLE
			};
			app.updateSearchExpression(searchExpression);

			expect(app.setState).toHaveBeenCalledWith({
				searchExpression: searchExpression
			});
		});

		it('should search by genre', () => {
			const searchExpression = 'search expression';

			app.state = {
				searchBy: App.SEARCH_BY.GENRE
			};
			app.updateSearchExpression(searchExpression);

			expect(app.setState).toHaveBeenCalledWith({
				searchExpression: searchExpression
			});
		});
	});

	describe('.updateSearchBy', () => {
		it('should update state', () => {
			const app = new App();
			const searchBy = App.SEARCH_BY.TITLE;

			app.setState = jest.fn();

			app.updateSearchBy(searchBy);

			expect(app.setState).toHaveBeenCalledWith({
				searchBy: searchBy
			});
		});
	});
});