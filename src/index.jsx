import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './scenes/App';
import NotFound from './scenes/NotFound';
import { store } from './services/createStore';
import { ROUTE } from './services/routerUtils';

console.log('React version:', React.version);

ReactDom.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path={ROUTE.SEARCH} component={App} />
				<Route exact path={ROUTE.FILM} component={App} />
				<Route exact path="/" component={App} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('app')
);
