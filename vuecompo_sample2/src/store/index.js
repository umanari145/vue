import Vue from 'vue';
import Vuex from 'vuex';
import {state} from './state.js'
import {mutations} from './mutations.js'
import {getters} from './getters.js'
import {actions} from './actions.js'

Vue.use(Vuex);

const module = {
    modules:{
        example:{
            namespaced:true,
            state:state,
            getters:getters,
            mutations:mutations,
            actions:actions
        }
    }
}

export default new Vuex.Store(module);
