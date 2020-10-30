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
			tabs: [
				{
					icon: '/static/all.png',
					text: '全部'
				},
				{
					icon: '/static/ele.png',
					text: '饿了么'
				},
				{
					icon: '/static/meituan.png',
					text: '美团'
				},
				{
					icon: '/static/jd.png',
					text: '京东'
				},
				{
					icon: '/static/vip.png',
					text: 'VIP会员'
				}
			],
			couponList: [],
			coupons: [
				{
					name: '饿了么红包',
					icon: '/static/coupon/ele.png',
					bannerPic: '/static/coupon/ele_banner.png',
					url: 'https://s.click.ele.me/frZOjvu',
					type: 1,
					tabId: 1
				},
				{
					name: '美团外卖红包',
					icon: '/static/coupon/meituan.png',
					bannerPic: '/static/coupon/meituan_banner.png',
					url:'https://runion.meituan.com/url?key=cd23768d09c339d1641b2738df39aa67&url=https%3A%2F%2Fi.meituan.com%2Fawp%2Fhfe%2Fblock%2Fa945391288b790d558b7%2F78716%2Findex.html%3Fappkey%3Dcd23768d09c339d1641b2738df39aa67%3Ajuhe&sid=juhe',
					type: 1,
					tabId: 2
				},
				{
					name: '爱奇艺会员',
					icon: '/static/coupon/vip.png',
					bannerPic: '/static/coupon/vip_banner.png',
					url:'https://p.pinduoduo.com/VJ7bHo5d',
					type: 2,
					tabId: 4
				},
				{
					name: '三只松鼠大礼包',
					icon: '/static/coupon/jd.png',
					bannerPic: '/static/coupon/sanzhisongshu.png',
					url:'https://u.jd.com/tFDejq',
					type: 0,
					tabId: 3
				},
				{
					name: '饿了么果蔬',
					icon: '/static/coupon/ele.png',
					bannerPic: '/static/coupon/ele_guosu.png',
					url:'https://s.click.ele.me/RpRFhvu',
					type: 1,
					tabId: 1
				},
			]
		};
	},
	onLoad() {
		let tabId = this.$route.query.tabId ? parseInt(this.$route.query.tabId) : 0
		this.current = tabId
		this.changeTab(tabId)
	},
	methods: {
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
					if(this.coupons[i].tabId == index){
						this.couponList.push(this.coupons[i])
					}
				}
			}
			this.$nextTick(() => {
				this.$refs.coupon.scrollTop= 0;
			})
			setTimeout(() => {
				uni.hideLoading()
			}, 500)
		},
		toCoupon(i){
			console.log(this.couponList[i].url)
			window.location.href = this.couponList[i].url
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
