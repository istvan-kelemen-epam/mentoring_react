import { testHelper } from '../storeUtils';

const LOCALSTORAGE_TEST_STATE_KEY = 'netflixroulette-test-state';

describe('services/storeUtils', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('should save and pick state', () => {
		const testState = { prop: 'prop value' };
		const getTestState = () => {
			const rawTestState = localStorage.getItem(LOCALSTORAGE_TEST_STATE_KEY);
			const testState = JSON.parse(rawTestState);
			return testState;
		};
		expect(getTestState()).toBeFalsy();
		testHelper.saveState(LOCALSTORAGE_TEST_STATE_KEY, testState);
		expect(getTestState(LOCALSTORAGE_TEST_STATE_KEY)).toEqual(testState);
		expect(testHelper.pickState(LOCALSTORAGE_TEST_STATE_KEY)).toEqual(testState);
	});

	it('should return empty object instead throwing error', () => {
		const err = console.err;
		console.err = jest.fn();
		localStorage.setItem(LOCALSTORAGE_TEST_STATE_KEY, 'undefined');
		expect(testHelper.pickState(LOCALSTORAGE_TEST_STATE_KEY)).toEqual({});
		expect(console.err).toHaveBeenCalled();
		console.err = err;
	});
});