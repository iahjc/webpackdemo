## 错误监控
* 前端错误分类
	* 即时运行错误：代码错误
	* 资源加载错误
* 错误的捕获方式
	* 即时运行错误的捕获方式
		* try catch
		* window.onerror
	* 资源加载错误
		* object.onerror
		* performance.getEntries()
		* Error事件捕获
		* 跨域的js运行错误可以捕获吗，错误提示什么，应该怎么处理？	
			* 在script标签增加crossorigin属性
			* 设置js资源响应头Access-Control-Allow-Origin:*
* 上报错误的基本原理
	* 通过Ajax上报
	* 利用Image对象上报