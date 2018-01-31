import Vue from 'vue';
import Vuetify from 'vuetify';

// polyfill for async/await in js files
import 'babel-polyfill'

Vue.config.productionTip = false;
Vue.use(Vuetify);

jest.disableAutomock();
