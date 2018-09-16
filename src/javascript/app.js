import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faHome, faUser, faUsers, faCubes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './components/App';

library.add(faBell, faHome, faUser, faUsers, faCubes);

Vue.component('Fa', FontAwesomeIcon);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
