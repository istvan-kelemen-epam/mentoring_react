import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import List from './scenes/List';

import './styles.css';

class Result extends React.Component {
	render() {
		let result = null;
		if (this.props.movies.data) {
			if (this.props.movies.data.length) {
				result = <List />;
			} else {
				result = <div className="result__not-found">No films found</div>;
			}
		}
		return (
			<section className="result">
				{result}
			</section>
		);
	}
}

Result.propTypes = {
	movies: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return { movies: state.movies };
};

export const testHelper = { Result };

export default connect(mapStateToProps)(Result);
