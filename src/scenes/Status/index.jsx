import './styles.css';
import * as React from 'react';
import PropTypes from 'prop-types';

export class Status extends React.Component {
	render() {
		let data = this.props.data;
		let foundText;

		if (data) {
			foundText = `${data.length} movies found`;
		} else {
			foundText = '';
		}

		return (
			<section className="status">
				<span className="status__found">{foundText}</span>
				<span className="status__sort-by">
					<span className="status__sort-by-caption">Sort by</span>
					<span className="status__sort-by-value">release date</span>
				</span>
				<span className="status__rating">rating</span>
			</section>
		);
	}
}

Status.propTypes = {
	data: PropTypes.array
};