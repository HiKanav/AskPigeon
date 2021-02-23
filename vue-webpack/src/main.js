import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routes'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

// Axios Prefix
Vue.axios.defaults.baseURL = `${process.env.VUE_APP_BACKEND_URL}api`
Vue.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
