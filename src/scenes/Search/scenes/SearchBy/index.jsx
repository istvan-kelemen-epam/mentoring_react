import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SEARCH_BY } from '../../../../services/actionTypes';
import { updateSearchBy } from '../../../../services/actionCreators';

import './styles.css';

class SearchBy extends React.Component {
	handleButtonClick(searchBy) {
		this.props.updateSearchBy(searchBy);
	}

	render() {
		return (
			<section className="search-by">
				<header>Search by</header>
				<main>
					<button className={this.props.searchBy === SEARCH_BY.TITLE ? 'selected' : ''} onClick={this.handleButtonClick.bind(this, SEARCH_BY.TITLE)}>Title</button>
					<button className={this.props.searchBy === SEARCH_BY.GENRE ? 'selected' : ''} onClick={this.handleButtonClick.bind(this, SEARCH_BY.GENRE)}>Genre</button>
				</main>
			</section>
		);
	}
}

SearchBy.propTypes = {
	searchBy: PropTypes.string.isRequired,
	updateSearchBy: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return { searchBy: state.search.searchBy };
};

const mapDispatchToProps = {
	updateSearchBy
};

export const testHelper = { SearchBy };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBy);
