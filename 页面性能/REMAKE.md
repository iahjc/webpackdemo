## 页面性能
* 提升页面性能的方法有哪些
	* 资源的压缩与合并，减少HTTP请求
	* 非核心代码异步加载  -> 异步加载的方式 -> 异步加载的区别
	* 利用浏览器缓存 -> 缓存的分类 -> 缓存的原理
	* 使用CDN
	* 预解析DNS

## 异步加载
* 异步加载的方式
	* 动态脚本加载
	* defer
	* async
* 异步加载的区别
	* defer是在HTML解析完之后才执行，如果是多个，按照加载的顺序依次执行
	* async是在加载完之后立即执行，如果是多个，执行顺序和加载顺序无关

## 浏览器缓存
* 缓存的分类
	* 强缓存
		* Expires Expires:Thu, 21 Jan 2017 23:39:02 GMT
		* Cache-Control Cache-Control:max-age=3600
	* 协商缓存
		* Last-Modified If-Modified-Since Last-Modified: Wed,26 Jan 2017 00:35:11 GMT
		* Etag If-None-Match		