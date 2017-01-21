/**
 * Created by alexyan on 2017年1月19日
 * Copyright © 2017年 alexayan. All rights reserved.
 */
 
import db from './db';
import Rx from 'rxjs/Rx';
import schedule from 'node-schedule';

const REMIND_TIME = '30 7 * * 1,2,3,4,5';

const UserRemindSteam = Rx.Observable.create((observer)=>{
	schedule.scheduleJob(REMIND_TIME, function(){
		observer.next('remind');
	});
}).flatMap(()=>{
	return Rx.Observable.bindNodeCallback(db.find.bind(db))({});
}).flatMap((reminds)=>{
	return Rx.Observable.from(reminds);
});

function getDelay(){
	let today = new Date();
	return new Date(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${REMIND_TIME}`).getTime() - today.getTime();
}

export default UserRemindSteam;