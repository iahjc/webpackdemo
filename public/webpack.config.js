var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: {
		'pageA': './src/pageA',
		'pageB': './src/pageB',
		'vendor': ['jquery']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor-[hash].min.js',
			minChunks: Infinity
		})
	]
}