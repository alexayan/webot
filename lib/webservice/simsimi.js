'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY = 'b447c136-a2ee-4f35-a082-0436cf8afcae';

module.exports = function (word) {
	var url = 'http://sandbox.api.simsimi.com/request.p?key=' + KEY + '&lc=zh&text=' + word;
	return _axios2.default.get(url);
};