import { SEARCH_BY } from '../actionTypes';
import { LOCALSTORAGE_SEARCH_STATE_KEY } from '../storeUtils';
import { store } from '../createStore';

describe('services/createStore', () => {
	it('sould create store', () => {
		expect(store).toBeInstanceOf(Object);
		expect(store.getState).toBeInstanceOf(Function);
	});

	it('should save state on unload event', () => {
		const getStoredState = () => {
			const rawStoreState = localStorage.getItem(LOCALSTORAGE_SEARCH_STATE_KEY);
			const storeState = JSON.parse(rawStoreState);
			return storeState;
		};
		expect(getStoredState()).toBeFalsy();
		window.dispatchEvent(new Event('unload'));
		expect(getStoredState()).toEqual({
			searchExpression: '',
			searchBy: SEARCH_BY.TITLE
		});
	});
});