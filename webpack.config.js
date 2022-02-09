const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: [
		path.resolve(__dirname, 'js/form.js'),
		path.resolve(__dirname, 'sass/_fw-bundle.scss'),
	],
	output: {
		filename: 'framewerk.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
					{
						loader: 'sass-loader',
					},
					{
					loader: 'sass-resources-loader',
						options: {
							resources: [
								path.resolve(__dirname, 'sass/_fw-variables.scss'),
							],
						},
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'fw-bundle.css',
		}),
	],
}