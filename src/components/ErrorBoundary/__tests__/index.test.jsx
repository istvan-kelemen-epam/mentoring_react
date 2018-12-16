//import React from 'react';
import { ErrorBoundary } from '../index.jsx';
import renderer from 'react-test-renderer';

describe('components/ErrorBoundary', () => {
	let errorBoundary;

	beforeEach(() => {
		errorBoundary = new ErrorBoundary();
	});

	describe('.componentDidCatch', () => {
		it('should update state', () => {
			const error = 'error';
			const errorInfo = 'errorInfo';
			errorBoundary.setState = jest.fn();
			errorBoundary.componentDidCatch(error, errorInfo);
			expect(errorBoundary.setState).toHaveBeenCalledWith({
				error: error,
				errorInfo: errorInfo
			});
		});
	});

	describe('.render', () => {
		it('should return children', () => {
			errorBoundary.state.errorInfo = null;
			errorBoundary.props = {
				children: [{}]
			};
			const result = errorBoundary.render();
			expect(result).toEqual(errorBoundary.props.children);
		});

		it('should return error', () => {
			errorBoundary.state.errorInfo = 'errorInfo';
			const result = errorBoundary.render();
			const snapshot = renderer.create(result);
			expect(snapshot).toMatchSnapshot();
		});
	});
});