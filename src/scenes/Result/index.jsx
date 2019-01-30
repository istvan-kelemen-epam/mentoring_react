// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { createSelector } from 'reselect';
// $FlowFixMe
import { List } from 'immutable';

import ResultList from './scenes/List';

type Props = {
	classes: typeof styles;
	movies: Object;
}

const styles = {
	result: {
		margin: '3em 24px',
		backgroundColor: '#fff',
		color: '#000'
	},
	resultNotFound: {
		fontSize: 'xx-large',
		textAlign: 'center'
	}
};

const movieArray = props => (props.movies || {}).data || [];

const movieList = createSelector(
	movieArray,
	movieArray => movieArray.count ? movieArray : List(movieArray)
);

const movieCount = createSelector(
	movieList,
	movieList => movieList.count()
);

class Result extends React.Component<Props> {
	render() {
		let result = null;
		if (this.props.movies.data) {
			if (movieCount(this.props)) {
				result = <ResultList movieList={movieList(this.props)} />;
			} else {
				result = <div className={this.props.classes.resultNotFound}>No films found</div>;
			}
		}
		return (
			<section className={this.props.classes.result}>
				{result}
			</section>
		);
	}
}

const mapStateToProps = state => {
	return { movies: state.movies };
};

export default (connect: Function)(mapStateToProps)(injectSheet(styles)(Result));
