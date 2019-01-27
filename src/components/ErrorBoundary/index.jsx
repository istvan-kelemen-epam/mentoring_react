// @flow
import * as React from 'react';

type Props = {
	children: any;
}

type State = {
	error: any;
	errorInfo: any;
}

export class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error: $PropertyType<State, 'error'>, errorInfo: $PropertyType<State, 'errorInfo'>) {
		this.setState({
			error: error,
			errorInfo: errorInfo
		});
	}

	render() {
		if (this.state.errorInfo) {
			return (
				<div>
					<h2>Something went wrong.</h2>
					<details style={{ whiteSpace: 'pre-wrap' }}>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</details>
				</div>
			);
		}

		return this.props.children;
	}
}
