/**
 * Created by alexyan on 2017年1月18日
 * Copyright © 2017年 alexayan. All rights reserved.
 */
 
import Rx from 'rxjs/Rx';
import wechat from '../wechat';

/**
 * 微信qr码数据流
 * @Author   alexayan
 * @DateTime 2017-01-18
 * @return {Steam}
 */
export default Rx.Observable.create((observer)=>{
  wechat.on('qrcode', (qr)=>{
    observer.next(qr);
  });
});