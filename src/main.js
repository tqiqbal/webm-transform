import Vue from 'vue'
import App from './App.vue'
import { Navbar, Input, Button, Loading } from 'buefy'
import 'buefy/dist/buefy.css'


Vue.config.productionTip = false
Vue.use(Navbar)
Vue.use(Input)
Vue.use(Button)
Vue.use(Loading)

new Vue({
  render: h => h(App),
}).$mount('#app')
