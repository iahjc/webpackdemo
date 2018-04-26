## MVVM
* 如何理解MVVM
* 如何实现MVVM
* 是否解读过vue的源码

## 题目
* 说一下使用jquery和使用框架的区别
* 说一下对MVVM的理解
* vue中如何实现响应式
* vue中如何解析模板
* vue的整个实现流程

## 说一下使用jquery和使用框架的区别
* jquery实现todo-list
* vue实现todo-list
* jQuery和框架的区别

## 两者的区别
* 数据和视图的分离 解耦 （开放封闭原则）
* 以数据驱动视图 只关心数据变化 DOM操作被封装

## 说一下对MVVM的理解
* mvc
* MVVM
* 关于view module

## MVVM
* Model - 模型，数据
* View - 视图，模板（视图和模型是分离的）
* viewModel - 连接Model和View

## 关于ViewModel
* MVVM不算是一种创新
* 但其中的ViewModel确实是一种创新
* 真正结合前端场景应用的创建

## MVVM框架的三大要素
* 响应式：vue如何监听到data的每个属性变化
* 模板引擎: vue的模板如何被解析，指令如何处理？
* 渲染： vue的模板如何被渲染成html？以及渲染的过程

## 响应式：vue如何监听到data的每个属性变化
	* Object.defineProperty
	* 怎么将data的属性代理到vm上
	* 详见案例

## vue中如何解析模板，指令如何处理？
* 模板是什么
	* 本质： 字符串
	* 有逻辑，如 v-if v-for等
	* 与html格式很像，但有很大区别
	* 最终还是要转换为html来显示

	* 模板最终必须转换为js代码，因为：
		* 有逻辑(v-if v-for),必须用js才能实现(图灵完备)
		* 转换为html渲染页面，必须用js才能实现
		* 隐藏，模板最重要转换成一个js函数(render函数)
* render函数
	* with的用法（with尽量不要用）
	* 模板的所有信息都包含在render函数
* render函数与vdom	


## vue的整个实现流程
* 第一步：解析模板成render函数
* 第二部：响应式开始监听
* 第三部： 首次渲染，显示页面，且绑定依赖
* 第四部：data属性变化，触发rerender
