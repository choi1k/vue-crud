import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false;

const app = createApp(App)
app.use(router).mount('#app')


// new Vue({
//     el: '#app',
//     router,
//     components: { App },
//     template: '<App/>'
//   });
  