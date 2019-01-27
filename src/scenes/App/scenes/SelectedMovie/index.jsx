// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import './styles.css';

type Props = {
	selectedMovie: Object
}

class SelectedMovie extends React.Component<Props> {
	componentDidMountOrUpdate() {
		(document: Object).querySelector('.main-header-show-search').scrollIntoView();
	}

	componentDidMount() {
		this.componentDidMountOrUpdate();
	}
	
	componentDidUpdate() {
		this.componentDidMountOrUpdate();
	}

	render() {
		const movie = this.props.selectedMovie;
		return (
			<section className="selected-movie">
				<main>
					<div className="selected-movie__poster">
						<img src={movie.poster_path}></img>
					</div>
					<article>
						<div>
							<h2 className="selected-movie__title">{movie.title}</h2>
							<span className="selected-movie__vote_average"><span>{movie.vote_average}</span></span>
						</div>
						<div className="selected-movie__tagline">{movie.tagline}</div>
						<div>
							<span className="selected-movie__release_year">{movie.release_date.substring(0, 4)}</span>
							<span className="selected-movie__runtime">{movie.runtime} min</span>
						</div>
						<div className="selected-movie__overview">{movie.overview}</div>
					</article>
				</main>
				<footer className="selected-movie__footer">
					<div>Films by {movie.genre} genre</div>
				</footer>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return { selectedMovie: state.app.selectedMovie };
};

export default (connect: Function)(mapStateToProps)(SelectedMovie);
