import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { showSearch } from '../../services/actionCreators';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import Search from '../Search';
import SortBy from '../SortBy';
import Result from '../Result';
import SelectedMovie from './scenes/SelectedMovie';

import './styles.css';

class App extends React.Component {
	handleShowSearchButtonClick() {
		this.props.showSearch();
	}

	render() {
		return (
			<main>
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
	selectedMovie: PropTypes.object,
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
	showSearch
};

export const testHelper = { App };

export default connect(mapStateToProps, mapDispatchToProps)(App);
