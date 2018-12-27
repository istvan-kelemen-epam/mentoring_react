import './styles.css';
import * as React from 'react';

export class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<main>
				<section className="main-header">
					<h1 className="main-caption">netflixroulette</h1>
				</section>
			</main>
		);
	}
}

App.SEARCH_BY = {
	TITLE: 1,
	GENRE: 2
};
