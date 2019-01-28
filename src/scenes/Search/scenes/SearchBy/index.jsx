// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { ButtonActive, ButtonInactive } from '../../../../components/Stories';
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

	createSearchByButton(searchBy: String) {
		const caption = searchBy === SEARCH_BY.TITLE ? 'Title' : 'Genre';
		return this.props.searchBy === searchBy
			? <ButtonActive>{caption}</ButtonActive>
			: <ButtonInactive onClick={this.handleButtonClick.bind(this, searchBy)}>{caption}</ButtonInactive>;
	}

	render() {
		return (
			<section className="search-by">
				<header>Search by</header>
				<main>
					{this.createSearchByButton(SEARCH_BY.TITLE)}
					{this.createSearchByButton(SEARCH_BY.GENRE)}
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
