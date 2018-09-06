import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '../static/css/iconfont/1.0.0/index.css' // icofont

import echarts from 'echarts' // Echarts
Vue.prototype.$echarts = echarts
import 'echarts/theme/macaron.js'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/styles/index.scss' // 全局 css
import './mock' // mock 数据
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'

import { loadStyle } from './utils/util'
import {
  iconfontUrl,
  iconfontVersion } from '@/config/env'

import '@/icons'
import '@/permission'

import * as filters from './filters' // 全局 filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(ElementUI, { locale })
iconfontVersion.forEach(ele => { loadStyle(iconfontUrl.replace('$key', ele)) })
Vue.use(ElementUI, {
  size: 'medium'
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
