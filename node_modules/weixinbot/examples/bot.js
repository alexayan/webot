require('reify');
require('async-to-gen/register');

const Weixinbot = require('../src/weixinbot');

const bot = new Weixinbot();

bot.on('qrcode', console.log);

bot.on('friend', (msg) => {
  console.log(msg.Member.NickName + ': ' + msg.Content);
  bot.sendText(msg.FromUserName, 'Got it');
});

bot.run();
