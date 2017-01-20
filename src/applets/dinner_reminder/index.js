/**
 * Created by alexyan on 2017年1月19日
 * Copyright © 2017年 alexayan. All rights reserved.
 */
 
import wechat from '../../wechat';
import ReminderCancelSteam from './ReminderCancelSteam';
import ReminderSetSteam from './ReminderSetSteam';
import UserRemindSteam from './UserRemindSteam';

ReminderCancelSteam.subscribe((data)=>{
	wechat.sendText(data.msg.FromUserName, '晚餐提醒取消成功');
}, (err)=>{
	console.log(err);
	wechat.sendText(data.msg.FromUserName, '晚餐提醒取消失败');
});

ReminderSetSteam.subscribe((data)=>{
	wechat.sendText(data.msg.FromUserName, '晚餐提醒设置成功');
}, (err)=>{
	console.log(err);
	wechat.sendText(data.msg.FromUserName, '晚餐提醒设置失败');
});

UserRemindSteam.subscribe((data)=>{
	wechat.sendText(data.name, '快预定晚餐吧:)');
});