import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//iview ui
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI)

//axios
import axios from 'axios'
Vue.prototype.$http=axios;

//Mock
import './../mock/api_user_login.js'

Vue.config.productionTip = false

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
