import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Mint from 'mint-ui';
// Vue.use(Mint);
//  import 'mint-ui/lib/style.css'; 



Vue.config.productionTip = false
// // 导入组件库
import ValidateData from 'validatedemo1'
// // 注册组件库
Vue.use(ValidateData)
// 源代码入口文件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
