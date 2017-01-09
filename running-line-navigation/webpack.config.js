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
			{ 	test: /\.css$/,
			  	loader: "style-loader!css-loader!postcss-loader"
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			}
        ]
    }
}