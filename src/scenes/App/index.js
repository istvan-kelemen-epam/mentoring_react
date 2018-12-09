import './styles.css';
import * as React from 'react';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { FetchData } from '../../services';
import { Search } from '../Search';
import { Status } from '../Status';
import { Result } from '../Result';

const { Provider: AppProvider, Consumer: AppConsumer } = React.createContext();

export { AppConsumer };

export class App extends React.Component {
	constructor() {
		super();
		this.state = {
			searchExpression: '',
			searchBy: App.SEARCH_BY.TITLE,
			result: null
		};
		this.updateSearchExpression = this.updateSearchExpression.bind(this);
		this.updateSearchBy = this.updateSearchBy.bind(this);
	}

	updateSearchExpression(searchExpression) {
		this.setState({
			searchExpression: searchExpression
		});
		if (searchExpression) {
			let fetchData = new FetchData();
			let result;
			if (this.state.searchBy === App.SEARCH_BY.TITLE) {
				result = fetchData.searchByTitle(searchExpression);
			} else {
				result = fetchData.searchByGenre(searchExpression);
			}
			this.setState({
				result: result
			});
		}
	}

	updateSearchBy(searchBy) {
		this.setState({
			searchBy: searchBy
		});
	}

	render() {
		return (
			<AppProvider value={{
				updateSearchExpression: this.updateSearchExpression,
				updateSearchBy: this.updateSearchBy,
				searchBy: this.state.searchBy,
				SEARCH_BY: App.SEARCH_BY
			}}>
				<main>
					<section className="main-header">
						<h1 className="main-caption">netflixroulette</h1>
						<ErrorBoundary><Search /></ErrorBoundary>
					</section>
					<div>{(this.state.searchExpression.toString(), 'only for debug purpose', '')}</div>
					<Status data={this.state.result} />
					<Result data={this.state.result} />
				</main>
			</AppProvider>
		);
	}
}

App.SEARCH_BY = {
	TITLE: 1,
	GENRE: 2
};
