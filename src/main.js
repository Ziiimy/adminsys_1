import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import router from './router';

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
