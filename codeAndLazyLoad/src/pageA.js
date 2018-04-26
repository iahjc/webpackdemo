// import './subPageA'
// import './subPageB'
require.include('./moduleA')

let page = 'subpageA'

if (page === 'subpageA') {
	require.ensure(['./subPageA'], function() {
		var subpageA = require('./subPageA')
	}, 'subPageA')
} else if (page === 'subPageB') {
	require.ensure(['./subPageB'], function() {
		var subpageA = require('./subPageB')
	}, 'subPageB')
}


require.ensure([], function() {
	var _ = require('jquery')
	_('body').style.backgroundColor="#ccc"
}, 'vendor')

export default 'pageA'