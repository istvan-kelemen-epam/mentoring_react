import { FetchData } from '../index.js';

describe('services/FetchData', () => {
	let fetchData;

	beforeEach(() => {
		fetchData = new FetchData();
	});

	describe('.searchByTitle', () => {
		it('should return a set of results', () => {
			const expectedResult = [
				{
					id: 119556,
					title: 'Kill Bill',
					year: 2003,
					genre: 'Action & Adventure'
				}, {
					id: 345234,
					title: 'Kill Bill 2',
					year: 2004,
					genre: 'Action & Adventure'
				}, {
					id: 897434,
					title: 'Pulp fiction',
					year: 1994,
					genre: 'Oscar-winning movies'
				}, {
					id: 123498,
					title: 'Jackie Brown',
					year: 1997,
					genre: 'Dramas'
				}, {
					id: 748234,
					title: 'Reservoir dogs',
					year: 1992,
					genre: 'Independent movies'
				}, {
					id: 483295,
					title: 'Four rooms',
					year: 1995,
					genre: 'Comedies'
				}, {
					id: 273902,
					title: 'Django unchained',
					year: 2012,
					genre: 'Dramas'
				}
			];
			const result = fetchData.searchByTitle('search expression');
			expect(result).toEqual(expectedResult);
		});
	});

	describe('.searchByGenre', () => {
		it('should return empty result set', () => {
			const expectedResult = [];
			const result = fetchData.searchByGenre('search expression');
			expect(result).toEqual(expectedResult);
		});
	});
});