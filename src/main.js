// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/fonts/reset.css'
import 'styles/fonts/iconfont.css'
import filter from './filter'
import store from '@/store'
import Vconsole from 'vconsole'
let vConsole = new Vconsole()
export default vConsole
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(elementUi)
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  el: '#app',
  router,
  filter,
  store,
  components: { App },
  template: '<App/>'
})
