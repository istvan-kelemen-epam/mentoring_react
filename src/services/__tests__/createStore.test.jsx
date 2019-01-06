import { store } from '../createStore';

describe('services/createStore', () => {
	it('sould create store', () => {
		expect(store).toBeInstanceOf(Object);
		expect(store.getState).toBeInstanceOf(Function);
	});
});