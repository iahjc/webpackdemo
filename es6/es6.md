## ES6/7
 * Babel 编译工具
 * Babel-presets

 		npm install babel-loader@8.0.0-beta.0 @babel/core
 		npm install --save-dev babel-loader babel-core
 * Babel Presets 规范  语法
 	* es2015
 	* es2016
 	* es2017
 	* env
 	* babel-preset-react
 	* babel-preset-stage 0 - 3

 			npm install @babel/preset-env --save-dev
 			npm install babel-preset-env --save-dev

 	* targets 指定规范参数 根据条件进行打包 看浏览器的支持程度
 		* targets.browsers 
 		* targets.browsers: "last 2 versions"
 		* targets.browsers: "> 1%"
 		* browserslist
 		* Can I use				

 ## 插件 转换函数和方法
  * Babel Polyfill 各个浏览器实现方法不一致 全局垫片 为应用准备
  		npm install babel-polyfill --save-dev
  		import "babel-polyfill"
  * Babel Runtime Transform	
  		局部垫片
  		为开发框架准备
  		不希望污染全局环境

  		npm install babel-plugin-transform-runtime --save-dev
  		npm install babel-runtime --save
  		.babelrc中配置

	Generator
	Set
	Map
	Array.from
	Array.prototype.includes	

