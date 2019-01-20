import * as React from 'react';
import { connect } from 'react-redux';

import './styles.css';

class NotFound extends React.Component {
	render() {
		return (
			<main className="not-found">
				<header>
					<h1>Path not found</h1>
				</header>
				<main>
					<p>Te given URL is not supported.</p>
					<div>Valid URL{'\''}s:</div>
					<ul>
						<li>Home: localhost:8080/</li>
						<li>Search: localhost:8080/search/{'{encoded search expession}'}/</li>
					</ul>
				</main>
			</main>
		);
	}
}

export default connect()(NotFound);
