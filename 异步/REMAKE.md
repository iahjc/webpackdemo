## 什么是单线程，和异步有什么关系
	* 单线程就是同时制作一件事，两段js不能同时执行
	* 单线程 - 只有一个线程，只能做一件事
	* 原因 - 避免DOM渲染的冲突
	* 解决方案 - 异步
	* 异步是一种 无奈 的解决方案，虽然有很多问题
## 什么是event-loop
	* 事件轮询（事件循环）
	* 同步代码，直接执行
	* 异步函数先放在异步队列中
	* 待同步函数执行完毕，轮询执行异步队列的函数
## 是否使用过jQuery的Deferred（延迟）
	* jquery 1.5
		* 无法改变js异步和单线程的本质
		* 只能从写法上杜绝callback这种形式
		* 他是一种语法糖形式，但是解耦了代码
		* 很好的体现：开放封闭原则
	* deferred
		* 总结，dtd的API可分为两类，用意不同
		* 第一类: dtd.resolve dtd.reject
		* 第二类: dtd.then dtd.done dtd.fail
		* 这两类应该分开，否则后果很严重
		* 可以在上面代码最后执行dtd.reject() 试一下后果	
## Promise的基本使用和原理
	* 基本语法回购
	* 异常捕获
	* 过个串联
	* Promise.all 和 Promise.race
	* Promise标准
## 介绍一下async/await（和promise的区别，联系）
	* then知识将callback分拆了
	* async/await是最直接的同步写法
## 总结一下当前js解决异步的方案

## Promise标准 - 状态变化
* 三种状态: pending fulfilled rejected
* 初始状态: pending 
* pending 变为fulfilled，或者 pending 变为 rejected

## promise标准 - then
* Promise实例必须实现then这个方法
* then()必须可以接收两个函数作为参数
* then()返回的必须是一个Promises实例

## 关于标准的闲谈
* 任何技术推广使用都需要一套标准来支撑
* 如html js css http 等，无规矩不成方圆
* 任何不符合标准的东西，终将被抛弃
* 不要挑战标准，不要自造标准

## 为什么是单线程而不是多线程
* 避免DOM渲染冲突
	* 浏览器需要渲染DOM
	* js可以修改DOM结构
	* JS执行的时候，l浏览器DOM渲染会暂停
	* 两端JS也不能同时执行（都修改DOM就冲突了）
	* webworker执行多线程，但是不能访问DOM

## 异步问题
* 问题一： 没有按照书写方式执行，可读性查
* 问题二：callback中不容易模块化
