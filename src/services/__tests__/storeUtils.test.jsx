import { LOCALSTORAGE_SEARCH_STATE_KEY, saveSearchState, pickSearchState } from '../storeUtils';

describe('services/storeUtils', () => {
	it('should save and pick state', () => {
		const searchState = { prop: 'prop value' };
		const getStoredState = () => {
			const rawStoreState = localStorage.getItem(LOCALSTORAGE_SEARCH_STATE_KEY);
			const storeState = JSON.parse(rawStoreState);
			return storeState;
		};
		expect(getStoredState()).toBeFalsy();
		saveSearchState(searchState);
		expect(getStoredState()).toEqual(searchState);
		expect(pickSearchState()).toEqual(searchState);
	});
});