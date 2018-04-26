## css盒模型
* 谈谈你对css盒模型的认识


## css盒模型
* 基本概念：标准模型+IE模型
* 标准模型和IE模型的区别 （计算高度和宽度的不同）
* css如何设置这两种模型
* js如何设置获取盒模型对应的宽和高
* 实例题 （根据盒模型解释边距重叠）
* BFC （边距重叠解决方案）
* IFC

## 基本概念：标准模型+IE模型
* 标准模型 width（content）
* IE模型: width + border + padding 

## 标准模型和IE模型的区别 （计算高度和宽度的不同）
* 标准模型和ie模型计算内容区不一样

## css如何设置这两种模型
* box-sizing: content-box 浏览器默认
* box-sizing: border-box IE模型

## js如何设置获取盒模型对应的宽和高
* dom.style.width/height (获取内联属性)
* dom.currentStyle.width/height (浏览器渲染完毕后的) 只有IE支持
* window.getComputedStyle(dom).width/height  其他的写法 firefix chrome
* dom.getBoundingClientRect().width/height 获取元素屏幕的位置

## 实例题 （根据盒模型解释边距重叠）需要仔细研究写实例
* 两个子元素 下边距 和 上边距会发生重叠 取最大的
* 父子元素之间 子元素100px 子元素居父元素10px 计算高度 （需要看父元素的盒模型怎么设置）

## BFC （边距重叠解决方案）
* BFC的基本概念
	* 块级格式化上下文，他是指一个独立的块级渲染区域，只要Block-level Box参与，该区域拥有一套渲染规则来约束块级盒子的布局，且与区域外部无关。
* BFC的生成
	* 以下声明会生成BFC
		* 跟元素或其他包含他的元素
		* float的值不为none
		* overflow的值不为visible
		* position的值不为static
		* display的值为inline-block,table-cell,table-caption
		* flex boxes(元素的display: flex 或者 inline-flex)
* BFC的布局规则
	* 内部的元素会在垂直方向一个接一个地排列，可以理解为是BFC的一个常规流
	* 元素垂直方向的距离有margin决定，即属于同一个BFC的两个相邻盒子的margin可能会发生重叠
	* 每个元素的左外边距与包含块左边界相接触(从左往右，否则相反)，即使存在浮动也是如此，这说明BFC中的子元素不会超出他
	* BFC的区域不会与float元素区域重叠
	* 计算BFC的告诉时，浮动子元素也会参与计算
	* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然		
* BFC的原理
* 如何创建BFC
* BFC的使用场景
	* 解决margin重叠问题
	* 解决浮动问题
	* 解决侵占浮动元素的问题
		* 浮动元素会脱离文档流，然后覆盖在文档流元素上
		* 我们为非浮动元素建立BFC环境，根据BFC的不与float box重叠的规则，解决了侵占元素问题。
