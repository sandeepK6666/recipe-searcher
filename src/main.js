import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import './style.css'
import 'bootstrap'; // Import Bootstrap's JavaScript
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap's CSS
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';

createApp(App)
.use(router)
.use(store)
.mount('#app')
