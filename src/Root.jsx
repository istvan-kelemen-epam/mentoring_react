// @flow
import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './scenes/App';
import NotFound from './scenes/NotFound';
import { ROUTE } from './services/routerUtils';

type Props = {
	Router: Function;
	location?: ?String;
	context: {
		url?: ?String;
	},
	store: {
		dispatch: Function;
		getState: Function;
	};
}

const Root = ({ Router, location, context, store }: Props) => (
	<Provider store={store}>
		<Router location={location} context={context}>
			<Switch>
				<Route exact path={ROUTE.SEARCH} component={App} />
				<Route exact path={ROUTE.FILM} component={App} />
				<Route exact path="/" component={App} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</Provider>
);

Root.defaultProps = {
	location: null,
	context: null,
};

export default (hot: Function)(module)(Root);
