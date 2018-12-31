import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSearchExpression } from '../../services/actionCreators';
import SearchButton from './scenes/SearchButton';
import SearchBy from './scenes/SearchBy';

import './styles.css';

class Search extends React.Component {
	handleInputChange(e) {
		this.props.updateSearchExpression(e.currentTarget.value);
	}
	
	render() {
		return (
			<section className="search">
				<h2>Find your movie</h2>
				<input type="text" placeholder="Search expression" value={this.props.searchExpression} onChange={this.handleInputChange.bind(this)} />
				<section className="search__filter-panel">
					<SearchBy />
					<SearchButton />
				</section>
			</section>
		);
	}
}

Search.propTypes = {
	searchExpression: PropTypes.string.isRequired,
	updateSearchExpression: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return { searchExpression: state.search.searchExpression };
};

const mapDispatchToProps = {
	updateSearchExpression
};

export const testHelper = { Search };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
