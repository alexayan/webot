/**
 * Created by alexyan on 2017年1月19日
 * Copyright © 2017年 alexayan. All rights reserved.
 */
 
import frientMessageSteam from '../../steams/WechatFriendMessageSteam';
import Rx from 'rxjs/Rx';
import db from './db';

const DEFAULT_REMINDER_CANCEL_KEY = '取消晚餐提醒';

const ReminderCancelSteam = frientMessageSteam.filter((msg)=>{
	let content = msg.Content.replace(/^\s+|\s+$/, '');
	if(content === DEFAULT_REMINDER_CANCEL_KEY){
		return true;
	}
}).flatMap((msg)=>{
	return Rx.Observable.bindNodeCallback(db.remove.bind(db))({ name: msg.FromUserName }, {}).map((data)=>{
		return {
			rtn : data,
			msg : msg
		};
	});
});

export default ReminderCancelSteam;