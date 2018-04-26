## virtual dom
* vdom 是vue和React的核心，先讲那个都绕不开他
* vdom比较独立，使用也比较简单
* 如果面试问道vue和React和实现，免不了问vdom

## 问题
* vdom是什么？为何会存在vdom
* vdom的如何应用，核心API是什么
* 介绍一个diff算法

## 什么是vdom，为何使用vdom
* 什么是vdom
* 设计一个需求场景
* 用jquery实现
* 遇到的问题 

## 什么是vdom
	* virtual dom ， 虚拟DOM
	* 用JS模拟DOM结构
	* DOM变化的对比，放在JS层来做（图灵完备语言）
	* 提高重绘性能


## 遇到的问题
* DOM操作是 昂贵的 js运行效率高	
* 尽量减少DOM操作，而不是 推到重来
* 项目越复杂，影响就越严重
* vdom即可解决这个问题

## 问题解答
* virtual dom 虚拟dom
* 用js模拟DOM结构
* DOM操作非常昂贵
* 将DOM对比操作放在js层，提高效率

## vdom的如何应用，核心API是什么
* 介绍snabbdom
