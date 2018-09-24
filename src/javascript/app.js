import Vue from 'vue';
import Notifications from 'vue-notification';
import { dom, config, library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faHome, faUser, faUsers, faCubes, faAngleRight, faArrowRight,
         faArrowLeft, faTimes, faCheckCircle, faExclamationTriangle,
         faInfoCircle, faExclamationCircle, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './components/App';

Vue.use(Notifications);

config.searchPseudoElements = true;

dom.watch();

library.add(faBell, faHome, faUser, faUsers, faCubes, faAngleRight,
            faArrowRight, faArrowLeft, faTimes, faCheckCircle, faExclamationTriangle,
            faInfoCircle, faExclamationCircle, faArrowDown, faArrowUp);

Vue.component('Fa', FontAwesomeIcon);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
