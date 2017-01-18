'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _WechatFriendMessageSteam = require('./WechatFriendMessageSteam');

var _WechatFriendMessageSteam2 = _interopRequireDefault(_WechatFriendMessageSteam);

var _WechatGroupMessageSteam = require('./WechatGroupMessageSteam');

var _WechatGroupMessageSteam2 = _interopRequireDefault(_WechatGroupMessageSteam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 微信所有消息数据流
 * @Author   alexayan
 * @DateTime 2017-01-18
 * @return {Steam}
 */
exports.default = _Rx2.default.Observable.merge(_WechatFriendMessageSteam2.default, _WechatGroupMessageSteam2.default); /**
                                                                                                                         * Created by alexyan on 2017年1月18日
                                                                                                                         * Copyright © 2017年 alexayan. All rights reserved.
                                                                                                                         */