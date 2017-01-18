'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY = 'b447c136-a2ee-4f35-a082-0436cf8afcae';

/**
 * 获取 simsimi 回复
 * @Author   alexayan
 * @DateTime 2017-01-18
 * @param    {String}   word 对话请求内容
 * @return   {Promise}       
 */
/**
 * Created by alexyan on 2017年1月18日
 * Copyright © 2017年 alexayan. All rights reserved.
 */

module.exports = function (word) {
  var url = 'http://sandbox.api.simsimi.com/request.p?key=' + KEY + '&lc=zh&text=' + word;
  return _axios2.default.get(url);
};