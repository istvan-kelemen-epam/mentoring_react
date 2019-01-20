import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import createStore from './services/createStore';

const store = createStore(window.PRELOADED_STATE);

const root = (
	<Root
		Router={BrowserRouter}
		store={store}
	/>
);

hydrate(root, document.getElementById('root'));
