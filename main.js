import Vue from 'vue'
import App from './App'
import { toast, loading, toLogin, toBack, toHome } from './common/global.js'

Vue.config.productionTip = false

Vue.prototype.$loading = loading
Vue.prototype.$toast = toast
Vue.prototype.$toLogin = toLogin
Vue.prototype.$toBack = toBack
Vue.prototype.$toHome = toHome

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
