import './styles.css';
import * as React from 'react';
import { SearchBy } from './scenes/SearchBy';
import { SearchButton } from './scenes/SearchButton';

export class Search extends React.Component {
	constructor(props) {
		super(props);
		this.input = React.createRef();
	}

	render() {
		return (
			<section className="search">
				<h2>Find your movie</h2>
				<input ref={this.input} type="text" placeholder="Search expression" />
				<SearchBy />
				<SearchButton input={this.input} />
			</section>
		);
	}
}
