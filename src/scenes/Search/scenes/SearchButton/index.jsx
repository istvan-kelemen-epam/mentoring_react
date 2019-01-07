import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SEARCH_BY } from '../../../../services/actionTypes';
import { clearOffset, fetchMovies } from '../../../../services/actionCreators';

import './styles.css';

class SearchButton extends React.Component {
	handleClick() {
		const searchExpression = (this.props.searchExpression || '').trim();
		if (searchExpression) {
			this.props.clearOffset();
			if (this.props.searchBy === SEARCH_BY.TITLE) {
				const encodedSearchExpression = encodeURIComponent(searchExpression);
				this.props.history.push('/search/' + encodedSearchExpression);
			} else {
				this.props.history.push('/');
				this.props.fetchMovies();
			}
		}
	}

	render() {
		return (
			<section className="search-button">
				<button onClick={this.handleClick.bind(this)}>Search</button>
			</section>
		);
	}
}

SearchButton.propTypes = {
	history: PropTypes.object.isRequired,
	searchBy: PropTypes.string.isRequired,
	searchExpression: PropTypes.string,
	clearOffset: PropTypes.func.isRequired,
	fetchMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		searchBy: state.search.searchBy,
		searchExpression: state.search.searchExpression
	};
};

const mapDispatchToProps = {
	clearOffset,
	fetchMovies
};

export const testHelper = { SearchButton };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchButton));
