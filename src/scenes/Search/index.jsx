// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { updateSearchExpression } from '../../services/actionCreators';
import SearchButton from './scenes/SearchButton';
import SearchBy from './scenes/SearchBy';

import './styles.css';

type Props = {
	searchExpression: String;
	updateSearchExpression: Function;
}

class Search extends React.Component<Props> {
	handleInputChange(e: Object) {
		this.props.updateSearchExpression(e.currentTarget.value);
	}
	
	render() {
		return (
			<section className="search">
				<h2>Find your movie</h2>
				<input
					type="text"
					placeholder="Search expression (required)"
					value={this.props.searchExpression}
					onChange={this.handleInputChange.bind(this)}
				/>
				<section className="search__filter-panel">
					<SearchBy />
					<SearchButton />
				</section>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return { searchExpression: state.search.searchExpression };
};

const mapDispatchToProps = {
	updateSearchExpression
};

export default (connect: Function)(mapStateToProps, mapDispatchToProps)(Search);
