import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import axios from 'axios';
import router from './router'
import service from './untils/service'
Vue.config.productionTip = false
Vue.prototype.service = service
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
