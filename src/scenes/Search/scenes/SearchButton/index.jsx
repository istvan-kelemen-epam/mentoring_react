import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { triggerSearch } from '../../../../services/actionCreators';

import './styles.css';

class SearchButton extends React.Component {
	handleClick() {
		this.props.triggerSearch();
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
	triggerSearch: PropTypes.func.isRequired
};

const mapDispatchToProps = {
	triggerSearch
};

export const testHelper = { SearchButton };

export default connect(null, mapDispatchToProps)(SearchButton);
