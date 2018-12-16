import React from 'react';
import { List } from '../index.jsx';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('scenes/Result/scenes/List', () => {
	describe('.render', () => {
		it('should create dom', () => {
			let data = [{
				id: 119556,
				title: 'Kill Bill',
				year: 2003,
				genre: 'Action & Adventure'
			}];
			const dom = render(<List data={data} />);
			const title = dom.find('.result-list__item-title');

			expect(title[0].children[0].data).toBe(data[0].title);
			expect(dom).toMatchSnapshot();
		});
	});
});