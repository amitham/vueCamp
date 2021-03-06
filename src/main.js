import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import router from './router';
import store from './store/store';
// global styles
import './styles.css';
import 'prismjs/themes/prism-okaidia.css';
// plugin modules
import 'prismjs';
import { Button, Icon, Layout, Menu, Input } from 'ant-design-vue';
// custom directives
import './directives/highlight';

Vue.config.productionTip = false;

// register library modules with Vue
Vue.use(Router);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Input);

// Vue App Instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
