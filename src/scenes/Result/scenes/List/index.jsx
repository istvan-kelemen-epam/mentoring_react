import './styles.css';
import * as React from 'react';
import PropTypes from 'prop-types';

export class List extends React.Component {
	render() {
		return (
			<ul className="result-list">
				{this.props.data.map(item => {
					return (
						<li key={item.id} className="result-list__item">
							<div className="result-list__item-title">{item.title}</div>
							<div className="result-list__item-year">{item.year}</div>
							<div className="result-list__item-genre">{item.genre}</div>
						</li>
					);
				})}
			</ul>
		);
	}
}

List.propTypes = {
	data: PropTypes.array
};