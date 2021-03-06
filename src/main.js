import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vuelidate from './plugins/vuelidate'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  vuelidate,
  render: h => h(App)
}).$mount('#app')
