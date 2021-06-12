const Dotenv = require( 'dotenv-webpack' );
const baseConfig = require( './config.base' );
const WebpackBar = require( 'webpackbar' );
const EslintPlugin = require( 'eslint-webpack-plugin' );
const MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );

const config = {
	entry: baseConfig.paths.entry,

	output: {
		filename: '[name].js',
		path: baseConfig.paths.output,
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx|svg|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},

			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
					},
				],
			},
		],
	},

	plugins: [
		new Dotenv(),
		new WebpackBar(),
		new EslintPlugin( {
			extensions: [ 'js', 'jsx', 'ts', 'tsx' ],
		} ),
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} ),
		new BrowserSyncPlugin(
			{
				host: 'localhost',
				port: 3000,
				files: [ './template-parts/**.php' ],
				proxy: 'http://localhost/masteriyo',
			},
			{
				reload: true,
			}
		),
	].filter( Boolean ),

	resolve: baseConfig.resolver,

	devServer: baseConfig.devServer,

	devtool: 'cheap-module-source-map',
};
module.exports = config;
