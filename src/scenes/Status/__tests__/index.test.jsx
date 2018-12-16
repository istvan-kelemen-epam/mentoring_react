import { Status } from '../index.jsx';
import renderer from 'react-test-renderer';

describe('scenes/Status', () => {
	let status;

	beforeEach(() => {
		status = Object.create(Status.prototype);
	});

	describe('.render', () => {
		it('should create empty result', () => {
			status.props = {};
			const rendered = status.render();
			const snapshot = renderer.create(rendered);
			expect(snapshot).toMatchSnapshot();
		});

		it('should create empty result', () => {
			status.props = {data: [{}, {}]};
			const rendered = status.render();
			const snapshot = renderer.create(rendered);
			expect(snapshot).toMatchSnapshot();
		});
	});
});