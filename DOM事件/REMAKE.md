## DOM事件类
* 基本概念：DOM事件的级别
* DOM事件模型
* DOM事件流
* 描述DOM事件捕获的具体流程
* Event对象的常见应用
* 自定义事件

## 基本概念：DOM事件的级别
* DOM0 element.onclick=function() {}
* DOM2 element.addEventListener('click', function() {}, false)
* DOM3 element.addEventListener('keyup', function() {}, false)

## 事件模型
* 冒泡
* 捕获

## 事件流
* 从window 捕获到 目标阶段 然后 再冒泡到 window

## 描述DOM事件捕获的具体流程
* window -> document -> html -> body -> 目标元素 -> body -> html -> document -> window
* document.documentElement (html节点) 

## Event对象的常见应用
* event.preventDefault() 阻止默认行为
* event.stopPropagation() 阻止冒泡
* event.stopImmediatePropagation() 绑定两个click事件 当A点击的时候 不执行B 
* event.currentTarget 当前被点击元素 
* event.target 当前对象绑定事件的元素

## 自定义事件 （模拟事件） 自己要写会
