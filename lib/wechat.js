'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weixinbot = require('weixinbot');

var _weixinbot2 = _interopRequireDefault(_weixinbot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bot = new _weixinbot2.default(); /**
                                      * Created by alexyan on 2017年1月18日
                                      * Copyright © 2017年 alexayan. All rights reserved.
                                      */

exports.default = bot;

// if (msg.MsgType === CODES.MSGTYPE_SYSNOTICE) {
//   return;
// }

// switch (msg.MsgType) {
//   case CODES.MSGTYPE_APP:
//     break;
//   case CODES.MSGTYPE_EMOTICON:
//     break;
//   case CODES.MSGTYPE_IMAGE:
//     break;
//   case CODES.MSGTYPE_VOICE:
//     break;
//   case CODES.MSGTYPE_VIDEO:
//     break;
//   case CODES.MSGTYPE_MICROVIDEO:
//     break;
//   case CODES.MSGTYPE_TEXT:
//     try {
//       await this.sendText(msg.FromUserName, msg.Content);
//     } catch (e) {
//       console.error(e);
//     }
//     break;
//   case CODES.MSGTYPE_RECALLED:
//     break;
//   case CODES.MSGTYPE_LOCATION:
//     break;
//   case CODES.MSGTYPE_VOIPMSG:
//   case CODES.MSGTYPE_VOIPNOTIFY:
//   case CODES.MSGTYPE_VOIPINVITE:
//     break;
//   case CODES.MSGTYPE_POSSIBLEFRIEND_MSG:
//     break;
//   case CODES.MSGTYPE_VERIFYMSG:
//     break;
//   case CODES.MSGTYPE_SHARECARD:
//     break;
//   case CODES.MSGTYPE_SYS:
//     break;
//   default:
// }