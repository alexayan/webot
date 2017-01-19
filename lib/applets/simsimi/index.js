'use strict';

var _wechat = require('../../wechat');

var _wechat2 = _interopRequireDefault(_wechat);

var _WechatFriendMessageSteam = require('../../steams/WechatFriendMessageSteam');

var _WechatFriendMessageSteam2 = _interopRequireDefault(_WechatFriendMessageSteam);

var _session = require('./session');

var _session2 = _interopRequireDefault(_session);

var _simsimi = require('../../webservice/simsimi');

var _simsimi2 = _interopRequireDefault(_simsimi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by alexyan on 2017年1月19日
 * Copyright © 2017年 alexayan. All rights reserved.
 */

var DEFAULT_WAKE_KEY = '小黄鸡';
var DEFAULT_SLEEP_KEY = '再见';

_WechatFriendMessageSteam2.default.subscribe(function (msg) {
	//只处理一级好友消息
	var content = msg.Content.replace(/^\s+|\s+$/, '');
	var session = getSession(msg.FromUserName);
	if (content === DEFAULT_WAKE_KEY) {
		session.startSession();
	}
	if (content === DEFAULT_SLEEP_KEY) {
		session.endSession();
	}
	if (session.isInSession()) {
		(0, _simsimi2.default)(encodeURIComponent(content)).then(function (data) {
			if (data.data.response) {
				console.log(data.data.response);
				_wechat2.default.sendText(msg.FromUserName, data.data.response);
			} else {
				_wechat2.default.sendText(msg.FromUserName, '不明白你在说什么:(');
			}
		});
	}
});

function getSession(name) {
	return (0, _session2.default)(name, function () {
		_wechat2.default.sendText(name, 'bye');
	});
}