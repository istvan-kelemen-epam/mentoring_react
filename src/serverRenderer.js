import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './Root';
import createStore from './services/createStore';
import { ROUTE } from './services/routerUtils';
import { fetchMovies, fetchMovieById } from './services/actionCreators';

function renderHTML(html, preloadedState) {
	return `
		<!doctype html>
		<html>
			<head>
				<meta charset=utf-8>
				<title>netflixroulette</title>
				${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
			</head>
			<body>
				<div id="root">${html}</div>
				<script>
					// WARNING: See the following for security issues around embedding JSON in HTML:
					// http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
					window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
				</script>
				<script src="/js/main.js"></script>
			</body>
		</html>
	`;
}

export default function serverRenderer() {
	return (req, res) => {
		const store = createStore();
		// This context object contains the results of the render
		const context = {};

		let promise;

		if (new RegExp(ROUTE.SEARCH.replace(/:.*/, '')).test(req.url)) {
			promise = fetchMovies()(store.dispatch, store.getState);
		} else if (new RegExp(ROUTE.FILM.replace(/:.*/, '')).test(req.url)) {
			try {
				let id = /\/([\d]+)\/?$/.exec(req.url)[1];
				promise = fetchMovieById(id)(store.dispatch, store.getState);
			} catch(e) {
				promise = Promise.resolve();
			}
		} else {
			promise = Promise.resolve();
		}

		promise.then(() => {
			const root = (
				<Root
					context={context}
					location={req.url}
					Router={StaticRouter}
					store={store}
				/>
			);

			const htmlString = renderToString(root);

			// context.url will contain the URL to redirect to if a <Redirect> was used
			if (context.url) {
				res.writeHead(302, {
					Location: context.url,
				});
				res.end();
				return;
			}

			const preloadedState = store.getState();

			res.send(renderHTML(htmlString, preloadedState));
		});
	};
}
