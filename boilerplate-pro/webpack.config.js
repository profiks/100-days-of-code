module.exports = {
	entry: {
		main: './app/js/app.js'
	},
	output: {
		filename: './app/js/bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
}