import * as React from 'react';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import Search from '../Search';
import './styles.css';

export class App extends React.Component {
	render() {
		return (
			<main>
				<section className="main-header">
					<h1 className="main-caption">netflixroulette</h1>
					<ErrorBoundary><Search /></ErrorBoundary>
				</section>
			</main>
		);
	}
}

App.SEARCH_BY = {
	TITLE: 1,
	GENRE: 2
};
