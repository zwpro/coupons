'use strict';
const response = require('response')
const homeModel = require('./models/home')
const getOpenId = require('./models/openid')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	var resp = {}
	//简单路由判断
	switch (event.path) {
		//首页
		case '/home':
			var homeModelTabs = await homeModel.tabs()
			resp.tabs = homeModelTabs.data
			var homeModelCoupons = await homeModel.coupons()
			resp.coupons = homeModelCoupons.data
			return response.success(resp)
			break;
		case '/openid':
			var openid = await getOpenId(event.queryStringParameters.jsCode)
			resp.openid = openid
			return response.success(resp)
			break;
		default:

	}
	//返回数据给客户端
	return response.success()
};
