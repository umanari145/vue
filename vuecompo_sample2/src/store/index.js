import Vue from 'vue';
import Vuex from 'vuex';
import example from './example.js'

Vue.use(Vuex);

const module = {
    modules:{
        example
    }
}

export default new Vuex.Store(module);
