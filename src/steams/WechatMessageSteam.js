/**
 * Created by alexyan on 2017年1月18日
 * Copyright © 2017年 alexayan. All rights reserved.
 */

import Rx from 'rxjs/Rx';
import friendStream from './WechatFriendMessageSteam';
import groupStream from './WechatGroupMessageSteam';

/**
 * 微信所有消息数据流
 * @Author   alexayan
 * @DateTime 2017-01-18
 * @return {Steam}
 */
export default Rx.Observable.merge(friendStream, groupStream);