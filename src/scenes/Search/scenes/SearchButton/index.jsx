import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clearOffset, fetchMovies } from '../../../../services/actionCreators';

import './styles.css';

class SearchButton extends React.Component {
	handleClick() {
		this.props.clearOffset();
		this.props.fetchMovies();
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
	clearOffset: PropTypes.func.isRequired,
	fetchMovies: PropTypes.func.isRequired
};

const mapDispatchToProps = {
	clearOffset,
	fetchMovies
};

export const testHelper = { SearchButton };

export default connect(null, mapDispatchToProps)(SearchButton);
