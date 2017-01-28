/**
 * Created by alexyan on 2017年1月18日
 * Copyright © 2017年 alexayan. All rights reserved.
 */
 
import axios from 'axios';

const KEY = '77c621a8-d60e-4b60-861f-e1e7554be54f';

/**
 * 获取 simsimi 回复
 * @Author   alexayan
 * @DateTime 2017-01-18
 * @param    {String}   word 对话请求内容
 * @return   {Promise}       
 */
module.exports = (word) => {
	let url = `http:\/\/sandbox.api.simsimi.com/request.p?key=${KEY}&lc=zh&text=${word}`;
	return axios.get(url);
};