import './styles.css';
import * as React from 'react';
import { AppConsumer } from '../../../App';

export class SearchBy extends React.Component {
	handleButtonClick(updateSearchBy, searchBy) {
		updateSearchBy(searchBy);
	}

	render() {
		return (
			<section className="search-by">
				<header>Search by</header>
				<AppConsumer>
					{({ updateSearchBy, searchBy, SEARCH_BY }) => (
						<main>
							<button className={searchBy === SEARCH_BY.TITLE ? 'selected' : ''} onClick={() => this.handleButtonClick(updateSearchBy, SEARCH_BY.TITLE)}>Title</button>
							<button className={searchBy === SEARCH_BY.GENRE ? 'selected' : ''} onClick={() => this.handleButtonClick(updateSearchBy, SEARCH_BY.GENRE)}>Genre</button>
						</main>
					)}
				</AppConsumer>
			</section>
		);
	}
}