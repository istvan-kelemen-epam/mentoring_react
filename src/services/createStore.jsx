import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { saveAppState, saveSearchState, saveSortState, saveMoviesState } from './storeUtils';

export const store = createStore(rootReducer, applyMiddleware(thunk));

window.addEventListener('unload', () => {
	const state = store.getState();
	saveAppState(state.app);
	saveSearchState(state.search);
	saveSortState(state.sort);
	saveMoviesState(state.movies);
});
