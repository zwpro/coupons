'use strict';
// 后台获取openid
const utils = require('utils')
async function getOpenId(jsCode){
	const appid = utils.APPID;
	const secret = utils.SECREAT;
	const url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + jsCode + '&grant_type=authorization_code';
	console.log(url)
	const sendres = await uniCloud.httpclient.request(url,
	{	
		data: {},
		method: 'GET',
		contentType: 'json',
		dataType:"json",
	}
	);
	console.log(sendres.data.openid);
	return sendres.data.openid;
};

module.exports = getOpenId;