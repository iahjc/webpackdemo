// 采用commonjs的规范编写
module.exports = {
	entry: {
		app: './app.js'
	},
	output: {
		filename: '[name].[hash:5].js'
	}
}