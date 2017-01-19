/**
 * Created by alexyan on 2017年1月19日
 * Copyright © 2017年 alexayan. All rights reserved.
 */
 
import cache from 'memory-cache';

const SESSION_PERIOD = 60*1000*3;

let sessions = {};

class SimsimiSession {

	constructor(name, callback){
		this.id = `${name}_simsimi_session`;
		this.name = name;
		this.callback = callback || (()=>{});
	}

	startSession(){
		cache.put(this.id, {name : this.name}, SESSION_PERIOD, this.callback)
	}

	endSession(){
		let cur = cache.get(this.id);
		if(cur){
			cache.del(this.id);
			this.callback(this.id, cur);
		}
	}

	isInSession(){
		let cur = cache.get(this.id);
		return !!cur;
	}

}

export default (name, callback)=>{
	let session = sessions[name];
	if(!session){
		session = new SimsimiSession(name, callback);
		sessions[name] = session;
	}
	return session;
};