import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'; 

// // 导入组件库
// import ValidateData from './../packages/index'
// // 注册组件库
// Vue.use(ValidateData)

// 导入组件库
import demo from '../packages/index';
// 注册组件库
Vue.use(demo);

Vue.config.productionTip = false

// 源代码入口文件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
