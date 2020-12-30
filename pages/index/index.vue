<template>
	<view class="container">
		<v-tabs v-model="current" :tabs="tabs" @change="changeTab" class="tab"></v-tabs>
		<view class="coupon" ref="coupon">
			<view class="item" v-for="(v, i) in couponList" @click="toCoupon(i)" :key="i">
				<view class="top">
					<view class="left">
						<view class="content">
							<image :src="v.icon" class="icon" mode="widthFix" />
							<view class="name">{{ v.name }}</view>
						</view>
						<view class="text" v-if="v.type == 1">天天可领</view>
						<view class="text" v-else-if="v.type == 2">限时秒杀</view>
					</view>
					<view class="right">免费领取</view>
				</view>
				<view class="bottom"><image :src="v.bannerPic" mode="widthFix" /></view>
			</view>
		</view>
	</view>
</template>

<script>


export default {
	data() {
		return {
			current: 0,
			tabs: [],
			couponList: [],
			coupons: [],
			openid: ''
		};
	},
	onLoad(e) {
		this.getHome()
		//#ifdef H5
		let tabId = this.$route.query.tabId ? parseInt(this.$route.query.tabId) : 0
		//#endif
		//#ifdef MP-WEIXIN
		let tabId = e.tabId ? parseInt(e.tabId) : 0
		this.onSubscribe()
		//#endif
		for(let i in this.tabs){
			if(tabId == this.tabs[i].tabId){
				this.current = parseInt(i)
			}
		}
		this.changeTab(this.current)
	},
	onShareAppMessage(res) {
		return getApp().shareConfig()
	},
	methods: {
		onSubscribe() {
			try {
			    const openid = uni.getStorageSync('openid');
			    if (openid) {
					console.log('获取缓存openid');
			        console.log(openid);
					uni.showModal({
					    title: '订阅提示',
					    content: '点击一下订阅，避免错过一个亿!',
						cancelText: '不差钱',
						cancelColor: '#BEBEBE',
						confirmText: '订阅',
						confirmColor: '#007AFF',
					    success: function (res) {
					        if (res.confirm) {
					            console.log('订阅开始')
								// 活动开始提醒 模板
					            const lessonTmplId = 'hLV31-w38lq0yq8p6GEQUtBU7brtMrCFmaCCyxbU4xI';
								const data = {
					            		data: '外卖领券提醒, 快来领优惠券啦！',
					            		templateId: lessonTmplId,
					            		openid: openid,
					            		  };
					            console.log(data)
								// uni.showLoading({
								// 	title: '订阅中...',
								// });
								// setTimeout(function () {
								//     uni.hideLoading();
								// }, 2000);
								// 调用微信 API 申请发送订阅消息
					            wx.requestSubscribeMessage({
					            	// 传入订阅消息的模板id，模板 id 可在小程序管理后台申请
					            	tmplIds: [lessonTmplId],
					            	success(res) {
					            	  // 申请订阅成功
					            	  if (res.errMsg === 'requestSubscribeMessage:ok') {
					            		uni.request({
					            		  url: getApp().globalData.subscribe,
					            		  data: data,
					            		  success: (res) => {
					            			  wx.showToast({
					            				title: '订阅完成',
					            				image: '../../static/error.png',
					            				duration: 2000,
					            			  });
					            			},
					            		  fail(res) {
					            			console.log(res)
					            			wx.showToast({
					            			  title: '订阅失败',
					            			  icon: 'error',
					            			  duration: 2000,
					            			});
					            		  }
					            		});
					            	  }
					            	},
					            	
					            });
					        } else if (res.cancel) {
					            console.log('用户点击取消');
								wx.showToast({
								  title: '订阅失败',
								  image: '../../static/error.png',
								  duration: 2000,
								});
					        }
					    }
					});
			    }else{
					console.log('本地未获取到openid');
					uni.login({
						success: function(res) {
							if (res.code) {
								uni.getUserInfo({
									success: function(res)  {
										console.log('存在code');
									}
								});
								uni.request({
								    url: getApp().globalData.api.openid,
									data:{
										jsCode: res.code
									},
								    success: (res) => {
										console.log(res.data);
								        const openid = res.data.data.openid;
										uni.setStorage({
											key:"openid",
											data: openid
										});
										uni.showModal({
										    title: '订阅提示',
										    content: '点击一下订阅，避免错过一个亿!',
											cancelText: '不差钱',
											cancelColor: '#BEBEBE',
											confirmText: '订阅',
											confirmColor: '#007AFF',
										    success: function (res) {
										        if (res.confirm) {
										            console.log('订阅开始')
													// 活动开始提醒 模板
										            const lessonTmplId = 'hLV31-w38lq0yq8p6GEQUtBU7brtMrCFmaCCyxbU4xI';
													const data = {
										            		data: '外卖领券提醒, 快来领优惠券啦！',
										            		templateId: lessonTmplId,
										            		openid: openid,
										            		  };
										            console.log(data)
										            uni.showLoading({
										              title: '订阅中...',
										            });
													setTimeout(function () {
													    uni.hideLoading();
													}, 5000);
										            // 调用微信 API 申请发送订阅消息
										            wx.requestSubscribeMessage({
										            	// 传入订阅消息的模板id，模板 id 可在小程序管理后台申请
										            	tmplIds: [lessonTmplId],
										            	success(res) {
										            	  // 申请订阅成功
										            	  if (res.errMsg === 'requestSubscribeMessage:ok') {
										            		uni.request({
										            		  url: getApp().globalData.subscribe,
										            		  data: data,
										            		  success: (res) => {
										            			  wx.showToast({
										            				title: '订阅完成',
										            				icon: 'success',
										            				duration: 2000,
										            			  });
										            			},
										            		  fail(res) {
										            			console.log(res)
										            			wx.showToast({
										            			  title: '订阅失败',
										            			  image: '../../static/error.png',
										            			  duration: 2000,
										            			});
										            		  }
										            		});
										            	  }
										            	},
										            	
										            });
										        } else if (res.cancel) {
										            console.log('用户点击取消');
													wx.showToast({
													  title: '订阅失败',
													  image: '../../static/error.png',
													  duration: 2000,
													});
										        }
										    }
										});
								    }
								});	
							} else {
								console.log('获取用户登录态失败！' + res.errMsg);
							}
						}
					});
				}
			} catch (e) {
			    console.log('获取openid失败');
			}
			
		},
		changeTab(index) {
			console.log('当前选中的项：' + index);
			this.couponList = []
			uni.showLoading({
			    title: '获取优惠中'
			});
			if(index == 0){
				this.couponList = this.coupons
			}else{
				for(let i in this.coupons){
					if(this.coupons[i].tabId == this.tabs[index].tabId){
						this.couponList.push(this.coupons[i])
					}
				}
			}
			//#ifdef H5
			this.$nextTick(() => {
				this.$refs.coupon.scrollTop= 0;
			})
			//#endif
			setTimeout(() => {
				uni.hideLoading()
			}, 500)
		},
		toCoupon(i){
			console.log(this.couponList[i])
			//h5
			//#ifdef H5
			window.location.href = this.couponList[i].url
			//#endif
			//微信小程序
			//#ifdef MP-WEIXIN
			if(this.couponList[i].minapp){
				wx.navigateToMiniProgram({
				  appId: this.couponList[i].minapp.appid,
				  path: this.couponList[i].minapp.path,
				  success(res) {
					// 打开成功
				  }
				})
			}
			//#endif
		},
		getHome(){
			uni.request({
			    url: getApp().globalData.api.home,
			    success: (res) => {
			        this.tabs = res.data.data.tabs
					this.coupons = res.data.data.coupons
					this.changeTab(0)
			    }
			});
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f8f8f8;
}
.container {
	font-size: 14px;
	line-height: 24px;
	position: relative;
	.tab {
		position: fixed;
		top: var(--window-top);
		left: 0;
		z-index: 9999;
	}
	.coupon {
		padding-top: 200rpx;
		padding-bottom: 10rpx;
		.item {
			background-color: #ffffff;
			margin: 30rpx;
			border-radius: 10rpx;
			padding: 0 30rpx 30rpx 30rpx;
			.top {
				height: 116rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.left {
					height: 116rpx;
					width: 400rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.content {
						width: 100%;
					}
					.icon {
						display: inline-block;
						vertical-align: bottom;
						width: 52rpx;
						height: auto;
					}
					.name {
						text-align: left;
						display: inline-block;
						vertical-align: bottom;
						font-size: 34rpx;
						color: #000;
						line-height: 50rpx;
						font-weight: bold;
						margin-left: 15rpx;
					}
					.text {
						width: 150rpx;
						height: 38rpx;
						line-height: 38rpx;
						text-align: center;
						font-size: 24rpx;
						color: #61300e;
						background: linear-gradient(90deg, #f9db8d, #f8d98a);
						border-radius: 6rpx;
					}
				}

				.right {
					width: 170rpx;
					height: 60rpx;
					border-radius: 30rpx;
					background: linear-gradient(90deg, #ec6f43, #ea4a36);
					color: #fff;
					font-size: 28rpx;
					line-height: 60rpx;
					text-align: center;
				}
			}

			.bottom {
				height: auto;
				width: 100%;
				image {
					display: block;
					width: 100%;
					height: auto;
				}
			}
		}
	}
}
</style>
