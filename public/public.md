## 提交公共代码 
 * 模块化开发，模块会有依赖公共模块 类似于vendor.js
 * 减少代码冗余
 * 提高加载速度

## CommonsChunkPlugin
		webpack.optimize.CommonsChunkPlugin

		{
			plugins: [
				new webpack.optimize.
			]
		}

## 配置
	* options.name or options.names
	* options.filename 
	* options.minChunks
	* options.chunks
	* options.children
	* options.deepChildren
	* options.async

## 场景
 * 单页应用
 * 单页应用 + 第三方依赖
 * 多页应用 + 第三方依赖 + webpack生成代码		

## 一定要注意webpack版本号 	

## 需要多个入口即entry才能提取公共模块 单页面需要配置懒加载
