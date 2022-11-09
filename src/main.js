import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxiosPlugin from 'vue-axios-plugin'
import vantConfig from '../vant-config'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import wotui from './wotui'
// 这是我们自己写的vue插件,用于循环添加 wot-design 按需引入组件
Vue.use(wotui)


Vue.use(ElementUI);

Vue.use(VueAxiosPlugin, {
  // 请求拦截处理
  reqHandleFunc: config => ({
    ...config,
    baseURL: 'https://apis.netstart.cn/mogujie/',
  }),
  reqErrorFunc: error => Promise.reject(error),
  // 响应拦截处理
  resHandleFunc: ({
    data
  }) => data,
  resErrorFunc: error => Promise.reject(error)
})

Vue.config.productionTip = false

Vue.use(vantConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')