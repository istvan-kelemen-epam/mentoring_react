import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './scenes/App';
import NotFound from './scenes/NotFound';
import { ROUTE } from './services/routerUtils';

const Root = ({ Router, location, context, store }) => (
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

Root.propTypes = {
	Router: PropTypes.func.isRequired,
	location: PropTypes.string,
	context: PropTypes.shape({
		url: PropTypes.string,
	}),
	store: PropTypes.shape({
		dispatch: PropTypes.func.isRequired,
		getState: PropTypes.func.isRequired,
	}).isRequired,
};
Root.defaultProps = {
	location: null,
	context: null,
};

export default hot(module)(Root);
