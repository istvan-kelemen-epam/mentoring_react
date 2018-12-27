import React from 'react';
import { App } from '..';
import renderer from 'react-test-renderer';

describe('scenes/App', () => {
	it('should create snapshot', () => {
		const tree = renderer.create(<App />);
		expect(tree).toMatchSnapshot();
	});
});
