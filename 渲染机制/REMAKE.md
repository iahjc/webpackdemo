## 渲染机制
* 什么是DOCTYPE及作用
	* DTD (文档类型定义) 是一些列的语法规则，用来定义XML或(X)HTML的文件类型。
	* 浏览器会使用他来判断文档类型，决定使用何种协议来解析。
	* 以及切换浏览器模式

	* DOCTYPE是用来声明文档类型和DTD规范的，一个主要的用途便是文件的合法性验证。
	* 如果文件代码不合法，那么浏览器解析时便会出现一个差错。
* 浏览器渲染过程
* 重排Reflow
	* DOM结构中的各个元素都有自己的盒子模型，这些都需要浏览器根据各种样式来计算并根据计算结构
	* 将元素放到他该出现的位置，这个过程称为reflow
* 触发Reflow
	* 当你增加，删除，修改DOM节点是，会导致Reflow 或者 Repaint
	* 当你移动DOM的位置，或是搞个动画的时候
	* 当你修改css样式的时候
	* 当你Resize窗口的时候(移动端没有这个问题)，或是滚动的时候
	* 当你修改页面默认字体时。
* 重绘Repaint
	* 当各种盒子的位置，大小以及其它属性，例如颜色，字体大小等都确定下来后，浏览器于是便把这些
	* 元素都按照各种的特性绘制了一便，于是页面内容出现了，这个过程称之为repaint
* 触发Repaint
	* DOM改动
	* CSS改动
* 布局layout