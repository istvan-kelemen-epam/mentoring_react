// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createSelector } from 'reselect';

import './styles.css';

type Props = {
	history: Object;
	movies: Object;
}

const releaseDate = item => item.release_date || '';
const genres = item => item.genres || [];

const releaseYear = createSelector(
	releaseDate,
	releaseDate => releaseDate.substring(0, 4)
);

const formattedGenres = createSelector(
	genres,
	genres => genres.join(' & ')
);

class List extends React.Component<Props> {
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
							<div className="result-list__item-release_year">{releaseYear(item)}</div>
							<div className="result-list__item-genre">{formattedGenres(item)}</div>
						</li>
					))}
				</ul>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return { movies: state.movies };
};

export default withRouter(connect(mapStateToProps)(List));
