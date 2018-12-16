import { Result } from '../index.jsx';
import renderer from 'react-test-renderer';

describe('scenes/Result', () => {
	let instance;

	beforeEach(() => {
		instance = Object.create(Result.prototype);
	});

	describe('.render', () => {
		it('should create empty result', () => {
			instance.props = {};
			const rendered = instance.render();
			const snapshot = renderer.create(rendered);
			expect(snapshot).toMatchSnapshot();
		});

		it('should create "not found" result', () => {
			instance.props = {data: []};
			const rendered = instance.render();
			const snapshot = renderer.create(rendered);
			expect(snapshot).toMatchSnapshot();
		});

		it('should create list result', () => {
			instance.props = {data: [{
				id: 119556,
				title: 'Kill Bill',
				year: 2003,
				genre: 'Action & Adventure'
			}]};
			const rendered = instance.render();
			const snapshot = renderer.create(rendered);
			expect(snapshot).toMatchSnapshot();
		});
	});
});