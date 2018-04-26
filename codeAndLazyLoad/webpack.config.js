var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: {
		'pageA': './src/pageA'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './dist/', // 可以是线上的cdn地址
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'
	},
	// plugins: [
	// 	new webpack.optimize.CommonsChunkPlugin({
	// 		name: ['vendor', 'manifest'],
	// 		minChunks: Infinity
	// 	})
	// ]
}