import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

class List extends React.Component {
	handleClick(e) {
		let element = e.target;
		while (element && !element.classList.contains('result-list__item')) {
			element = element.parentElement;
		}
		if (element) {
			this.props.history.push('/film/' + element.dataset.id);
		}
	}

	render() {
		return (
			<section className="result-list__container">
				<ul className="result-list" onClick={this.handleClick.bind(this)}>
					{this.props.movies.data.map(item => (
						<li key={item.id} data-id={item.id} className="result-list__item">
							<div className="result-list__item-poster">
								<img src={item.poster_path}></img>
							</div>
							<div className="result-list__item-title">{item.title}</div>
							<div className="result-list__item-release_year">{item.release_date.substring(0, 4)}</div>
							<div className="result-list__item-genre">{item.genres && item.genres.join(' & ')}</div>
						</li>
					))}
				</ul>
			</section>
		);
	}
}

List.propTypes = {
	history: PropTypes.object.isRequired,
	movies: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return { movies: state.movies };
};

export const testHelper = { List };

export default withRouter(connect(mapStateToProps)(List));
