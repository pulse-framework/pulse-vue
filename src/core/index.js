import Vue from 'vue';
import Pulse from 'pulse-framework';

import config from './config';

Pulse.use(Vue);

let pulse = new Pulse(config);

Vue.use(Pulse);

export default pulse;