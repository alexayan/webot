/**
 * Created by alexyan on 2017年1月19日
 * Copyright © 2017年 alexayan. All rights reserved.
 */

import wechat from '../../wechat';
import frientMessageSteam from '../../steams/WechatFriendMessageSteam';
import Session from './session';
import simsimi from '../../webservice/simsimi';

const DEFAULT_WAKE_KEY = '小黄鸡';
const DEFAULT_SLEEP_KEY = '再见';


frientMessageSteam.subscribe((msg)=>{
	if(msg.Member.ContactFlag===3){
		return;
	}
	let content = msg.Content.replace(/^\s+|\s+$/, '');
	let session = getSession(msg.FromUserName);
	if(content===DEFAULT_WAKE_KEY){
		session.startSession();
	}
	if(content===DEFAULT_SLEEP_KEY){
		session.endSession();
	}
	if(session.isInSession()){
		simsimi(encodeURIComponent(content)).then((data)=>{
	  		if(data.data.response){
	 			console.log(data.data.response);
	  			wechat.sendText(msg.FromUserName, data.data.response);
	  		}else{
	  			wechat.sendText(msg.FromUserName, '不明白你在说什么:(');
	  		}
	  	});
	}
});

function getSession(name){
	return Session(name, ()=>{
		wechat.sendText(name, 'bye');
	});
}