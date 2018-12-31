import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.css';

class List extends React.Component {
	render() {
		return (
			<section className="result-list__container">
				<ul className="result-list">
					{this.props.movies.data.map(item => (
						<li key={item.id} data-id={item.id} className="result-list__item">
							<div className="result-list__item-poster">
								<img src={item.poster_path}></img>
							</div>
							<div className="result-list__item-title">{item.title}</div>
							<div className="result-list__item-year">{item.release_date.substring(0, 4)}</div>
							<div className="result-list__item-genre">{item.genres ? item.genres.join(' & ') : ''}</div>
						</li>
					))}
				</ul>
			</section>
		);
	}
}

List.propTypes = {
	movies: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return { movies: state.movies };
};

export const testHelper = { List };

export default connect(mapStateToProps)(List);
