<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		const userInfo = uni.getStorageSync('userInfo');
		if(userInfo){
			this.globalData.userInfo = userInfo
		}
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	globalData: {
		api: {
			home: 'https://728da630-a10b-4780-b26e-30aa5aec7ee7.bspapp.com/http/api/home',
			openid: 'https://728da630-a10b-4780-b26e-30aa5aec7ee7.bspapp.com/http/api/openid',
		},
		subscribe: 'https://728da630-a10b-4780-b26e-30aa5aec7ee7.bspapp.com/http/subscribe',
		openid: '',
		userInfo: '',
	},
	methods: {
		shareConfig(){
			var messages = [{
				title: '美团饿了么大额红包，每日可领！',
				path: '/pages/index/index',
				imageUrl : 'https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png',
				imageUrl : 'https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png',
			},{
				title: '吃了这么多年外卖，你知道这个秘密吗？',
				path: '/pages/index/index',
				imageUrl : 'https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png'
			},{
				title: '这样点外卖，一年省下一个亿',
				path: '/pages/index/index',
				imageUrl : 'https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png'
			},{
				title: '点外卖前先领券，吃霸王餐',
				path: '/pages/index/index',
				imageUrl : 'https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png'
			},{
				title: '美团饿了么内部优惠券，手慢无',
				path: '/pages/index/index',
				imageUrl : 'https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png'
			},{
				title: '点外卖不用优惠券，你就out了',
				path: '/pages/index/index',
				imageUrl : 'https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png'
			},{
				title: '外卖不为人知的秘密，点这解密',
				path: '/pages/index/index',
				imageUrl : 'https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png'
			},{
				title: '震惊！小伙点外卖竟然花了1分钱',
				path: '/pages/index/index',
				imageUrl : 'https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png'
			},{
				title: '从这点外卖，你也可以吃霸王餐',
				path: '/pages/index/index',
				imageUrl : 'https://upload-images.jianshu.io/upload_images/302100-d28345a30e3c51c7.png'
			}];
			return messages[Math.floor(Math.random()*messages.length)];
		}
	}
};
</script>

<style>

</style>
