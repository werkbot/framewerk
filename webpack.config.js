const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: [
		path.resolve(__dirname, 'sass/_fw-bundle.scss'),
	],
	output: {
		path: path.resolve(__dirname, 'css'),
	},
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
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