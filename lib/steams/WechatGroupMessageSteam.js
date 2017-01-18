'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _wechat = require('../wechat');

var _wechat2 = _interopRequireDefault(_wechat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 微信组消息数据流
 * @Author   alexayan
 * @DateTime 2017-01-18
 * @return {Steam}
 */
/**
 * Created by alexyan on 2017年1月18日
 * Copyright © 2017年 alexayan. All rights reserved.
 */

exports.default = _Rx2.default.Observable.create(function (observer) {
  _wechat2.default.on('group', function (msg) {
    observer.next(msg);
  });
});