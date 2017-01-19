/**
 * Created by alexyan on 2017年1月18日
 * Copyright © 2017年 alexayan. All rights reserved.
 */
 
 import messageSteam from './WechatMessageSteam';
 import wechat from '../wechat';

/**
 * 微信文本消息数据流
 * @Author   alexayan
 * @DateTime 2017-01-18
 * @return   {Steam}
 */
 export default messageSteam.filter((msg)=>{
 	if(msg.MsgType === wechat.MSGTYPE_TEXT){
 		return true;
 	}
 });