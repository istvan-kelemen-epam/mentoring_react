/*
Build for development:

$ webpack
- or -
$ webpack --env.BUILD=dev

Build for production:

$ webpack --env.BUILD=prod
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
	const BUILD = {
		dev: 'dev',
		prod: 'prod'
	};

	env = env || {};
	env.BUILD = env.BUILD || BUILD.dev;

	let isProd;

	if (env.BUILD === 'dev') {
		isProd = false;
	} else if (env.BUILD === 'prod') {
		isProd = true;
	} else {
		throw 'Usage: \n$ webpack --env.BUILD=(dev|prod)';
	}

	let config = {};

	config.mode = isProd ? 'production' : 'development';

	console.log('*****************');
	console.log('MODE: ' + config.mode);
	console.log('*****************');

	config.devtool = isProd ? 'none' : 'source-map';

	config.context = path.join(__dirname, 'src');
	config.output = {
		path: path.join(__dirname, 'dist'),
		filename: 'main.js'
	};
	config.entry = './';

	config.resolve = {
		extensions: ['.js', '.jsx']
	};

	config.module = {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	};

	config.plugins = [
		new HtmlWebpackPlugin({
			hash: true,
			title: 'Поехали!',
			filename: path.resolve(__dirname, 'dist/index.html'),
			template: path.resolve(__dirname, 'src/index.html')
		})
	];

	config.devServer = {
		port: 8080,
		contentBase: path.join(__dirname, 'dist')
	};

	return config;
};