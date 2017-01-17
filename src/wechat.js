import Weixinbot from 'weixinbot';
import simsimi from './webservice/simsimi';

const bot = new Weixinbot({
	receiver : '773655223@qq.com'
});

let botMap = {

};

bot.on('qrcode', console.log);

bot.on('friend', (msg) => {
  console.log(msg.Member.NickName + ': ' + msg.Content);
  let content = msg.Content.replace(/^\s+|\s+$/,'');
  if(bot.my.UserName == msg.FromUserName){
  	if(content == 'sleep'){
  		botMap[msg.ToUserName] = true;
  	}
  	if(content == 'wake'){
  		botMap[msg.ToUserName] = false;
  	}
  	return;
  }
  if(content=='disconnect'){
  	botMap[msg.FromUserName] = true;
  	bot.sendText(msg.FromUserName, 'disconnected');
  }
  if(!botMap[msg.FromUserName]){
  	simsimi(encodeURIComponent(content)).then((data)=>{
  		if(data.data.response){
 			console.log(data.data.response);
  			bot.sendText(msg.FromUserName, data.data.response);
  		}else{
  			bot.sendText(msg.FromUserName, 'errrrrrro...');
  		}
  	});
  }
  if(content=='connect'){
  	botMap[msg.FromUserName] = false;
  	bot.sendText(msg.FromUserName, 'connected');
  }
});

bot.on('group', (msg) => {
	console.log(`${msg.GroupMember.DisplayName || msg.GroupMember.NickName}: ${msg.Content} \n`);
});

bot.run();

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