// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import mToast from '@/base/m-toast'
import '@/assets/css/reset.less'
import '@/assets/css/index.less'

// 网络请求
Vue.prototype.$http = axios

// 优化移动端的300ms延迟
fastclick.attach(document.body)

// 懒加载
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('./assets/img/default.png')
})

// 弹出层
Vue.use(mToast)

// webpack打包优化
const isDebug_mode = process.NODE_ENV !== 'production'
Vue.config.silent = isDebug_mode
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode

// 版权信息
const pkg = require('../package.json')
window.mPlayer = `
  欢迎使用mPlayer,
  当前的版本是${pkg.version},
  作者： Eavan
`
console.info(`%c${mPlayer}`, `color: blue`)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
