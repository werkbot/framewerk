const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
	/*
		Builds JS and Styles into one file:
		- dist/framewerk.js
	*/
	{
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
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								url: false,
							},
						},
						{
							loader: "postcss-loader",
							options: {
								postcssOptions: {
									plugins: [
										'autoprefixer',
									],
								},
							},
						},
						{
							loader: 'sass-loader',
						}
					]
				}
			]
		},
	},
	/*
		Builds JS and Styles into two separate files:
		- dist/framewerk-no-styles.js
		- dist/fw-bundle.css
	*/
	{
		entry: [
			path.resolve(__dirname, 'js/form.js'),
			path.resolve(__dirname, 'sass/_fw-bundle.scss'),
		],
		output: {
			filename: 'framewerk-no-styles.js',
			path: path.resolve(__dirname, 'dist')
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
							loader: "postcss-loader",
							options: {
								postcssOptions: {
									plugins: [
										'autoprefixer',
									],
								},
							},
						},
						{
							loader: 'sass-loader',
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
	},
];