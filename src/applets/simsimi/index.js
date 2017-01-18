import frientMessageSteam from '../../steams/WechatFriendMessageSteam';

frientMessageSteam.subscribe((msg)=>{
	console.log(msg);
});