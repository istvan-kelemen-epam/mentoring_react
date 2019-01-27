// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { updateSortBy, clearOffset, fetchMovies } from '../../services/actionCreators';

import './styles.css';

type Props = {
	total: any;
	sortBy: String;
	updateSortBy: Function;
	clearOffset: Function;
	fetchMovies: Function;
}

class SortBy extends React.Component<Props> {
	handleSelectChange(e: Object) {
		this.props.updateSortBy(e.currentTarget.value);
		this.props.clearOffset();
		this.props.fetchMovies();
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

const mapStateToProps = state => {
	return {
		total: state.movies.total,
		sortBy: state.sort.sortBy
	};
};

const mapDispatchToProps = {
	updateSortBy,
	clearOffset,
	fetchMovies
};

export default (connect: Function)(mapStateToProps, mapDispatchToProps)(SortBy);
