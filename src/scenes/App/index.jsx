import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTE } from '../../services/routerUtils';

import { updateSearchExpression, fetchMovies, fetchMovieById, showSearch } from '../../services/actionCreators';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import Search from '../Search';
import SortBy from '../SortBy';
import Result from '../Result';
import SelectedMovie from './scenes/SelectedMovie';

import './styles.css';

class App extends React.Component {
	constructor(props) {
		super();
		if (props.match.path === ROUTE.SEARCH) {
			const searchExpression = this.getSearchExpressionParam(props);
			if (searchExpression) {
				props.updateSearchExpression(searchExpression);
			}
		}
	}

	getSearchExpressionParam(props) {
		return (props.match.params.searchExpression || '').trim();
	}

	handleShowSearchButtonClick() {
		this.props.history.push('/');
		this.props.showSearch();
	}

	render() {
		return (
			<main>
				<Route exact path={ROUTE.SEARCH}>
					{(() => {
						const searchExpression = this.getSearchExpressionParam(this.props);
						if (searchExpression) {
							this.props.fetchMovies();
						}
					})()}
				</Route>
				<Route exact path={ROUTE.FILM}>
					{(() => {
						const id = this.props.match.params.id;
						const selectedMovieId = this.props.selectedMovie && this.props.selectedMovie.id;
						if (id && id != selectedMovieId) {
							this.props.fetchMovieById(id);
						}
					})()}
				</Route>
				<section className="main-header">
					<div className="main-header-caption-container">
						<h1 className="main-header-caption">netflixroulette</h1>
						<div className="main-header-show-search-container">
							{this.props.selectedMovie &&
								<button className="main-header-show-search" onClick={this.handleShowSearchButtonClick.bind(this)}>Search</button>
							}
						</div>
					</div>
					{!this.props.selectedMovie &&
						<ErrorBoundary><Search /></ErrorBoundary>
					}
				</section>
				{this.props.selectedMovie
					? <SelectedMovie />
					: <ErrorBoundary><SortBy /></ErrorBoundary>
				}
				<ErrorBoundary><Result /></ErrorBoundary>
				<section className="main-footer">
					<h1 className="main-footer-caption">netflixroulette</h1>
				</section>
			</main>
		);
	}
}

App.propTypes = {
	history: PropTypes.object.isRequired,
	match: PropTypes.object,
	updateSearchExpression: PropTypes.func.isRequired,
	fetchMovies: PropTypes.func.isRequired,
	selectedMovie: PropTypes.object,
	fetchMovieById: PropTypes.func.isRequired,
	showSearch: PropTypes.func.isRequired
};

App.SEARCH_BY = {
	TITLE: 1,
	GENRE: 2
};

const mapStateToProps = state => {
	return { selectedMovie: state.app.selectedMovie };
};

const mapDispatchToProps = {
	updateSearchExpression,
	fetchMovies,
	fetchMovieById,
	showSearch
};

export const testHelper = { App };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
