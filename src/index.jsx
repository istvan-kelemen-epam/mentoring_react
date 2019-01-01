import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './scenes/App';
import { store } from './services/createStore';

console.log('React version:', React.version);

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
