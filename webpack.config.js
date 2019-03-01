const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = environment => {
	return {
		mode: 'development',
		devtool: environment === 'production' ? 'none' : 'source-map',
		entry: "./src/front/index.js",
		output: {
			path: path.resolve(__dirname, "build/"),
			publicPath: "/",
			filename: "bundle.js"
		},
		devServer: {
			contentBase: path.join(__dirname, "build"),
			compress: true,
			port: 9000
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|bower_components)/,
					loader: "babel-loader",
					options: { presets: ["@babel/env"] }
				},
				{
					test: /\.(css|scss)$/,
					use: ["style-loader", "css-loader", 'sass-loader']
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: [
						'file-loader'
					]
				}
			]
		},
		resolve: {
			modules: [
				path.resolve(__dirname, 'src'),
				'node_modules'
			],
			extensions: ["*", ".js", ".jsx"]
		},
		plugins: [
			new CleanWebpackPlugin(['build']),
			new HtmlWebpackPlugin({
				title: 'Insert your own title here!',
				template: './src/front/index.html',
				filename: './index.html'
			})
		]
	}
};
