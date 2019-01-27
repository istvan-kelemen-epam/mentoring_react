// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { SEARCH_BY } from '../../../../services/actionTypes';
import { updateSearchBy } from '../../../../services/actionCreators';

import './styles.css';

type Props = {
	searchBy: String;
	updateSearchBy: Function;
}

class SearchBy extends React.Component<Props> {
	handleButtonClick(searchBy: $PropertyType<Props, 'searchBy'>) {
		this.props.updateSearchBy(searchBy);
	}

	render() {
		return (
			<section className="search-by">
				<header>Search by</header>
				<main>
					<button
						className={this.props.searchBy === SEARCH_BY.TITLE ? 'selected' : ''}
						onClick={this.handleButtonClick.bind(this, SEARCH_BY.TITLE)}
					>
						Title
					</button>
					<button
						className={this.props.searchBy === SEARCH_BY.GENRE ? 'selected' : ''}
						onClick={this.handleButtonClick.bind(this, SEARCH_BY.GENRE)}
					>
						Genre
					</button>
				</main>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return { searchBy: state.search.searchBy };
};

const mapDispatchToProps = {
	updateSearchBy
};

export default (connect: Function)(mapStateToProps, mapDispatchToProps)(SearchBy);
