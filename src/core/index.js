import Vue from 'vue';
import Pulse from 'pulse-framework';

import collections from './collections';

const library = {
    // pulse config
    config: {
        framework: Vue,
        mapDataUnderPropName: 'pulse'
    },
    data: {
        foo: 'bar'
    },
    persist: ['foo'],
    collections,
    onReady() {
        console.log('hi!')
    }
};

// create Pulse instance
const pulse = new Pulse(library);

export default pulse;