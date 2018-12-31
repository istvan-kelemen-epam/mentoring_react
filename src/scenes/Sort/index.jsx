import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSortBy } from '../../services/actionCreators';

import './styles.css';

class SortBy extends React.Component {
	handleSelectChange(e) {
		this.props.updateSortBy(e.currentTarget.value);
	}

	render() {
		return (
			<section className="sort">
				<section className="sort__total">
					{this.props.total} movies found
				</section>
				<section className="sort__sort-by">
					<label>
						Sort by
						<select value={this.props.sortBy} onChange={this.handleSelectChange.bind(this)}>
							<option value="title">Title</option>
							<option value="release_date">Release date</option>
							<option value="vote_average">Vote average</option>
						</select>
					</label>
				</section>
			</section>
		);
	}
}

SortBy.propTypes = {
	total: PropTypes.number.isRequired,
	sortBy: PropTypes.string.isRequired,
	updateSortBy: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		total: state.movies.total,
		sortBy: state.sort.sortBy
	};
};

const mapDispatchToProps = {
	updateSortBy
};

export const testHelper = { SortBy };

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);
