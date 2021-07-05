const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/server.ts',
	target: 'node',
	output: {
		path: path.resolve(__dirname, '../board-server-webpack-dist/dist'),
		filename: 'index.js',
	},
	resolve: {
		extensions: ['.ts', '.js', 'json'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader'],
				exclude: ['/node_modules/'],
			},
			{
				test: /\.json$/,
				loader: 'file-loader',
				type: 'javascript/auto',
				exclude: ['/node_modules/'],
			},
		],
	},
	node: {
		__dirname: false,
	},
	externals: [nodeExternals()],
	devtool: 'source-map',
	plugins: [new CleanWebpackPlugin()],
};