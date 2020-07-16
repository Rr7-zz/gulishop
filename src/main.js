import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import TypeNav from '@/components/TypeNav'
import '@/mock/mokeServer'

//这个是为了测试接口请求函数 后期也会使用这样的方式去使用

//console.log(API)
//API.reqBannerList()


//这个是为了测试接口请求函数 后期也会使用这一的方式去使用
// import * as API from '@/api'

Vue.config.productionTip = false

Vue.component('TypeNav',TypeNav)


new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
