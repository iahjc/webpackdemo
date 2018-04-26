## 处理css
	* 引入 css modules
	* 配置 less / sass
	* 提取css代码
	* style-loader
	* css-loader/url
	* style-loader/useable
	* file-loader

## options
	* insertAt (插入位置)
	* insertInto (插入到dom)
	* singleton (是否只使用一个style标签)
	* transform (转化，浏览器环境下，插入页面前)	


## css-loader 
	* options
		* alias 解析别名
		* importLoader(@import)
		* Minimize 是否压缩
		* modules (启用css-modules)


## css-Modules
	* :local
	* :global
	* compose
	* compose ... from path		
	* localIdentName:'[path][name]_[local]--[hash:base64:5]'

## 配置sass和less
		npm install less-loader less --save-dev
		npm install sass-loader node-sass --save-dev	

## use的loader是从后往前处理		

## 提取css
	* extract-loader
	* ExtractTextWebpackPlugin
			npm install extract-text-webpack-plugin webpack --save-dev