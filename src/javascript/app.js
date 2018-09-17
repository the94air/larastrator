import Vue from 'vue';
import { dom, config, library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faHome, faUser, faUsers, faCubes, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './components/App';

config.searchPseudoElements = true;

dom.watch();

library.add(faBell, faHome, faUser, faUsers, faCubes, faAngleRight);

Vue.component('Fa', FontAwesomeIcon);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
