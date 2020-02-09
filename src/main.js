import Vue from 'vue'
import App from './App.vue'
import { Navbar, Input, Button } from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Navbar)
Vue.use(Input)
Vue.use(Button)

new Vue({
  render: h => h(App),
}).$mount('#app')
