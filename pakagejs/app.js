// es6 
import sum from './sum'
console.log('sum(23, 24) = ', sum(23, 24))

// common.js
let minus = require('./minus')

console.log('minus(24, 17) = ', minus(24, 17))

// amd 异步加载模块
require(['./muti'], function (muti) {
	console.log('muti(2, 3) = ', muti(2, 3))
})