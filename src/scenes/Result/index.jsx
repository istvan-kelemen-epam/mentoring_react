// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import List from './scenes/List';

import './styles.css';

type Props = {
	movies: Object;
}

class Result extends React.Component<Props> {
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

const mapStateToProps = state => {
	return { movies: state.movies };
};

export default (connect: Function)(mapStateToProps)(Result);
