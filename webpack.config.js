const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
	console.log('__dirname', __dirname);
	console.log('env', env);
	console.log('argv', argv);

	return {
		context: path.join(__dirname, 'src'),

		output: {
			publicPath: '/'
		},

		devServer: {
			historyApiFallback: true
		},

		entry: './index.jsx',

		mode: 'development',

		devtool: 'source-map',

		resolve: {
			extensions: ['.js', '.jsx']
		},

		module: {
			rules: [
				{
					test: /\.jsx?$/,
					loader: ['babel-loader', 'eslint-loader'],
					exclude: /node_modules/
				}, {
					test: /\.css$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader']
				}
			]
		},

		plugins: [
			new HtmlWebpackPlugin({
				title: 'netflixroulette',
				hash: true,
				template: path.resolve(__dirname, './index.html')
			}),
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css'
			})
		]
	};
};
