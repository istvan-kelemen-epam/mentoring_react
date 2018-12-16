import { SearchBy } from '../index.jsx';
import { App } from '../../../../App';

describe('scenes/Search/scenes/SearchBy', () => {
	let searchByInstance;

	beforeEach(() => {
		searchByInstance = Object.create(SearchBy.prototype);
	});

	describe('.handleButtonClick', () => {
		let updateSearchBy;

		beforeEach(() => {
			updateSearchBy = jest.fn();
		});

		it('should search by title', () => {
			const searchBy = App.SEARCH_BY.TITLE;
			searchByInstance.handleButtonClick(updateSearchBy, searchBy);
			expect(updateSearchBy).toHaveBeenCalledWith(searchBy);
		});

		it('should search by genre', () => {
			const searchBy = App.SEARCH_BY.GENRE;
			searchByInstance.handleButtonClick(updateSearchBy, searchBy);
			expect(updateSearchBy).toHaveBeenCalledWith(searchBy);
		});
	});
});