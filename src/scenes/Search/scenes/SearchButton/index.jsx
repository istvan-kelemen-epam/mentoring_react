import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clearOffset, fetchMovies } from '../../../../services/actionCreators';

import './styles.css';

class SearchButton extends React.Component {
	handleClick() {
		const searchExpression = (this.props.searchExpression || '').trim();
		if (searchExpression) {
			this.props.clearOffset();
			this.props.fetchMovies();
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
	searchExpression: PropTypes.string,
	clearOffset: PropTypes.func.isRequired,
	fetchMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return { searchExpression: state.search.searchExpression };
};

const mapDispatchToProps = {
	clearOffset,
	fetchMovies
};

export const testHelper = { SearchButton };

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
