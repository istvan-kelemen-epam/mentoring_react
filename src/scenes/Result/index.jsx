// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import List from './scenes/List';

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

type Props = {
	classes: typeof styles;
	movies: Object;
}

class Result extends React.Component<Props> {
	render() {
		let result = null;
		if (this.props.movies.data) {
			if (this.props.movies.data.length) {
				result = <List />;
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
