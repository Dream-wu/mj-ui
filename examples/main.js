import Vue from 'vue'
import App from './App.vue'
import MjUI from '../packages'

// import './assets/icon.scss'

Vue.use(MjUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
