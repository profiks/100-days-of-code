module.exports = {
    entry: {
        main: './js/app.js'
    },
    output: {
        filename: './js/bundle.js'
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
            },
			{ test: /\.css$/,
			  loader: "style-loader!css-loader!postcss-loader"
			}
        ]
    }
}