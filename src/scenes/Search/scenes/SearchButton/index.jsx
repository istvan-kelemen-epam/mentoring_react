import './styles.css';
import * as React from 'react';
import { AppConsumer } from '../../../App';

export class SearchButton extends React.Component {
	constructor(props) {
		super(props);
		this.input = React.createRef();
	}

	handleClick(updateSearchExpression) {
		updateSearchExpression(this.props.input.current.value); // eslint-disable-line react/prop-types
	}

	render() {
		return (
			<section className="search-button">
				<AppConsumer>
					{({ updateSearchExpression }) => (
						<button onClick={() => { this.handleClick(updateSearchExpression); }}>Search</button>
					)}
				</AppConsumer>
			</section>
		);
	}
}