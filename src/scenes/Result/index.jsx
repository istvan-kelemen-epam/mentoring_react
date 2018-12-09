import './styles.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import { List } from './scenes/List';

export class Result extends React.Component {
	render() {
		let result = null;
		if (this.props.data) {
			if (this.props.data.length) {
				result = <List data={this.props.data} />;
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
	data: PropTypes.array
};