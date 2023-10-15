import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueCookies from 'vue3-cookies';

import './assets/main.css';
import 'tailwindcss/tailwind.css'

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.use(VueCookies, {
  expireTimes: '30d',
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None'
});

app.mount('#app');
